# hzhan.github.io
Hong's personal website
## Quick edit guide for portfolio projects
If want to edit the four portfolio projects, open:

- `scripts/main.js`

Then only change the `PORTFOLIO_CASES` list at the top.
For each project you can edit:

- `title`
- `image`
- `summary`
- `details` (bullet points)
- `link` text and URL

You do not need to edit HTML for normal content updates.

### Resize portfolio images
If project images look too large or too tall, edit this CSS rule in `styles/main.css`:

- `.portfolio-case-image { height: clamp(140px, 22vw, 190px); }`

You can reduce the last value (for example `170px`) to make images smaller.

## Security hardening added
- Added a Content Security Policy (CSP) meta tag to reduce script/style/frame injection risks.
- Added `rel="noopener noreferrer"` to external links that open in new tabs.
- Added safer dynamic link handling in `scripts/main.js` (`sanitizeUrl`) to block unsafe URL schemes.
- Added basic input length limits on contact form fields.

## How to push to your GitHub
From your local machine (with your GitHub credentials configured):

```bash
git push origin work
```

If the branch has a different name, run:

```bash
git branch --show-current
git push origin <your-branch-name>
```
