## Rebrand: MathSpark → CrestQ

**New brand**
- Name: **CrestQ**
- Tagline: **Visual Learning for Higher Scores**
- Logo: uploaded image (navy bg, gold arch + peak, silver wordmark)
- Palette shift: navy + gold + silver/cream (replacing the current magenta/amber dark theme)

**Changes**

1. **Logo asset** — upload the attached image via lovable-assets and use it in Nav + Footer (replacing the `Sparkles` icon + text mark).
2. **Site config** (`src/lib/config.ts`) — update `name` to "CrestQ", `tagline`, `email` to `hello@crestq.com`.
3. **Color tokens** (`src/styles.css`) — retune `--background` to deep navy, `--primary` to gold, `--accent` to silver/cream; update `--gradient-hero`, `--gradient-primary`, `--gradient-accent`, `--shadow-glow` to match.
4. **Copy sweep** — replace every "MathSpark" mention across components (Hero, Footer, Nav, FAQ, etc.) and route metadata (`src/routes/index.tsx` title/description/OG/JSON-LD) with "CrestQ" + new tagline.
5. **Grades card gradients** — adjust to navy/gold/silver harmony.
6. **Favicon / index.html title** if present — switch to CrestQ.

**Out of scope** (unless you say otherwise)
- Keep WhatsApp number, pricing ($9/hr), Class 1–12 scope, page structure, sections, and Paddle/payments discussion.

**Question**
- Keep email as `hello@crestq.com` or use a different address?
