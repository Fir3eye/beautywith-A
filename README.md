# Beautician Website (Static)
A lightweight, single-page site to list your beauty services and redirect users to WhatsApp with a pre-filled message.

## Quick Start
1. **Download** the archive below.
2. **Extract** it.
3. Open `index.html` in any browser. (No build steps needed.)

## Customize
- Open `config.js` and change:
  - `PHONE_NUMBER` to your WhatsApp number (no `+`, no spaces).
  - `CALL_NUMBER` for the "Call Now" button (with `+` optional).
  - Update the `SERVICES` list.
- The logo is at `assets/logo.svg`. Replace it if you like.

## Deploy
- Any static hosting works: NGINX/Apache, GitHub Pages, Netlify, Vercel, S3, etc.
- NGINX example:
  ```nginx
  server {
    listen 80;
    server_name _;
    root /var/www/beautician-site;
    index index.html;
    location / {
      try_files $uri $uri/ =404;
    }
  }
  ```

Generated on 2025-08-19.
# beautywith-A
