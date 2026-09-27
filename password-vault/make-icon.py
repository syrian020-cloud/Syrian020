#!/usr/bin/env python3
"""Generate PassVault launcher icons (modern gradient squircle + shield/keyhole)."""
import math, os
from PIL import Image, ImageDraw, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
S = 1024

def lerp(a, b, t): return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def gradient(size, c1, c2):
    img = Image.new('RGB', (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            px[x, y] = lerp(c1, c2, t)
    return img

def squircle_mask(size, radius):
    m = Image.new('L', (size, size), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m

def shield(draw, cx, cy, w, h, fill, outline=None, width=0):
    pts = []
    top = cy - h / 2
    pts.append((cx - w / 2, top + h * 0.12))
    pts.append((cx, top))
    pts.append((cx + w / 2, top + h * 0.12))
    pts.append((cx + w / 2, top + h * 0.5))
    steps = 40
    for i in range(steps + 1):
        a = i / steps
        ang = a * math.pi
        x = cx + (w / 2) * math.cos(ang)
        y = top + h * 0.5 + (h * 0.5) * math.sin(ang)
        pts.append((x, y))
    pts.append((cx - w / 2, top + h * 0.5))
    draw.polygon(pts, fill=fill, outline=outline, width=width)

def make():
    bg = gradient(S, (99, 102, 241), (14, 165, 233))  # indigo -> sky
    # soft highlight blob
    glow = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([S * 0.05, -S * 0.25, S * 0.85, S * 0.55], fill=(255, 255, 255, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    bg = Image.alpha_composite(bg.convert('RGBA'), glow)

    layer = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = S / 2, S * 0.52
    # shadow
    sh = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    shield(ImageDraw.Draw(sh), cx, cy + 30, S * 0.52, S * 0.62, (0, 0, 0, 110))
    sh = sh.filter(ImageFilter.GaussianBlur(40))
    layer = Image.alpha_composite(layer, sh)
    d = ImageDraw.Draw(layer)
    # outer shield (white), inner shield (dark navy)
    shield(d, cx, cy, S * 0.52, S * 0.62, (255, 255, 255, 255))
    shield(d, cx, cy, S * 0.44, S * 0.53, (17, 24, 39, 255))
    # keyhole
    r = S * 0.075
    kx, ky = cx, cy - S * 0.04
    d.ellipse([kx - r, ky - r, kx + r, ky + r], fill=(56, 189, 248, 255))
    d.polygon([(kx - r * 0.55, ky + r * 0.4), (kx + r * 0.55, ky + r * 0.4),
               (kx + r * 0.9, ky + r * 2.6), (kx - r * 0.9, ky + r * 2.6)], fill=(56, 189, 248, 255))
    # small check-dots (asterisk style) under keyhole
    for i in range(-1, 2):
        dx = i * S * 0.06
        d.ellipse([kx + dx - 12, ky + r * 3.3 - 12, kx + dx + 12, ky + r * 3.3 + 12], fill=(148, 163, 184, 255))

    img = Image.alpha_composite(bg, layer)
    full = img.copy()
    full.putalpha(squircle_mask(S, int(S * 0.22)))
    return full

def save(img, path, size):
    img.resize((size, size), Image.LANCZOS).save(path, 'PNG')

if __name__ == '__main__':
    icon = make()
    save(icon, os.path.join(HERE, 'icon-source.png'), 1024)
    for name, size in [('icon-512.png', 512), ('icon-192.png', 192)]:
        save(icon, os.path.join(HERE, 'www', name), size)
        save(icon, os.path.join(HERE, 'icons', name), size)
    for dens, size in [('mdpi', 48), ('hdpi', 72), ('xhdpi', 96), ('xxhdpi', 144), ('xxxhdpi', 192)]:
        save(icon, os.path.join(HERE, 'icons', f'ic_launcher_{dens}.png'), size)
    print('icons generated')
