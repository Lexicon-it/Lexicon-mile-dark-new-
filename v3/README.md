# Lexicon MILE — Future-Ready Business Education

A complete, responsive, premium dark-theme business-school homepage built in semantic HTML, modular CSS and vanilla JavaScript. The design uses cinematic photography, editorial layouts, oversized typography, deep navy/royal blue, white and magenta. No frontend framework, package installation or build step is required.

## Goals and visual identity

- Position Lexicon MILE as a modern, international, industry-integrated business school.
- Tell a complete story from program discovery through industry learning, career outcomes, community and admissions.
- Preserve a consistent dark visual theme on desktop, tablet and mobile.
- Use locally hosted placeholder assets, not assets from another school’s website.
- The text wordmark and CSS brand mark are a **design interpretation**, not a supplied official logo.

## Completed features

1. Thin admissions announcement bar.
2. Transparent-to-solid sticky header with eight navigation destinations.
3. Full-screen native-dialog mobile navigation, keyboard accessible.
4. Cinematic responsive hero with the requested headline, CTA hierarchy, supporting copy, scroll indicator and four floating statistics.
5. Four image-led program cards: PGDM, MBA Global, BBA and IHM / HMCT.
6. Program detail dialogs with program-specific focus areas.
7. Asymmetrical “Education That Moves Beyond The Classroom” section.
8. Four illustrative mentor profiles with hover/focus insights.
9. Blue editorial statistics section with animated counters.
10. Eight recognition items with local SVG line icons.
11. Seven monochrome recruiter text wordmarks.
12. Large placement section, four outcome figures and context disclosure.
13. Editorial alumni wall, with unknown names/designations explicitly marked as pending.
14. Three cinematic video-story previews and honest “film coming soon” dialogs.
15. Asymmetrical campus photography gallery.
16. Eight horizontally scrollable student-life cards, directional controls and progress indicator.
17. Three-slide manually controlled testimonial carousel. The supplied quotation appears first; the two additional editorial voices are explicitly labeled illustrative.
18. Dramatic final admissions CTA.
19. Multi-column footer, legal preview notices, social-channel information dialogs and back-to-top link.
20. Desktop floating actions and mobile sticky Apply/Brochure buttons.
21. Program-interest selection saved on the visitor’s own device; no application is transmitted.
22. Client-generated downloadable **plain-text concept program overview**. This is not an official PDF brochure.
23. Lazy-loaded below-fold images, responsive hero image, self-hosted Inter font and local SVG icons.
24. Scroll entrance motion, image hover zoom, number counters and subtle pointer-following CTA motion; reduced-motion preference respected.
25. Descriptive page title, meta description, a single H1, semantic section headings, alt text, skip link, focus states and native dialog keyboard handling.

## Project structure

```text
index.html                    Homepage
styles/main.css               Design tokens, components, responsive rules, motion
scripts/main.js               Content data, dialogs, carousel, local storage, download
assets/favicon.svg            Local brand-inspired favicon
assets/icons.svg              Local line-icon symbol sprite
assets/inter-latin.woff2       Self-hosted Inter variable font
assets/Inter-LICENSE.txt       SIL Open Font License
images/                       Locally saved stock placeholder photographs
images/CREDITS.md              Photograph source URLs and usage notes
tests/interactions.html       Browser-based interaction test runner (noindex)
tests/interactions.js         35 automated interaction checks against real homepage
README.md                     Project documentation
```

## Functional entry URIs

The site is single-page, with no required query parameters.

| URI | Destination / purpose |
| --- | --- |
| `/` or `/index.html` | Complete homepage |
| `/#hero-section` | Hero |
| `/#programs` | Four programs; Explore buttons open program dialogs |
| `/#about` | Learning philosophy / Why Lexicon MILE |
| `/#faculty` | Faculty and industry mentors |
| `/#recognition` | Awards |
| `/#partners` | Recruiting partners |
| `/#placements` | Placement outcomes |
| `/#alumni` | Alumni wall |
| `/#stories` | Video-story previews |
| `/#campus` | Campus gallery |
| `/#student-life` | Horizontal activity cards |
| `/#testimonials` | Testimonial carousel |
| `/#admissions` | Final admissions CTA |
| `/#contact` | Footer and contact entry points |
| `/tests/interactions.html` | Developer-only browser interaction checks |

Actions open dialogs in place and do not create additional page URLs. Apply actions open a clearly labeled admissions **preview**. Brochure actions generate `Lexicon-MILE-Program-Overview-Concept.txt` in the browser.

## Data models and storage

There is no backend, REST API, database, Table schema, authentication system, analytics integration or application submission endpoint.

Static content models in `scripts/main.js`:

- `programs`: keyed by `pgdm`, `mba`, `bba`, `ihm`; fields `title`, `category`, `image`, `description`, `highlights`.
- `awards`: eight recognition strings.
- `activities`: eight objects with `title`, `image`, `description`.
- `testimonials`: objects with `quote`, `name`, `program`, `image`, `note`.
- `storyDetails`: keyed preview objects with `category`, `title`, `image`, `text`.
- `information`: action-keyed dialog content with `eyebrow`, `title`, `body`.

Optional browser-local storage:

```json
{
  "key": "lexicon-program-interest",
  "value": {
    "program": "pgdm",
    "savedAt": "ISO-8601 timestamp"
  }
}
```

Only a selected program and save time are stored. No names, email addresses, phone numbers or other application records are collected. Storage errors are handled visibly. Clearing browser site data removes the preference.

All photographs, icons and fonts are project-local. There are no external runtime asset requests or authenticated third-party integrations.

## Intentionally not implemented / launch dependencies

- Live application submission, admissions CRM integration, secure applicant accounts or payment collection.
- Official verified application, WhatsApp, telephone, email and social profile links. Their buttons currently explain that these details are awaiting configuration instead of sending visitors to invented destinations.
- Actual institutional films; the story cards are explicitly preview thumbnails.
- An official PDF brochure. The current browser-generated download is a clearly labeled concept text overview.
- Official faculty/alumni photographs and complete alumni names, designations and batch details.
- Verified faculty affiliations, recruiter relationships, institutional awards and statistical sources.
- Program-specific duration, accreditation, eligibility, fees, scholarships, deadlines and admissions selection stages.
- Separate program, admissions, faculty, career or legal pages.
- Institutional approval of final privacy and terms documents.
- A production URL or deployment.

### Important content-review note

The homepage uses names and claims provided in the design brief. Stock portraits are not photographs of the named individuals. The mentor portrait overlays and alt text explicitly state this. Photography is not a representation of the actual campus. Recruiter logos are text-based placeholder treatments, not official supplied artwork.

The supplied **49 LPA** and **18 LPA** figures both read “Highest Package.” Neither reporting period nor program/cohort context was supplied. The placement section and expanded dialog disclose this ambiguity rather than inventing an international/domestic distinction. All awards, statistics and affiliations must be checked before the page is represented as an official institutional website.

## Verification performed

- Actual homepage rendered at **1280 × 800 desktop** and **390 × 844 mobile** using browser screenshots.
- Extended captures reviewed the first 4,000 CSS pixels at desktop and mobile widths (the screenshot tool’s capture-height limit).
- No hero overlap, broken above-fold imagery, clipped mobile cards or visible horizontal overflow were reported by the visual checks.
- Homepage browser console capture returned no console errors.
- `/tests/interactions.html`: **35 checks passed**, including all program dialogs, interest persistence and restore, testimonial navigation and wrapping, menu state and closing, information dialogs, video-preview labeling, student-life scrolling, anchor targets, rendered content counts and loaded-image checks.
- The test runner temporarily changes and then restores its browser-local program preference.
- This is not a claim of a full manual screen-reader audit or exhaustive cross-browser certification.

## Recommended next steps

1. Obtain institutional review and approval of all copy, metrics, program claims, faculty identities, recognition and recruiter affiliations.
2. Replace the interpreted brand mark, stock imagery, illustrative portraits and text wordmarks with licensed official assets.
3. Provide real films, an official brochure, complete alumni profiles and verified contact/social destinations.
4. Connect Apply CTAs to the institution’s secure official application service, or plan an appropriate production data flow. Do not collect sensitive applicant data in public frontend storage.
5. Create detailed program/admissions pages, including full eligibility, duration, fees and scholarship policies.
6. Approve production legal notices and verify accessibility, keyboard behavior and performance across target devices.
7. Remove or exclude developer test pages from the final institutional release if desired.
8. Publish using the project’s Publish tab, or request Hosted Deploy explicitly.

## Public URLs and API endpoints

- Production URL: **not deployed / not assigned**.
- Preview: available through the project’s website preview.
- API endpoints: **none**.
- No deployment or changes to a live domain have been performed.
