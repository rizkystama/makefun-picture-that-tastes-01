# The picture that tastes of one ingredient

One picture of food, built on a single ingredient: **a ripe mango**.

The photograph is a macro shot of one mango, halved, its cut face glistening
with juice droplets under warm side light against a dark background. Nothing
else is in the frame — no hands, no plate, no second ingredient — so the
whole picture is the taste of mango.

## How it works

- `image.jpg` is the photograph, committed in this repo (1024×683, ~103 KB).
- `main.ts` copies those bytes verbatim to `entry.png` in the output
  directory (`MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`). The copy is
  deterministic: no randomness, no network, no timestamps in the output.

Run it with `node main.ts`.
