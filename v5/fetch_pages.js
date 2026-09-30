const fs = require('fs');
const https = require('https');
const path = require('path');

const API_URL = 'https://lexiconmile.com/wp-json/wp/v2/pages?per_page=100';
const OUTPUT_DIR = 'f:/antigravity_projects/Lexicon-dark-website-new/v4';

https.get(API_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const pages = JSON.parse(data);
        
        pages.forEach(page => {
            const slug = page.slug;
            const title = page.title.rendered;
            let content = page.content.rendered;
            
            // Replace images with placeholders
            content = content.replace(/<img[^>]*>/g, '<div style="width:100%; min-height:300px; background:rgba(255,255,255,0.05); display:flex; align-items:center; justify-content:center; border: 1px dashed rgba(255,255,255,0.2); border-radius: 12px; margin: 2rem 0; color: rgba(255,255,255,0.5);">Image Placeholder</div>');
            
            // Remove hardcoded colors/styles to match dark theme
            content = content.replace(/color:\s*#[a-zA-Z0-9]+;?/gi, '');
            content = content.replace(/background-color:\s*#[a-zA-Z0-9]+;?/gi, '');
            content = content.replace(/background:\s*#[a-zA-Z0-9]+;?/gi, '');
            content = content.replace(/style="[^"]*"/g, (match) => {
                // Keep the style attribute but remove colors
                let cleanStyle = match.replace(/color:\s*#[a-zA-Z0-9]+;?/gi, '');
                cleanStyle = cleanStyle.replace(/background-color:\s*#[a-zA-Z0-9]+;?/gi, '');
                cleanStyle = cleanStyle.replace(/background:\s*#[a-zA-Z0-9]+;?/gi, '');
                return cleanStyle;
            });
            
            const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#05070C">
  <title>${title} | Lexicon MILE</title>
  <link rel="icon" href="images/favicon.png" type="image/png">
  <link rel="preload" href="assets/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="styles/main.css">
  <style>
    /* Scope styles for WP content to adapt to dark theme */
    .wp-content {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      font-size: 1.1rem;
    }
    .wp-content h1, .wp-content h2, .wp-content h3, .wp-content h4, .wp-content h5, .wp-content h6 {
      color: #fff;
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .wp-content a {
      color: #8cb4f5;
      text-decoration: underline;
    }
    .wp-content p {
      margin-bottom: 1.5rem;
    }
    .wp-content ul, .wp-content ol {
      margin-bottom: 1.5rem;
      padding-left: 2rem;
    }
    .wp-content li {
      margin-bottom: 0.5rem;
    }
    .wp-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 2rem;
    }
    .wp-content th, .wp-content td {
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1rem;
    }
    .wp-content th {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }
  </style>
</head>
<body>
  <div id="header"></div>
  <main id="main">
    <section class="section" style="padding-top: 150px; min-height: 80vh;">
      <div class="container">
         <div class="section-heading reveal">
           <div>
             <p class="eyebrow">LEXICON MILE</p>
             <h2>${title}<span class="period">.</span></h2>
           </div>
         </div>
         <div class="wp-content">
            ${content}
         </div>
      </div>
    </section>
  </main>
  <div id="footer"></div>
  <script src="js/components.js"></script>
</body>
</html>`;
            
            // Skip home pages or existing specific pages if needed, but the prompt says "create all pages one by one"
            // Let's avoid overwriting index.html, about.html, ai-lab.html if they exist as slugs, but actually they have different slugs usually.
            // WP slugs are like 'about-us'. If slug is 'index', well, it shouldn't be.
            const filename = path.join(OUTPUT_DIR, `${slug}.html`);
            if (slug !== 'index') {
                fs.writeFileSync(filename, html);
                console.log('Created: ' + filename);
            }
        });
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});

