/**
 * Cloth Overlay - Drop-in tearable mesh overlay
 * Usage: <script src="cloth-overlay.js"></script>
 * Options: <script src="cloth-overlay.js" data-spacing="60" data-color="30,30,30" data-gravity="0.9"></script>
 */
(function () {
  // Read options from script tag
  const scriptTag = document.currentScript;
  const opt = (name, fallback) => {
    const v = scriptTag && scriptTag.getAttribute('data-' + name);
    return v !== null && v !== undefined ? v : fallback;
  };

  const SPACING = Number(opt('spacing', 60));
  const ITERATIONS = Number(opt('iterations', 2));
  const MOUSE_RADIUS = Number(opt('mouse-radius', 25));
  const TENSION = Number(opt('tension', 1.1));
  const GRAVITY = Number(opt('gravity', 0.9));
  const DAMP = Number(opt('damp', 0.993));
  const COLOR = opt('color', '30,30,30');
  const ZINDEX = Number(opt('zindex', 9999));
  const WIRE_WIDTH = Number(opt('wire-width', 1.5));

  // Create canvas
  const canvas = document.createElement('canvas');
  Object.assign(canvas.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: ZINDEX,
    pointerEvents: 'none'
  });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W, H;
  let cols, rows, totalPoints;
  let px, py, opx, opy, pinned, connected, alpha;
  let stickA, stickB, stickLen, stickActive, totalSticks;
  let mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };
  let frameCount = 0;
  let allCleared = false;

  function idx(r, c) { return r * cols + c; }

  function init() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

    cols = Math.floor(W / SPACING) + 2;
    rows = Math.floor(H / SPACING) + 2;
    totalPoints = cols * rows;

    px = new Float32Array(totalPoints);
    py = new Float32Array(totalPoints);
    opx = new Float32Array(totalPoints);
    opy = new Float32Array(totalPoints);
    pinned = new Uint8Array(totalPoints);
    connected = new Uint8Array(totalPoints);
    alpha = new Float32Array(totalPoints);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = idx(r, c);
        const x = c * SPACING;
        const y = r * SPACING;
        px[i] = opx[i] = x;
        py[i] = opy[i] = y;
        pinned[i] = (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) ? 1 : 0;
        connected[i] = 1;
        alpha[i] = 1;
      }
    }

    const hCount = rows * (cols - 1);
    const vCount = (rows - 1) * cols;
    totalSticks = hCount + vCount;

    stickA = new Int32Array(totalSticks);
    stickB = new Int32Array(totalSticks);
    stickLen = new Float32Array(totalSticks);
    stickActive = new Uint8Array(totalSticks);

    let si = 0;
    const rH = SPACING * TENSION;
    const rV = SPACING * TENSION;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols - 1; c++) {
        stickA[si] = idx(r, c); stickB[si] = idx(r, c + 1);
        stickLen[si] = rH; stickActive[si] = 1; si++;
      }
    }
    for (let r = 0; r < rows - 1; r++) {
      for (let c = 0; c < cols; c++) {
        stickA[si] = idx(r, c); stickB[si] = idx(r + 1, c);
        stickLen[si] = rV; stickActive[si] = 1; si++;
      }
    }

    allCleared = false;
  }

  // Push points with sphere
  function pushPoints() {
    const mx = mouse.x, my = mouse.y;
    const pmx = mouse.px, pmy = mouse.py;
    if (mx < -999 || pmx < -999) return;

    const mdx = mx - pmx, mdy = my - pmy;
    const dist = Math.sqrt(mdx * mdx + mdy * mdy);
    const step = MOUSE_RADIUS * 0.4;
    const steps = Math.max(1, Math.ceil(dist / step));
    const r2 = MOUSE_RADIUS * MOUSE_RADIUS;

    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const cx = pmx + mdx * t;
      const cy = pmy + mdy * t;

      for (let i = 0; i < totalPoints; i++) {
        if (pinned[i]) continue;
        const pdx = px[i] - cx;
        const pdy = py[i] - cy;
        const distSq = pdx * pdx + pdy * pdy;
        if (distSq < r2 && distSq > 0.1) {
          const d = Math.sqrt(distSq);
          const overlap = MOUSE_RADIUS - d;
          const nx = pdx / d;
          const ny = pdy / d;
          px[i] += nx * overlap;
          py[i] += ny * overlap;
        }
      }
    }
  }

  // Cut: center line of mouse path intersects stick
  function cutWires() {
    const mx = mouse.x, my = mouse.y;
    const pmx = mouse.px, pmy = mouse.py;
    if (mx < -999 || pmx < -999) return;

    for (let i = 0; i < totalSticks; i++) {
      if (!stickActive[i]) continue;
      const a = stickA[i], b = stickB[i];
      if (segsIntersect(pmx, pmy, mx, my, px[a], py[a], px[b], py[b])) {
        stickActive[i] = 0;
      }
    }
  }

  function segsIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
    const d1 = cross(cx, cy, dx, dy, ax, ay);
    const d2 = cross(cx, cy, dx, dy, bx, by);
    const d3 = cross(ax, ay, bx, by, cx, cy);
    const d4 = cross(ax, ay, bx, by, dx, dy);
    return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
           ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
  }

  function cross(ax, ay, bx, by, cx, cy) {
    return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  }

  // BFS connectivity
  function updateConnectivity() {
    connected.fill(0);
    const queue = new Int32Array(totalPoints);
    let head = 0, tail = 0;

    for (let i = 0; i < totalPoints; i++) {
      if (pinned[i]) { connected[i] = 1; queue[tail++] = i; }
    }

    const adjCount = new Int32Array(totalPoints);
    for (let i = 0; i < totalSticks; i++) {
      if (!stickActive[i]) continue;
      adjCount[stickA[i]]++;
      adjCount[stickB[i]]++;
    }
    const adjStart = new Int32Array(totalPoints + 1);
    for (let i = 1; i <= totalPoints; i++) adjStart[i] = adjStart[i - 1] + adjCount[i - 1];
    const adjList = new Int32Array(adjStart[totalPoints]);
    const adjFill = new Int32Array(totalPoints);
    for (let i = 0; i < totalSticks; i++) {
      if (!stickActive[i]) continue;
      const a = stickA[i], b = stickB[i];
      adjList[adjStart[a] + adjFill[a]++] = b;
      adjList[adjStart[b] + adjFill[b]++] = a;
    }

    while (head < tail) {
      const cur = queue[head++];
      const s = adjStart[cur], e = s + adjFill[cur];
      for (let j = s; j < e; j++) {
        const nb = adjList[j];
        if (!connected[nb]) { connected[nb] = 1; queue[tail++] = nb; }
      }
    }
  }

  function simulate() {
    cutWires();

    for (let i = 0; i < totalPoints; i++) {
      if (pinned[i]) continue;
      const vx = (px[i] - opx[i]) * DAMP;
      const vy = (py[i] - opy[i]) * DAMP;
      opx[i] = px[i];
      opy[i] = py[i];
      px[i] += vx;
      py[i] += vy + GRAVITY + (connected[i] ? 0 : GRAVITY * 2);

      if (!connected[i]) {
        alpha[i] = Math.max(0, alpha[i] - 0.015);
      } else {
        alpha[i] = Math.min(1, alpha[i] + 0.1);
      }
    }

    for (let iter = 0; iter < ITERATIONS; iter++) {
      pushPoints();
      for (let i = 0; i < totalSticks; i++) {
        if (!stickActive[i]) continue;
        const a = stickA[i], b = stickB[i];
        const dx = px[b] - px[a];
        const dy = py[b] - py[a];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) continue;
        const diff = (stickLen[i] - dist) / dist * 0.5;
        const ox = dx * diff;
        const oy = dy * diff;
        if (!pinned[a]) { px[a] -= ox; py[a] -= oy; }
        if (!pinned[b]) { px[b] += ox; py[b] += oy; }
      }
    }

    frameCount++;
    if (frameCount % 4 === 0) updateConnectivity();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    const hCount = rows * (cols - 1);

    // Filled faces
    for (let r = 0; r < rows - 1; r++) {
      for (let c = 0; c < cols - 1; c++) {
        const top    = r * (cols - 1) + c;
        const bottom = (r + 1) * (cols - 1) + c;
        const left   = hCount + r * cols + c;
        const right  = hCount + r * cols + (c + 1);

        if (!stickActive[top] || !stickActive[bottom] || !stickActive[left] || !stickActive[right]) continue;

        const i00 = idx(r, c);
        const i10 = idx(r, c + 1);
        const i01 = idx(r + 1, c);
        const i11 = idx(r + 1, c + 1);

        const al = Math.min(alpha[i00], alpha[i10], alpha[i01], alpha[i11]);
        if (al < 0.01) continue;

        const maxD = SPACING * 3;
        if (Math.abs(px[i10] - px[i00]) + Math.abs(py[i10] - py[i00]) > maxD) continue;
        if (Math.abs(px[i01] - px[i00]) + Math.abs(py[i01] - py[i00]) > maxD) continue;

        ctx.fillStyle = `rgba(${COLOR},${al.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(px[i00], py[i00]);
        ctx.lineTo(px[i10], py[i10]);
        ctx.lineTo(px[i11], py[i11]);
        ctx.lineTo(px[i01], py[i01]);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Wireframe
    ctx.lineWidth = WIRE_WIDTH;
    ctx.lineCap = 'round';
    for (let i = 0; i < totalSticks; i++) {
      if (!stickActive[i]) continue;
      const a = stickA[i], b = stickB[i];
      const al = Math.min(alpha[a], alpha[b]);
      if (al < 0.01) continue;
      const ddx = px[b] - px[a], ddy = py[b] - py[a];
      if (Math.abs(ddx) + Math.abs(ddy) > SPACING * 3) continue;
      ctx.strokeStyle = `rgba(${COLOR},${al.toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(px[a], py[a]);
      ctx.lineTo(px[b], py[b]);
      ctx.stroke();
    }

    // Mouse cursor
    if (mouse.x > -999) {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fill();
    }
  }

  function checkAllCleared() {
    if (allCleared) return;
    for (let i = 0; i < totalSticks; i++) {
      if (stickActive[i]) return;
    }
    // All sticks gone — remove overlay
    allCleared = true;
    setTimeout(() => canvas.remove(), 2000);
  }

  function loop() {
    simulate();
    draw();
    if (frameCount % 60 === 0) checkAllCleared();
    requestAnimationFrame(loop);
  }

  // Events — listen on document so clicks pass through canvas
  document.addEventListener('mousemove', e => {
    mouse.px = mouse.x; mouse.py = mouse.y;
    mouse.x = e.clientX; mouse.y = e.clientY;
  });
  document.addEventListener('touchmove', e => {
    const t = e.touches[0];
    mouse.px = mouse.x; mouse.py = mouse.y;
    mouse.x = t.clientX; mouse.y = t.clientY;
  }, { passive: true });
  document.addEventListener('touchstart', e => {
    const t = e.touches[0];
    mouse.x = mouse.px = t.clientX;
    mouse.y = mouse.py = t.clientY;
  });
  window.addEventListener('resize', () => init());

  init();
  loop();
})();