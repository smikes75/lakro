# LAKRO, s.r.o. — firemní web

## O projektu
Rebuild webu lakro.eu (původně WordPress + Avada theme) jako moderní Next.js static site.
Firma LAKRO, s.r.o. — rodinná firma založená 1995 v Praze. Tři divize: slaboproudé systémy, realizace staveb, hausbóty.

## Technologie
- **Next.js 16** nasazený na **Vercel** (https://web-lemon-three-91.vercel.app)
- **TypeScript**
- **Tailwind CSS v4**
- Fonty: **Montserrat** (body text), **Raleway** (nadpisy) — přes next/font/google
- Build: `npm run build`
- Dev: `npm run dev` → http://localhost:3000
- Deploy: push do main = automatický deploy na Vercel

## Brand
- Hlavní červená: `#e4002b` (brand-red)
- Tmavá červená: `#780404` (brand-dark)
- Text: `#212934` (text)
- Šedý text: `#747474` (text-light)
- Světlé pozadí: `#f5f5f5` (gray-light)

## Struktura stránek (15 stránek)
| URL | Soubor | Popis |
|-----|--------|-------|
| `/` | `app/page.tsx` | Homepage — slider (9 obrázků) + 3 divize |
| `/o-nas` | `app/o-nas/page.tsx` | O firmě, hodnoty, certifikáty |
| `/slaboproude-systemy` | `app/slaboproude-systemy/page.tsx` | Hub: 6 flip karet → detail stránky |
| `/divize-elektro-eps` | `app/divize-elektro-eps/page.tsx` | EPS — požární signalizace |
| `/divize-elektro-ezs` | `app/divize-elektro-ezs/page.tsx` | EZS — zabezpečovací systém |
| `/divize-elektro-ekv` | `app/divize-elektro-ekv/page.tsx` | EKV — kontrola vstupu |
| `/divize-elektro-ero` | `app/divize-elektro-ero/page.tsx` | ERO — ozvučovací systémy |
| `/kamerove-systemy` | `app/kamerove-systemy/page.tsx` | CCTV — kamerové systémy |
| `/domaci-telefony` | `app/domaci-telefony/page.tsx` | Domácí telefony |
| `/realizace-staveb` | `app/realizace-staveb/page.tsx` | Hub: 3 flip karty → detail stránky |
| `/realizace-staveb-detail` | `app/realizace-staveb-detail/page.tsx` | Kompletní realizace staveb |
| `/rekonstrukce` | `app/rekonstrukce/page.tsx` | Rekonstrukce |
| `/zatepleni-budov` | `app/zatepleni-budov/page.tsx` | Zateplení budov |
| `/hausboty` | `app/hausboty/page.tsx` | Hausbóty — text + galerie 10 fotek |
| `/kontakt` | `app/kontakt/page.tsx` | Kontaktní údaje + Google Maps |

## Komponenty
- `Header.tsx` — sticky navigace, responsive mobile menu
- `Footer.tsx` — patička s copyrightem
- `HeroSlider.tsx` — fade slider na homepage (4s interval)
- `PageHero.tsx` — hero banner s obrázkem a titulem pro podstránky
- `FlipCard.tsx` — otáčecí karty služeb (hover efekt)
- `ImageGallery.tsx` — galerie s autoplay a lightboxem
- `ServiceDetail.tsx` — šablona pro detail služby (text + obrázek)

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
- Připojit vlastní doménu lakro.eu na Vercelu

## Pravidla
- Jazyk webu je čeština
- Piš commit messages anglicky
- Při úpravách zachovej stávající design a barevnost
