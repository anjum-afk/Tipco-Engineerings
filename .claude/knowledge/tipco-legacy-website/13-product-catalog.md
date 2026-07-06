# Product Catalog — tipcoengineering.com

**Audited:** 30 June 2026 (live crawl of every canonical product page)
Parent index: [12-content-inventory.md](12-content-inventory.md)

~28 unique products live under 12 duplicate path prefixes (`/mill-series/`, `/paint/`, `/ink/`, `/milling/`, `/coating/`, `/pharma/`, `/chemical/`, `/disperser-series/`, `/homogenizers/`, `/laboratory-machines/`, `/mixing/`, `/production-line/`, etc.). The canonical URL below is the "series" path; the same product appears at up to 7 other URLs.

---

## Master product table

| # | Product | Category | Spec depth | Images | Brochure | Notes |
|---|---------|----------|-----------|:------:|:--------:|-------|
| 1 | Dyno Mill | Mill Series | Full (THM-10/15/25) | 2 | ✖ `#` | — |
| 2 | Vertical Bead Mill | Mill Series | 1 variant (TVM-25) | 4 | ✖ | "25ph" typo |
| 3 | Basket Mill | Mill Series | **None** (empty section) | 6 | ✖ | specs missing |
| 4 | Horizontal Bead Mill | Mill Series | Full (C-02/C-60/C-100) | 7 | ✖ | most complete |
| 5 | Attritor Mill Machine | Mill Series | Capacity only (AT-50→500) | 3 | ✖ | no motor/dims |
| 6 | Bead Mill | Mill Series | Full (THM-10/15/25) | 6 | ✖ | **dup of Dyno Mill** |
| 7 | High Speed Disperser | Disperser | Full (HS-0.5/1/2/2.1) | 2 | ✖ →`/catalogue` | base table |
| 8 | High Speed Disperser w/ Gripper | Disperser | Same table | 4 | ✖ →`/catalogue` | table reused |
| 9 | High Speed Disperser w/ Hydraulic Lifting | Disperser | Same table | 3 | ✖ →`/catalogue` | table reused |
| 10 | High Speed Disperser w/ Gripper + Hydraulic | Disperser | Same table | 4 | ✖ →`/catalogue` | table reused |
| 11 | Vacuum High Speed Disperser | Disperser | Same table | 7 | ✖ →`/catalogue` | phone mismatch in meta |
| 12 | Twin Shaft Disperser | Disperser | Partial (HS 2.1, RPM only) | 3 | ✖ →`/catalogue` | thin specs |
| 13 | In-Tank Homogenizer | Homogenizer | None | 4 | ✖ →`/catalogue` | overlaps #14 |
| 14 | High Share In-Tank Homogenizer | Homogenizer | Model only (HS-2) | 11 | ✖ →`/catalogue` | overlaps #13 |
| 15 | Liquid Powder Mixing Machine | Homogenizer | None | 2–4 | ✖ →`/catalogue` | also under `/mixing` |
| 16 | In-line Homogenizer | Homogenizer | None | 2 | ✖ →`/catalogue` | shortest copy |
| 17 | Intank Batch Homogenizer | Homogenizer | Model only (HS-1) | 3 | ✖ →`/catalogue` | dup copy of #13 |
| 18 | Lab High Speed Disperser | Lab | Model only (LDM) | 3 | ✖ | — |
| 19 | Lab Sigma Mixer Machine | Lab | Partial table | 3 | ✖ | **dup under `/mixing`** |
| 20 | Lab Attritor Mill | Lab | Partial table | 4 | ✖ | boilerplate copy |
| 21 | Lab Mixer | Lab | Partial (LM) | 4 | ✖ | copy describes a *mill* |
| 22 | Lab Basket Mill | Lab | Model only (LBM) | 4 | ✖ | — |
| 23 | Lab Ribbon Blender | Lab | None | 2 | ✖ | thinnest page |
| 24 | Industrial Wall Putty Mixer Machine | Mixing | None | 3 | ✖ | empty Video tab |
| 25 | Plough Share Mixer | Mixing | None | 1 | ✖ | "Plough Sear" typo, wrong image |
| 26 | Ink Production Line | Production Line | None | 4 | ✖ | solution page |
| 27 | Paint Production Line Setup | Production Line | None | 4 | ✖ | solution page |
| 28 | Paint Sludge to Primer Process | Production Line | Inline models only | 1 | ✖ `#` | thinnest; uses HSD30HP/HSH-30HP |

**Brochure legend:** ✖ = no working PDF. `#` = button href is a dead anchor. →`/catalogue` = button links to the generic (broken) catalogue flipbook page, not a product PDF.

---

## Brochure situation (the original question answered)

**When a user clicks "Download Brochure" on any product today, they get no file.** There are **zero `.pdf` links anywhere on the site.** Two broken patterns exist:

1. **`href="#"`** — button does nothing (e.g. Dyno Mill, Paint Sludge to Primer; confirmed in raw HTML).
2. **`href="/catalogue"`** — button sends the user to one generic 34-page flipbook (not specific to the product). That `/catalogue` page returns HTTP 200 but **emits PHP errors** (`ini_set(): Headers already sent`, session errors from `app/controllers/Catalogue.php`) and offers no direct PDF download.

**Redesign requirement:** a real, per-product downloadable spec sheet (PDF). No competitor (Wahal, Raymer, Mecworks, etc.) offers this — see `tipco-redesign/02-competitive-analysis.md`. It is a genuine differentiator for B2B buyers who need specs before enquiring.

---

## Full spec tables (products that have them)

### Dyno Mill / Bead Mill (identical — THM series)
| Spec | THM-10 | THM-15 | THM-25 |
|---|---|---|---|
| Output | 1–3 L/min | 2–6 L/min | 4–10 L/min |
| Bead dia | 0.8–2 mm | 0.8–2 mm | 0.8–2.2 mm |
| Disk material | SS / TC / HCHC | SS / TC / HCHC | SS / TC / HCHC |
| Chamber vol | 6.5 L | 14.5 L | 25 L |
| Tip speed | 0–13 m/s | 0–13 m/s | 0–13 m/s |
| Separator | Tungsten Carbide | Tungsten Carbide | Tungsten Carbide |
| Motor | 10 HP | 15 HP | 25 HP |
| Weight | 700 | 900 | 1200 (units omitted) |

> Bead Mill page reuses this exact table and copy — its description even calls itself "the dyno mill." Consolidate.

### Horizontal Bead Mill (C series — most complete on the site)
| Spec | C-02 | C-60 | C-100 |
|---|---|---|---|
| Output | 4–6 L/min | 6–20 L/min | 15–35 L/min |
| Chamber vol | 30 L | 55 L | 90 L |
| Actual chamber vol | 30 L | 50 L | 85 L |
| Bead dia | 0.8–2 mm | 0.8–2 mm | 0.8–2.2 mm |
| Tip speed | 8–10 m/s | 7–12 m/s | 6–11 m/s |
| Motor | 30 HP | 50 HP | 60 HP |
| Weight | 1200 kg | 1500 kg | 2200 kg |
| Pins | Carbide | Carbide | Carbide |

### Vertical Bead Mill — TVM-25 (single variant)
Output 3–6 L · Chamber 25 L · Motor 25 HP · Bead 1.6–2 mm · Weight 800 kg · Disk HCHC/SS/MS · ⚠ "Motor Power 25 ph" looks like a typo.

### Attritor Mill — capacity only
AT-50 (50 L/batch) · AT-100 (100 L) · AT-200 (200 L) · AT-500 (500 L). No motor/RPM/dimensions/weight.

### High Speed Disperser series (ONE table shared by all 6 disperser pages)
| Spec | HS-0.5 | HS-1 | HS-2 | HS-2.1 |
|---|---|---|---|---|
| Capacity | 50–200 L | 200–500 L | 500–1000 L | 1000–1500 L |
| Motor | 5 HP | 10 HP | 15/20 HP | 25/30/40 HP |
| RPM | 1440 | 1440 | 1440 | 1440 |
| Hydraulic lift | 900 mm | 1100 mm | 1200 mm | 1400 mm |
| Shaft dia | 45 mm | 60 mm | 65/70 mm | 75/80 mm |
| Blade | 6"–8" | 10" | 12" | 14" |

> Gripper / Vacuum / Hydraulic / Twin-Shaft variants do NOT have variant-specific numbers — they all show this base table.

### Lab machines (partial tables)
- **Lab Sigma Mixer** (also at `/mixing/lab-sigma-mixer-machine` — duplicate): Motor 1 HP · 1440 RPM · 3ph · Jacket 2.5–3 mm · 440 V
- **Lab Attritor Mill:** 1 HP · 1440 RPM · 3ph · Shaft 25 mm · Tank 3/4 mm · Rod 6" · 440 V
- **Lab Mixer (LM):** 1 HP · 1440 RPM · 3ph · Shaft 25 mm · Hydraulic 720 · Blade 4" · 440 V (⚠ copy describes a *mill*, not a mixer)

Homogenizers (#13–17) and all Mixing / Production-Line / no-table products list at most a model number — no capacity/power/dimensions.

---

## Content-quality issues to fix in rebuild

- **Duplicate products:** Bead Mill = Dyno Mill; Lab Sigma Mixer published at two URLs; In-Tank vs High-Share In-Tank vs Intank Batch homogenizers overlap heavily (canonicalize or merge).
- **Templated/wrong copy:** Lab Attritor Mill & Lab Mixer share boilerplate; Lab Mixer copy describes a mill; Bead Mill copy references "the dyno mill."
- **Missing specs:** Basket Mill, all homogenizers, all mixing machines, all production lines — no real spec tables. No MOC or weight anywhere.
- **No alt text** on any of the ~110+ product images.
- **Copy typos:** "Plough Sear Mixer", "cacked material", "mixing and powder", "three corresponding sentences of premixing", "25 ph".
- **CTA inconsistency:** "Enquire Now" vs "Enquiry Now" vs "Get Quote Now" across pages.
- **Contact mismatch:** Vacuum Disperser meta cites phone 7496962283 vs on-page 1800 1020 229 / +918826176988.
- **Placeholder media:** Wall Putty Mixer has an empty "Video" tab; no product has an embedded video despite the nav implying it.
