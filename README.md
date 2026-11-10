# Cedarline Law

A responsive, multi-page website for Cedarline Law. The project is built with plain HTML, CSS, and JavaScript; there is no package manager, framework, or build step.

## Features

- Responsive homepage with an image carousel, practice-area links, firm information, testimonials, and a contact form.
- Six query-driven practice detail pages with tailored services, preparation guidance, FAQs, and related links.
- Ten attorney profiles with local portrait assets.
- Expandable footer navigation and accreditation badges across the site.
- Page titles, descriptions, canonical links, Open Graph/Twitter metadata, `robots.txt`, and `sitemap.xml`.
- Clean folder URLs such as `/about/`; legacy `.html` URLs redirect to the clean routes.

## Pages

| Route | Content |
| --- | --- |
| `/` | Homepage |
| `/about/` | Our firm |
| `/approach/` | Our approach |
| `/contact/` | Contact and inquiry form |
| `/practice-areas/` | Practice area directory |
| `/practice/?area=criminal-defense` | Criminal defense |
| `/practice/?area=civil-litigation` | Civil litigation |
| `/practice/?area=business-corporate` | Business and corporate |
| `/practice/?area=personal-injury` | Personal injury |
| `/practice/?area=family-law` | Family law |
| `/practice/?area=trusts-estates` | Trusts and estates |
| `/team/` | Attorney profiles and firm information |

## Project Structure

```text
.
├── index.html                 # Homepage
├── pages.css                  # Shared styles for interior pages and team section
├── pages.js                   # Shared navigation, icons, reveals, and contact form
├── practice.js                # Query-driven practice page content
├── footer-menu.js             # Footer accordion behavior
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── accreditations/        # Accreditation badges
│   └── team/                  # Attorney portraits
├── about/index.html
├── approach/index.html
├── contact/index.html
├── practice-areas/index.html
├── practice/index.html
└── team/index.html
```

Root-level files such as `about.html` and `practice.html` are kept as redirects for older links. The folder `index.html` files provide the extensionless routes.

## Run Locally

From the project root, start Python's built-in static server:

```powershell
python -m http.server 8766
```

Then open `http://localhost:8766/`. If port 8766 is already in use, choose another port and use it in the URL. Opening files directly with `file://` does not test clean routes or redirects accurately.

## Contact Form

The homepage and Contact page submit to Formspree. Before launch, confirm the endpoint is connected to the correct Formspree account, configure the production domain and notification destination, and test a real submission on the deployed site. The form warns visitors not to send highly sensitive information; keep that warning and use an appropriate secure channel for confidential documents.

## SEO and Sharing

The clean-route pages include canonical URLs and Open Graph/Twitter metadata for `https://cedarlinelaw.com`. The sitemap is available at `/sitemap.xml`, and `robots.txt` points crawlers to it. After deployment, submit the sitemap in Google Search Console and use the relevant chat-app preview debugger to refresh cached link previews.

If the domain or routes change, update canonical URLs, social metadata, `robots.txt`, and `sitemap.xml` together. Social preview images currently reuse an existing Unsplash courtroom image; replace it with an approved, branded 1200×630 image if one is available.


