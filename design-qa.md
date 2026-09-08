# Design QA — BR Radiadores

- Source visual truth: `design-options/opcao-1.png`
- Implementation screenshots: `qa-desktop-viewport.png`, `qa-mobile-viewport.png`
- Combined comparison evidence: `qa-comparison.png`
- Desktop viewport: 1440 × 900 CSS px, device scale factor 1
- Mobile capture: 390 × 844 px, device scale factor 1
- State: initial page / hero, dark theme
- Source dimensions: 864 × 1819 px (long-page concept)
- Desktop implementation screenshot: 1440 × 900 px
- Mobile implementation screenshot: 390 × 844 px

## Findings

No actionable P0, P1 or P2 issues remain in the implemented scope.

- Fonts and typography: Manrope, weights, uppercase hero hierarchy, wrapping and contrast reproduce the selected direction. Mobile typography uses a reduced fluid scale to prevent real 320–430 px viewport overflow.
- Spacing and layout rhythm: desktop hero, four-column services, asymmetric institutional section, CTA band, contact grid, map and footer follow the concept. Breakpoints collapse to two columns and one column with preserved touch spacing.
- Colors and visual tokens: graphite background, emerald accent, fine borders, restrained glass and localized shadow match the selected direction.
- Image quality and asset fidelity: the real logo, facade and product assets are local. The close-up radiator image was generated specifically for the institutional slot and uses the same dark automotive art direction. No placeholders or hotlinked source assets remain.
- Copy and content: commercial facts match the source site. No unsupported hours, separate telephone, ratings, years, certifications or statistics were added.
- Accessibility: one H1, semantic landmarks, keyboard focus, skip link, descriptive alternatives, reduced-motion handling and comfortably sized controls are present.

## Comparison history

1. Initial mobile evidence showed the display heading too large for the narrow capture and an invalid mobile container width expression.
2. Fixed the container with `calc(100% - 28px)` and reduced the mobile fluid heading scale.
3. Post-fix evidence is saved as `qa-mobile-viewport.png`; CSS guards also cover 320 px and reduced motion.

## Interaction checks

- Header state changes on scroll.
- Mobile menu exposes correct ARIA expanded state, closes on navigation and Escape.
- Internal navigation targets valid section IDs.
- WhatsApp CTAs use the real number `5515996591481`.
- Address cards and button open the real Google Maps query.
- Embedded map targets Avenida Mario Covas, 1479, Itapeva-SP.
- Instagram uses the real published profile.
- Browser rendering completed without page-level JavaScript errors; Edge emitted only internal headless task-manager diagnostics.

## Focused comparison

The hero was reviewed at full readable scale in both source and implementation. Service/product details were checked from the local source assets and generated images; no additional crop comparison was needed because those assets are presented without masks or destructive crops.

## Follow-up polish

- P3: a future optimization pass may convert large PNG photographs to WebP/AVIF while retaining the original files as fallbacks.

final result: passed

## Incremental review — seção Nossa história

- Added a responsive editorial section between the institutional block and the conversion CTA.
- The real storefront image is explicitly identified as temporary; no fictional family image or business history was created.
- The future image replacement point is documented inline in `index.html`.
- Desktop uses an asymmetric two-column composition; tablet and mobile collapse to one column.
- A timed visibility fallback prevents scroll-reveal content from remaining hidden after anchor navigation or delayed observer execution.
- No new P0, P1 or P2 finding was introduced.
