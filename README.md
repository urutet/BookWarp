# BookWarp website

The static site lives in `docs/` and needs no build step. Its public pages are:

- Marketing: `https://urutet.github.io/BookWarp-Website/`
- App Store Privacy Policy URL: `https://urutet.github.io/BookWarp-Website/privacy.html`
- App Store Support URL: `https://urutet.github.io/BookWarp-Website/support.html`
- Terms: `https://urutet.github.io/BookWarp-Website/terms.html`

## Publish

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Merge website changes into the default branch (`master` in this checkout). The `Deploy website to GitHub Pages` workflow uploads `docs/` and deploys it. You can also run it manually with **Run workflow**.
3. Check the live URLs above before entering them in App Store Connect. If you use a custom domain, replace the URLs in App Store Connect and in the app's Privacy and Terms screens.

## Before App Store submission

- Replace the visible `support@your-domain.example` placeholder in `docs/support.html` with a monitored email address. Apple requires the Support URL to lead to real contact information. The GitHub issue link is optional and should only be kept if users can access the repository.
- Review the public Privacy and Terms pages against the final app build and update the matching in-app screens if any data practices change.
- Add the released App Store product URL to the marketing page when it exists. The current page accurately says the app is coming soon.

For local review, run `python3 -m http.server 8000 -d docs` from the repository root and open `http://localhost:8000/`.
