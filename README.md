# ISTC Computer Centre — Website

Plain HTML/CSS/JS. Koi build step nahi. Bas `deploy/` folder kisi bhi hosting par upload kar do.

## Files
- `index.html` — main page
- `styles.css` — saari styling
- `script.js` — courses data + modal + interactivity
- `assets/` — logo, hero photo, social-share image
- favicons, `site.webmanifest`, `robots.txt`, `sitemap.xml`

---

## STEP 1 — Domain (✅ ho gaya)

Domain set hai: **https://istchisar.in**
Saari files (index.html, robots.txt, sitemap.xml) mein ye already laga hua hai.
Kuch karne ki zaroorat nahi.

---

## STEP 2 — Deploy karo

Koi bhi option:
- **Netlify / Vercel** — `deploy/` folder drag-and-drop, turant live.
- **GitHub Pages** — repo banao, `deploy/` ka content daalo, Pages enable karo.
- **Hostinger / cPanel hosting** — `public_html` mein saari files upload karo.

---

## STEP 3 — Google par dikhne ke liye (Search Console)

1. https://search.google.com/search-console kholo, apna domain add karo.
2. Verify karo (DNS ya HTML file method).
3. "Sitemaps" mein `sitemap.xml` submit karo.
4. "URL Inspection" mein apna homepage daal ke "Request Indexing" dabao.

2–7 din mein Google par "ISTC Computer Centre Mangali" search karne par site aane lagegi.

BONUS (sabse important for local business):
- **Google Business Profile** banao: https://business.google.com
  (Mangali Bus Stand address, photos, phone 98175-50850, timings)
  Isse Google Maps + local search mein sabse upar aaoge.

---

## STEP 4 — Google Analytics (optional, traffic dekhne ke liye)

1. https://analytics.google.com par account banao, ek "Measurement ID" milega
   (format: `G-XXXXXXXXXX`).
2. Mujhe wo ID bhejo, ya khud `index.html` ke `<head>` mein,
   "Google Analytics yahan aayega" wali line ke neeche, ye paste karo
   (G-XXXXXXXXXX ko apni ID se badlo):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Google Tag Manager bhi use kar sakte ho — uska container snippet bhi isi jagah aayega.
