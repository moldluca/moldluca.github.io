#!/usr/bin/env python3
"""Regenerează portretul de pe site cu fața reală a lui Luca, folosind Gemini 2.5 Flash Image.
Referințe: toate imaginile din _face-ref/ (pozele reale). Output: luca-real.jpg (nu suprascrie originalul)."""
import os, sys, glob, mimetypes
from google import genai
from google.genai import types

KEY = os.environ["GEMINI_API_KEY"]
HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)

refs = sorted(
    p for p in glob.glob(os.path.join(HERE, "*"))
    if p.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".heic"))
    and not os.path.basename(p).startswith("luca-real")
)
if not refs:
    sys.exit("Nicio poză de referință în _face-ref/. Pune pozele reale acolo.")
print("Referințe:", [os.path.basename(p) for p in refs])

PROMPT = (
    "The images provided are real photos of the SAME young man. Study his true facial "
    "structure, bone structure, eyes, nose, jawline and skin from these photos and keep his "
    "identity EXACTLY. Generate one photorealistic professional portrait of THIS EXACT person: "
    "a natural, candid 3/4-body outdoor portrait in soft daylight, wearing a clean navy blazer "
    "over a white t-shirt, short hair (no cap), relaxed confident expression, looking at the "
    "camera, blurred green garden background. Realistic skin texture and pores, real photograph "
    "look (not AI, not airbrushed), sharp focus on the face. No watermark, no text. "
    "The face MUST be recognizably the same person as in the reference photos."
)

def part(p):
    data = open(p, "rb").read()
    mime = mimetypes.guess_type(p)[0] or "image/jpeg"
    return types.Part.from_bytes(data=data, mime_type=mime)

client = genai.Client(api_key=KEY)
contents = [part(p) for p in refs] + [PROMPT]

resp = client.models.generate_content(
    model="gemini-2.5-flash-image",
    contents=contents,
)

out = os.path.join(HERE, "luca-real.jpg")
saved = False
for cand in resp.candidates:
    for prt in cand.content.parts:
        if getattr(prt, "inline_data", None) and prt.inline_data.data:
            open(out, "wb").write(prt.inline_data.data)
            saved = True
            print("Salvat:", out)
        elif getattr(prt, "text", None):
            print("Model:", prt.text)
if not saved:
    sys.exit("Gemini nu a returnat imagine. Vezi textul de mai sus.")
