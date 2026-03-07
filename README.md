# dental_meerut

Responsive multi-page dental clinic website for GitHub Pages.

## Pages

- HOME: `index.html`
- ABOUT: `about.html`
- SERVICES: `services.html`
- CONTACT: `contact.html`
- BLOG: `blog.html`
- Service category pages: `general-dentistry.html`, `restorative-dentistry.html`, `cosmetic-dentistry.html`, `prosthodontics.html`, `orthodontics.html`, `periodontics.html`, `endodontics.html`, `oral-surgery.html`
- Dynamic service detail page: `service-detail.html?service=<service-name>`

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages** in that repository.
3. Under **Build and deployment**, choose:
	- **Source**: `Deploy from a branch`
	- **Branch**: `main` (or your default branch)
	- **Folder**: `/ (root)`
4. Save and wait 1-3 minutes.
5. Open your site URL shown in Pages settings.

## SEO setup after publishing

- Current GitHub Pages base URL configured in this repo: `https://srddc.github.io/dental_meerut/`
- If you later use a custom domain, replace this URL in both `sitemap.xml` and `robots.txt`.

## Custom domain setup (`www.srddc.com`)

1. DNS configuration (at your domain provider):
	- Type: `CNAME`
	- Host/Name: `www`
	- Target/Value: `srddc.github.io`
2. GitHub repository settings:
	- Open **Settings → Pages**
	- Set **Custom domain** to `www.srddc.com`
	- Ensure **Enforce HTTPS** is enabled (after certificate is issued)
3. Keep the `CNAME` file in this repo with:
	- `www.srddc.com`

### Optional root domain redirect

If you also want `srddc.com` (without `www`) to work, add URL forwarding at your DNS provider from `srddc.com` to `https://www.srddc.com`.
