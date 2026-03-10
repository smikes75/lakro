# LAKRO, s.r.o. — firemní web

## O projektu
Rebuild webu lakro.eu (původně WordPress + Avada theme) jako moderní Next.js static site.
Firma LAKRO, s.r.o. — rodinná firma založená 1995 v Praze. Tři divize: slaboproudé systémy, realizace staveb, hausbóty.

## Technologie
- **Next.js 16** se static exportem (`output: "export"` v next.config.ts)
- **TypeScript**
- **Tailwind CSS v4**
- Fonty: **Montserrat** (body text), **Raleway** (nadpisy) — přes next/font/google
- Build: `npm run build` → výstup v `out/`
- Dev: `npm run dev` → http://localhost:3000

## Brand
- Hlavní červená: `#e4002b` (brand-red)
- Tmavá červená: `#780404` (brand-dark)
- Text: `#212934` (text)
- Šedý text: `#747474` (text-light)
- Světlé pozadí: `#f5f5f5` (gray-light)

## Struktura stránek
| URL | Soubor | Popis |
|-----|--------|-------|
| `/` | `app/page.tsx` | Homepage — slider (9 obrázků) + 3 divize |
| `/o-nas` | `app/o-nas/page.tsx` | O firmě, hodnoty, certifikáty |
| `/slaboproude-systemy` | `app/slaboproude-systemy/page.tsx` | 6 služeb: EPS, EZS, EKV, ERO, CCTV, telefony |
| `/realizace-staveb` | `app/realizace-staveb/page.tsx` | 3 služby: stavby, rekonstrukce, zateplení |
| `/hausboty` | `app/hausboty/page.tsx` | Hausbóty — text + galerie 10 fotek |
| `/kontakt` | `app/kontakt/page.tsx` | Kontaktní údaje + Google Maps |

## Komponenty
- `Header.tsx` — sticky navigace, responsive mobile menu
- `Footer.tsx` — patička s copyrightem
- `HeroSlider.tsx` — fade slider na homepage (4s interval)
- `PageHero.tsx` — hero banner s obrázkem a titulem pro podstránky
- `FlipCard.tsx` — otáčecí karty služeb (hover efekt)
- `ImageGallery.tsx` — galerie s autoplay a lightboxem

## Obrázky
Všechny v `public/images/`:
- `slider/` — 9 slideshow obrázků pro homepage
- `services/` — fotky služeb (elektro + stavby)
- `hausboty/` — 10 fotek hausbótů
- `logo.png`, `logo_osvedceni.png`, header obrázky

## Referenční originál
Ve složce `../static-copy/lakro.eu/` je kompletní wget mirror původního WordPress webu pro srovnání.

## Kontaktní údaje firmy
- LAKRO, s.r.o., Trojická 437/20, Praha 2, 128 00
- Tel: +420 739 592 960, email: info@lakro.eu
- IČO: 62915266, DIČ: CZ62915266
- Bankovní spojení: 19-1444260297/0100, DS: d4ahmza

## Co zbývá doladit
- Vizuální fine-tuning (porovnat s lakro.eu)
- Google Maps embed — ověřit souřadnice
- Kontaktní formulář
- Favicon z loga
- Optimalizace obrázků (WebP)
- Nasazení (Vercel / Netlify / Cloudflare Pages)

## Pravidla
- Jazyk webu je čeština
- Piš commit messages anglicky
- Při úpravách zachovej stávající design a barevnost
