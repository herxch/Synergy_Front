# synergytire.com

Front-end for the **Synergy Tire** brand site, rebuilt in the style and
structure of `www.sutongctr.com` (Create React App + React Router, CSS Modules,
shared industrial design system).

## Getting started

```bash
npm install      # first time only (or copy node_modules from a sibling project)
npm start        # dev server at http://localhost:3000
npm run build    # production build in ./build
```

## Structure

```
src/
  index.css                     # design tokens (brand = green + orange accent)
  App.js                        # routes
  assets/pic/                   # logo, hero, product & category images
  components/
    config/                     # ← brand content lives here
      site.js                   #   brand copy / hero / about / value props
      navigation.js             #   nav links
      categories.js             #   home-page fitment tiles (+ icons)
      products.js               #   full tire catalog (crawled + normalized)
      resources.js              #   warranty / commercial warranty / tire-iq / ...
      scroll.js
    layouts/                    # Navbar, Footer, Main, About, Products,
                                # Contact, Dealer, Resources sections
    pages/                      # one component per route
    ui/                         # Button, Modal, PageHero, PageLoader, etc.
    hooks/
```

The site is **config-driven**: brand identity is isolated in `components/config`
and `assets/`, so it shares its component code with the sibling
`hemispheretires.com` project. Synergy re-skins to green via `index.css` tokens
and adds a Commercial (TBR) product group plus a Commercial Warranty page.

## Pages

Home · About · Products (Consumer + Commercial groups, per-tire detail with full
spec tables) · Dealer Locator · Warranty · Commercial Warranty · Tire IQ ·
Contact.

Product content (15 patterns across consumer + commercial, with features,
performance ratings and size tables) was crawled from the original site and
re-typed into `config/products.js`.
