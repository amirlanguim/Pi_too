# Pi_too_singular_exact

This version keeps the original HTML/CSS visuals and reorganizes the project into one clean structure.

## Structure

- `index.html` — original home page
- `pages/` — one final copy of each real page
- `assets/css/` — centralized CSS files

## Notes

- Original duplicate folder sets were flattened into one final project structure.
- Visual styles were preserved by reusing the original page CSS instead of redesigning.
- JavaScript was removed from the home page because this pass is HTML/CSS only.


Added parent area pages:
- pages/parent-dashboard.html
- pages/parent-notifications.html
- pages/parent-schedule.html
- pages/parent-payments.html
- pages/parent-profile.html
- assets/css/parent-dashboard.css


## Dynamic CSS update
- Added `assets/css/tokens.css` as the single theme file.
- Shared colors, fonts, borders, radii, and common shadows now use CSS variables.
- Existing page visuals were kept while making global theme updates easier.
