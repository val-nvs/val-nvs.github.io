# -*- coding: utf-8 -*-
"""Regenerate a -small.jpg thumbnail for every full photo in this folder, uniformly.
Run:  python _make-smalls.py    (from anywhere; paths are relative to this file)
"""
import os
from PIL import Image, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
MAX = 640          # longest side, px
QUALITY = 72
SKIP = {"fairy-small-alt.jpg"}   # stray 150x100 thumbnail, not a real photo

def is_full(name):
    n = name.lower()
    return n.endswith(".jpg") and not n.endswith("-small.jpg")

made = []
for f in sorted(os.listdir(HERE)):
    if not is_full(f) or f in SKIP:
        continue
    src = os.path.join(HERE, f)
    dst = os.path.join(HERE, f[:-4] + "-small.jpg")
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = im.size
    s = min(1.0, MAX / max(w, h))
    if s < 1.0:
        im = im.resize((round(w * s), round(h * s)), Image.LANCZOS)
    im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    made.append(os.path.basename(dst))

# remove the bogus small created earlier from the stray thumbnail
stray = os.path.join(HERE, "fairy-small-alt-small.jpg")
if os.path.exists(stray):
    os.remove(stray)

print("regenerated %d thumbnails (max %dpx, q%d)" % (len(made), MAX, QUALITY))
