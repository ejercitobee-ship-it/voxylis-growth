# Voxylis Growth

Marketing website for **Voxylis Growth**, a dedicated voice team of elite Philippine talent, built for speed to lead.

Static site, no build step. Three pages that share one design (Fraunces + Inter, royal blue on white).

## Structure

```
index.html      Home page
about.html      About us
blog.html       Blog
img/            Hero and section images (webp)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080

## Deploy

The site is plain static files, so it works on any static host (GitHub Pages, Cloudflare Pages, Netlify).

The contact form on the home page and the subscribe form on the blog post to Web3Forms and email the owner. These run client side and only deliver once the site is served from a real web address, not from a local file preview.
