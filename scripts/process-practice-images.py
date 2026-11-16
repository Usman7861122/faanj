"""Turn Shutterstock downloads into the Our Practice images. Run: python3 scripts/process-practice-images.py"""
import os, sys
from PIL import Image
D = os.environ.get('DL') or os.path.expanduser('~/Downloads')
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'practice')
os.makedirs(OUT, exist_ok=True)
def find(i):
    for f in sorted(os.listdir(D)):
        if f.startswith(f'shutterstock_{i}'): return os.path.join(D, f)
def wide(src, name, w=2400, ratio=2.0, cy=0.55):
    im = Image.open(src).convert('RGB'); W, H = im.size
    h = int(W / ratio)
    if h > H: h, ratio = H, W / H
    top = max(0, min(H - h, int(H * cy - h / 2)))
    im.crop((0, top, W, top + h)).resize((w, int(w / ratio)), Image.LANCZOS).save(f'{OUT}/{name}.jpg', quality=84, optimize=True, progressive=True)
def square(src, name, cx=0.5, s=1400):
    im = Image.open(src).convert('RGB'); W, H = im.size
    x = max(0, min(W - H, int(W * cx - H / 2)))
    im.crop((x, 0, x + H, H)).resize((s, s), Image.LANCZOS).save(f'{OUT}/{name}.jpg', quality=85, optimize=True, progressive=True)
jobs = {'2701688707': ('hero', wide), '2696698869': ('orthotics', square), '2621647707': ('consult', square), '2691583685': ('exam', square)}
for i, (name, fn) in jobs.items():
    p = find(i)
    if p: fn(p, name); print('ok', name)
    else: print('missing', i)
