(function() {
	const canvas = document.createElement("canvas");
	canvas.id = "trail";
	canvas.style.position = "fixed";
	canvas.style.top = "0";
	canvas.style.left = "0";
	canvas.style.pointerEvents = "none";
	document.body.appendChild(canvas);

	const ctx = canvas.getContext("2d");
	let width = window.innerWidth;
	let height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;

	let targetX = width / 2;
	let targetY = height / 2;
	let orbX = targetX;
	let orbY = targetY;
	const sparkles = [];

	window.addEventListener("mousemove", (e) => {
		targetX = e.clientX;
		targetY = e.clientY;

		for (let i = 0; i < 3; i++) {
			sparkles.push({
				x: e.clientX + (Math.random() - 0.5) * 20,
				y: e.clientY + (Math.random() - 0.5) * 20,
				alpha: 1,
				size: Math.random() * 1.5 + 0.5,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5
			});
		}
	});

	function animate() {
		// Clear the canvas completely for full transparency
		ctx.clearRect(0, 0, width, height);

		for (let i = 0; i < sparkles.length; i++) {
			const s = sparkles[i];
			s.x += s.vx;
			s.y += s.vy;
			s.alpha -= 0.025;
			ctx.fillStyle = `rgba(0,255,255,${s.alpha})`;
			ctx.beginPath();
			ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
			ctx.fill();

			if (s.alpha <= 0) {
				sparkles.splice(i, 1);
				i--;
			}
		}

		requestAnimationFrame(animate);
	}

	window.addEventListener("resize", () => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	});

	animate();
})();