const fs = require('fs');
const path = require('path');

const bscHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#05070C">
  <title>B.Sc in Hospitality Studies | Lexicon HMCT &amp; MILE Pune | YCMOU Affiliated</title>
  <meta name="description" content="B.Sc in Hospitality Studies at Lexicon HMCT & MILE Pune. UGC-recognized, NAAC 'A' Grade University (YCMOU Affiliated · Study Center No. 62582). 3-year NEP degree with dual 5-star internships, 15 Lexicon advantages, approved fee schedule & 100% placement support.">
  <link rel="canonical" href="https://lexiconmile.com/b-sc-hospitality-studies.html">
  <link rel="icon" href="images/favicon.png" type="image/png">
  <link rel="preload" href="assets/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="styles/main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <!-- Open Graph -->
  <meta property="og:title" content="B.Sc in Hospitality Studies | Lexicon HMCT Pune">
  <meta property="og:description" content="UGC recognized, NAAC 'A' Grade University degree with dual internships, 6-semester NEP syllabus, approved fees and world-class hospitality training at Lexicon HMCT.">
  <meta property="og:url" content="https://lexiconmile.com/b-sc-hospitality-studies.html">
  <meta property="og:image" content="images/hospitality/conrad-workshop.jpg">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Lexicon MILE & HMCT">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="B.Sc in Hospitality Studies | Lexicon HMCT Pune">
  <meta name="twitter:description" content="UGC-recognized 3-year B.Sc degree in Hospitality Studies with dual 5-star hotel internships.">
  <meta name="twitter:image" content="images/hospitality/conrad-workshop.jpg">

  <!-- Schema.org JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://lexiconmile.com/b-sc-hospitality-studies.html#course",
        "name": "B.Sc in Hospitality Studies",
        "description": "3-Year undergraduate degree program in Hospitality Studies affiliated with YCMOU (Study Center No. 62582 · UGPo2), recognized by UGC and AIU, featuring dual 5-star internships and comprehensive NEP curriculum.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Lexicon Institute of Hotel Management (Lexicon HMCT)",
          "url": "https://lexiconmile.com",
          "logo": "https://lexiconmile.com/assets/lexicon_mile_logo.svg"
        },
        "educationalCredentialAwarded": "Bachelor of Science in Hospitality Studies (B.Sc Hospitality)",
        "timeToComplete": "P3Y",
        "occupationalCategory": "Hospitality Management, Culinary Arts, Food and Beverage Service, Hotel Administration",
        "coursePrerequisites": "10+2 Higher Secondary Certificate in any stream (Science, Commerce, or Arts) with English as a compulsory subject."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lexiconmile.com/b-sc-hospitality-studies.html#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lexiconmile.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Programs",
            "item": "https://lexiconmile.com/programs.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "B.Sc in Hospitality Studies",
            "item": "https://lexiconmile.com/b-sc-hospitality-studies.html"
          }
        ]
      }
    ]
  }
  </script>

  <style>
    /* ==========================================================================
       B.SC HOSPITALITY STUDIES - LUXURY DARK DESIGN SYSTEM (PGDM BLUEPRINT)
       ========================================================================== */
    :root {
      --hmct-accent: #38bdf8;
      --hmct-blue: #0b63ce;
      --hmct-glow: rgba(56, 189, 248, 0.18);
      --hmct-card-bg: rgba(13, 20, 36, 0.85);
      --hmct-card-border: rgba(255, 255, 255, 0.1);
      --hmct-text-muted: #94a3b8;
      --hmct-text-light: #e2e8f0;
      --hmct-gold: #ffd066;
    }

    body {
      background-color: #05070c;
      color: #f1f5f9;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      overflow-x: hidden;
    }

    /* Hero Section - Helix Architecture */
    .pgdm-hero-banner {
      position: relative;
      background-color: #05070c;
      overflow: hidden;
      padding-top: 140px !important;
      padding-bottom: 50px !important;
      min-height: 94vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .pgdm-hero-banner::before {
      display: none !important;
    }

    .helix-bg-layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }

    .helix-bg-img {
      position: absolute;
      top: 0;
      right: 0;
      width: 65%;
      height: 100%;
      background-image: url('images/hospitality/conrad-workshop.jpg');
      background-size: cover;
      background-position: center right;
      background-repeat: no-repeat;
      opacity: 0.35;
      filter: brightness(0.85) contrast(1.2) hue-rotate(190deg) saturate(1.2);
      mix-blend-mode: screen;
    }

    .helix-bg-overlay {
      position: absolute;
      inset: 0;
      background: 
        linear-gradient(90deg, #05070c 0%, #05070c 38%, rgba(5, 7, 12, 0.85) 55%, rgba(5, 7, 12, 0.25) 75%, rgba(5, 7, 12, 0.5) 100%),
        linear-gradient(180deg, #05070c 0%, transparent 18%, transparent 80%, #05070c 100%),
        radial-gradient(ellipse at 80% 45%, rgba(11, 99, 206, 0.35) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 70%);
    }

    .pgdm-hero-container {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
    }

    .helix-content-wrap {
      max-width: 960px;
      margin-bottom: 48px;
    }

    .helix-badge-wrap {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .helix-badge-pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0b63ce 0%, #0284c7 100%);
      color: #ffffff;
      font-size: 11.5px;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 999px;
      letter-spacing: 0.02em;
      line-height: 1.35;
      box-shadow: 0 2px 10px rgba(11, 99, 206, 0.4);
    }

    .helix-badge-text {
      color: #94a3b8;
      font-size: 13.5px;
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .helix-title {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: clamp(38px, 4.6vw, 68px);
      font-weight: 600;
      line-height: 1.08;
      color: #ffffff;
      margin: 0 0 22px 0;
      max-width: 960px;
      letter-spacing: -0.035em;
    }

    .helix-title em {
      font-family: 'Instrument Serif', Georgia, serif;
      font-style: italic;
      color: #38bdf8;
      font-weight: 400;
      padding: 0 4px;
      letter-spacing: -0.01em;
      text-shadow: 0 0 28px rgba(56, 189, 248, 0.45);
    }

    .helix-desc {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 16.5px;
      line-height: 1.65;
      color: #cbd5e1;
      max-width: 840px;
      margin-bottom: 32px;
      font-weight: 400;
      letter-spacing: -0.01em;
    }

    .helix-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 28px;
      align-items: center;
    }

    .helix-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #0b63ce;
      color: #ffffff;
      padding: 13px 26px;
      border-radius: 8px;
      font-size: 14.5px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 18px rgba(11, 99, 206, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .helix-btn-primary:hover {
      background: #0952ab;
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(11, 99, 206, 0.6);
      color: #ffffff;
    }

    .helix-btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(13, 20, 36, 0.7);
      color: #f1f5f9;
      padding: 13px 24px;
      border-radius: 8px;
      font-size: 14.5px;
      font-weight: 500;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .helix-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      color: #ffffff;
    }

    .helix-meta-strip {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 24px;
      font-size: 13.5px;
      color: #94a3b8;
    }

    .helix-meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .helix-meta-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 8px #38bdf8;
    }

    /* Glass Dock Stats Strip */
    .glass-dock-strip {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      overflow: hidden;
      backdrop-filter: blur(16px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
      width: 100%;
    }

    .glass-dock-col {
      background: rgba(13, 20, 36, 0.78);
      padding: 24px 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .glass-dock-col:hover {
      background: rgba(20, 30, 52, 0.95);
    }

    .glass-dock-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
    }

    .glass-dock-indicator .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 8px #38bdf8;
    }

    .glass-dock-label {
      font-size: 10.5px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #94a3b8;
      font-weight: 600;
    }

    .glass-dock-val {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.15;
      margin-bottom: 4px;
      letter-spacing: -0.02em;
    }

    .glass-dock-val.accent {
      color: #38bdf8;
    }

    .glass-dock-val.gold {
      color: #ffd066;
    }

    .glass-dock-sub {
      font-size: 11.5px;
      color: #64748b;
      line-height: 1.35;
    }

    /* ==========================================================================
       SECTION 2: 4-PILLAR OBJECTIVES GRID
       ========================================================================== */
    .pgdm-objectives-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-top: 40px;
    }

    .pgdm-obj-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 16px;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      backdrop-filter: blur(12px);
    }

    .pgdm-obj-card:hover {
      transform: translateY(-5px);
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 24px rgba(56, 189, 248, 0.12);
    }

    .pgdm-obj-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .pgdm-obj-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #38bdf8;
    }

    .pgdm-obj-num {
      font-family: monospace;
      font-size: 13px;
      color: #64748b;
      font-weight: 700;
    }

    .pgdm-obj-card h3 {
      font-size: 19px;
      font-weight: 700;
      color: #fff;
      margin: 0 0 12px 0;
      line-height: 1.3;
    }

    .pgdm-obj-card p {
      font-size: 14px;
      line-height: 1.65;
      color: #94a3b8;
      margin: 0 0 20px 0;
      flex-grow: 1;
    }

    .pgdm-obj-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: auto;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .pgdm-obj-tag {
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.05);
      color: #cbd5e1;
      font-weight: 500;
    }

    /* ==========================================================================
       SECTION 3: KEY FOCUS AREAS (5 CARDS)
       ========================================================================== */
    .pgdm-focus-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
      margin-top: 40px;
    }

    .pgdm-focus-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }

    .pgdm-focus-card:hover {
      transform: translateY(-4px);
      border-color: rgba(56, 189, 248, 0.35);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .pgdm-focus-img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }

    .pgdm-focus-card:hover .pgdm-focus-img {
      transform: scale(1.05);
    }

    .pgdm-focus-body {
      padding: 18px 16px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .pgdm-focus-tag {
      font-size: 10.5px;
      font-weight: 700;
      color: #38bdf8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }

    .pgdm-focus-body h4 {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin: 0 0 8px 0;
      line-height: 1.3;
    }

    .pgdm-focus-body p {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.55;
      margin: 0;
    }

    /* ==========================================================================
       SECTION 4: 15 LEXICON ADVANTAGES (GRID)
       ========================================================================== */
    .advantages-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 40px;
    }

    .adv-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 14px;
      padding: 22px;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      transition: all 0.25s ease;
    }

    .adv-card:hover {
      border-color: rgba(56, 189, 248, 0.35);
      transform: translateY(-3px);
    }

    .adv-num {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(56, 189, 248, 0.12);
      color: #38bdf8;
      font-family: monospace;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .adv-card h4 {
      font-size: 15.5px;
      font-weight: 700;
      color: #fff;
      margin: 0 0 4px 0;
    }

    .adv-card p {
      font-size: 13px;
      color: #94a3b8;
      margin: 0;
      line-height: 1.5;
    }

    /* ==========================================================================
       SECTION 5: PRACTICAL LABS SPOTLIGHT
       ========================================================================== */
    .pgdm-lab-spotlight {
      background: linear-gradient(135deg, rgba(13, 20, 36, 0.95) 0%, rgba(6, 11, 20, 0.98) 100%);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: 24px;
      padding: 48px;
      margin-top: 40px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    }

    .pgdm-lab-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 40px;
      align-items: center;
    }

    .pgdm-lab-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 6px 14px;
      border-radius: 20px;
      color: #38bdf8;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .pgdm-lab-title {
      font-size: 32px;
      font-weight: 800;
      color: #fff;
      margin: 0 0 16px 0;
      line-height: 1.2;
    }

    .pgdm-lab-desc {
      font-size: 15px;
      line-height: 1.7;
      color: #cbd5e1;
      margin-bottom: 24px;
    }

    .pgdm-lab-quote {
      background: rgba(255, 255, 255, 0.04);
      border-left: 3px solid #38bdf8;
      padding: 16px 20px;
      border-radius: 0 10px 10px 0;
      margin-bottom: 28px;
    }

    .pgdm-lab-quote p {
      font-size: 14px;
      font-style: italic;
      color: #94a3b8;
      margin: 0;
      line-height: 1.6;
    }

    .pgdm-lab-modules {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .pgdm-lab-mod-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13.5px;
      color: #e2e8f0;
    }

    .pgdm-lab-mod-item svg {
      color: #38bdf8;
      flex-shrink: 0;
    }

    .pgdm-terminal-card {
      background: #080d1a;
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
    }

    .terminal-header {
      background: rgba(255, 255, 255, 0.06);
      padding: 10px 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .terminal-dots {
      display: flex;
      gap: 6px;
    }

    .terminal-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .terminal-dots span:nth-child(1) { background: #ef4444; }
    .terminal-dots span:nth-child(2) { background: #f59e0b; }
    .terminal-dots span:nth-child(3) { background: #10b981; }

    .terminal-title {
      font-size: 11.5px;
      font-family: monospace;
      color: #94a3b8;
      margin-left: 8px;
    }

    .terminal-body {
      padding: 20px;
      font-family: monospace;
      font-size: 12.5px;
      line-height: 1.7;
      color: #cbd5e1;
    }

    .terminal-body .cmd { color: #38bdf8; font-weight: bold; }
    .terminal-body .output { color: #94a3b8; }
    .terminal-body .success { color: #34d399; }

    /* ==========================================================================
       SECTION 6: CURRICULUM ARCHITECTURE (TABBED)
       ========================================================================== */
    .curriculum-tabs-nav {
      display: flex;
      gap: 12px;
      margin-top: 36px;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 12px;
      flex-wrap: wrap;
    }

    .curriculum-tab-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 14.5px;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .curriculum-tab-btn:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.05);
    }

    .curriculum-tab-btn.active {
      color: #fff;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.35);
      box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);
    }

    .curriculum-tab-content {
      display: none;
    }

    .curriculum-tab-content.active {
      display: block;
      animation: fadeIn 0.4s ease;
    }

    .curriculum-semester-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .semester-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 16px;
      padding: 28px;
    }

    .semester-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .semester-header h4 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }

    .semester-badge {
      font-size: 11px;
      font-weight: 700;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .subject-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .subject-item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      font-size: 13.5px;
      color: #cbd5e1;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }

    .subject-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .subject-tag {
      font-size: 10.5px;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.06);
      color: #94a3b8;
      white-space: nowrap;
    }

    /* ==========================================================================
       SECTION 7: CERTIFICATIONS MARQUEE
       ========================================================================== */
    .cert-marquee-wrap {
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      padding: 24px 0;
      margin-top: 30px;
    }

    .cert-marquee-wrap::before,
    .cert-marquee-wrap::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      z-index: 2;
      pointer-events: none;
    }

    .cert-marquee-wrap::before {
      left: 0;
      background: linear-gradient(90deg, #05070c 0%, transparent 100%);
    }

    .cert-marquee-wrap::after {
      right: 0;
      background: linear-gradient(270deg, #05070c 0%, transparent 100%);
    }

    .cert-marquee-track {
      display: inline-flex;
      gap: 20px;
      animation: certMarquee 28s linear infinite;
    }

    .cert-pill {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(13, 20, 36, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      padding: 8px 20px;
      font-size: 13.5px;
      font-weight: 600;
      color: #fff;
      backdrop-filter: blur(8px);
    }

    @keyframes certMarquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ==========================================================================
       SECTION 8: FEE STRUCTURE & OFFICIAL BANK DETAILS
       ========================================================================== */
    .fee-kpi-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 36px;
      margin-bottom: 24px;
    }

    .fee-kpi-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 16px;
      padding: 24px;
    }

    .fee-kpi-card h4 {
      font-size: 14px;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 8px 0;
    }

    .fee-kpi-amount {
      font-size: 28px;
      font-weight: 800;
      color: #38bdf8;
      margin-bottom: 6px;
    }

    .fee-kpi-amount.gold {
      color: #ffd066;
    }

    .fee-kpi-card p {
      font-size: 12.5px;
      color: #64748b;
      margin: 0;
    }

    .fee-table-wrap {
      overflow-x: auto;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px;
      background: var(--hmct-card-bg);
      margin-bottom: 24px;
    }

    .fee-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 13.5px;
    }

    .fee-table th {
      background: rgba(255, 255, 255, 0.06);
      padding: 14px 18px;
      color: #fff;
      font-weight: 700;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .fee-table td {
      padding: 14px 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: #cbd5e1;
    }

    .fee-table tr.total-row td {
      background: rgba(56, 189, 248, 0.08);
      color: #fff;
      font-weight: 700;
      border-top: 1px solid rgba(56, 189, 248, 0.3);
    }

    .bank-details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 24px;
    }

    .bank-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 14px;
      padding: 22px;
    }

    .bank-card__header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .bank-card__badge {
      font-size: 11px;
      font-weight: 700;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .bank-card h4 {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }

    .bank-details-list {
      list-style: none;
      padding: 0;
      margin: 0 0 16px 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 13px;
    }

    .bank-details-list li {
      display: flex;
      justify-content: space-between;
      color: #94a3b8;
    }

    .bank-details-list li strong {
      color: #fff;
    }

    .copy-account-btn {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #cbd5e1;
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .copy-account-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }

    /* Eligibility 3 Grid */
    .pgdm-eligibility-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 36px;
    }

    .pgdm-elig-card {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 16px;
      padding: 28px;
      position: relative;
    }

    .pgdm-elig-num {
      font-family: monospace;
      font-size: 13px;
      font-weight: 700;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 4px 10px;
      border-radius: 6px;
      display: inline-block;
      margin-bottom: 16px;
    }

    .pgdm-elig-card h3 {
      font-size: 19px;
      font-weight: 700;
      color: #fff;
      margin: 0 0 10px 0;
    }

    .pgdm-elig-card p {
      font-size: 13.5px;
      line-height: 1.6;
      color: #94a3b8;
      margin: 0;
    }

    /* Recruiters Strip */
    .recruiters-strip {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
      margin-top: 36px;
    }

    .recruiter-box {
      background: rgba(13, 20, 36, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      transition: all 0.25s ease;
    }

    .recruiter-box:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(56, 189, 248, 0.35);
      transform: scale(1.04);
    }

    .recruiter-box img {
      max-height: 38px;
      max-width: 90%;
      object-fit: contain;
      filter: grayscale(1) brightness(1.8);
      opacity: 0.75;
      transition: all 0.25s ease;
    }

    .recruiter-box:hover img {
      filter: none;
      opacity: 1;
    }

    /* Accordion FAQs */
    .faq-container {
      max-width: 900px;
      margin: 36px auto 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .pgdm-accordion-item {
      background: var(--hmct-card-bg);
      border: 1px solid var(--hmct-card-border);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.25s ease;
    }

    .pgdm-accordion-item.active {
      border-color: rgba(56, 189, 248, 0.4);
    }

    .pgdm-accordion-header {
      width: 100%;
      background: transparent;
      border: none;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
    }

    .pgdm-accordion-header .chevron {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      color: #38bdf8;
      flex-shrink: 0;
    }

    .pgdm-accordion-item.active .chevron {
      transform: rotate(180deg);
    }

    .pgdm-accordion-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s ease, padding 0.35s ease;
      padding: 0 24px;
    }

    .pgdm-accordion-item.active .pgdm-accordion-body {
      max-height: 300px;
      padding: 0 24px 22px;
    }

    .pgdm-accordion-body p {
      margin: 0;
      font-size: 14.5px;
      line-height: 1.65;
      color: #94a3b8;
    }

    /* Bottom CTA Card */
    .cta-card {
      background: linear-gradient(135deg, rgba(13, 20, 36, 0.95) 0%, rgba(6, 11, 20, 0.98) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 24px;
      padding: 48px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
      margin-bottom: 70px;
    }

    .cta-inner {
      display: grid;
      grid-template-columns: 1.3fr 0.7fr;
      gap: 40px;
      align-items: center;
    }

    .cta-heading {
      font-size: clamp(28px, 3.2vw, 42px);
      font-weight: 700;
      color: #fff;
      line-height: 1.15;
      margin: 0 0 16px 0;
    }

    .cta-heading em {
      font-family: 'Instrument Serif', Georgia, serif;
      font-style: italic;
      color: #38bdf8;
    }

    .cta-desc {
      font-size: 15.5px;
      line-height: 1.65;
      color: #cbd5e1;
      margin-bottom: 28px;
      max-width: 580px;
    }

    .cta-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 24px;
    }

    .cta-contact-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 13.5px;
      color: #94a3b8;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .cta-image-wrapper {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      aspect-ratio: 4/3;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    }

    .cta-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cta-arrow {
      position: absolute;
      bottom: 14px;
      right: 14px;
      background: #0b63ce;
      color: #fff;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
    }

    .cta-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 36px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 11px;
      letter-spacing: 0.1em;
      color: #64748b;
      font-weight: 700;
    }

    /* Modal Styles */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.82);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-backdrop.open {
      display: flex;
      animation: fadeIn 0.25s ease;
    }

    .modal-card {
      background: #0d1424;
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 20px;
      padding: 36px;
      max-width: 480px;
      width: 100%;
      position: relative;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
    }

    .modal-close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 26px;
      cursor: pointer;
      line-height: 1;
    }

    .modal-form-group {
      margin-bottom: 16px;
    }

    .modal-form-group label {
      display: block;
      font-size: 12.5px;
      font-weight: 600;
      color: #cbd5e1;
      margin-bottom: 6px;
    }

    .modal-form-group input,
    .modal-form-group select {
      width: 100%;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 10px 14px;
      color: #fff;
      font-size: 14px;
      box-sizing: border-box;
    }

    .modal-form-group input:focus,
    .modal-form-group select:focus {
      outline: none;
      border-color: #38bdf8;
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.25);
    }

    /* Responsive */
    @media (max-width: 1200px) {
      .glass-dock-strip { grid-template-columns: repeat(3, 1fr); }
      .pgdm-objectives-grid { grid-template-columns: repeat(2, 1fr); }
      .pgdm-focus-grid { grid-template-columns: repeat(3, 1fr); }
      .advantages-grid { grid-template-columns: repeat(2, 1fr); }
      .recruiters-strip { grid-template-columns: repeat(4, 1fr); }
      .fee-kpi-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 900px) {
      .pgdm-lab-grid { grid-template-columns: 1fr; }
      .curriculum-semester-grid { grid-template-columns: 1fr; }
      .cta-inner { grid-template-columns: 1fr; }
      .pgdm-eligibility-grid { grid-template-columns: 1fr; }
      .bank-details-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 640px) {
      .glass-dock-strip { grid-template-columns: repeat(2, 1fr); }
      .pgdm-objectives-grid { grid-template-columns: 1fr; }
      .pgdm-focus-grid { grid-template-columns: 1fr; }
      .advantages-grid { grid-template-columns: 1fr; }
      .recruiters-strip { grid-template-columns: repeat(2, 1fr); }
      .cta-card { padding: 28px 20px; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <!-- Global Shared Navigation Header -->
  <div id="header"></div>

  <main id="main">
    <!-- ==========================================================================
         HERO SECTION: SIGNATURE HELIX HERO ARCHITECTURE
         ========================================================================== -->
    <section class="pgdm-hero-banner" id="hero">
      <div class="helix-bg-layer" aria-hidden="true">
        <div class="helix-bg-img"></div>
        <div class="helix-bg-overlay"></div>
      </div>

      <div class="pgdm-hero-container">
        
        <!-- Breadcrumbs -->
        <nav class="about-breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 24px;">
          <a href="index.html">Home</a>
          <span>/</span>
          <a href="programs.html">Programs</a>
          <span>/</span>
          <span style="color: #38bdf8; font-weight: 600;">B.Sc in Hospitality Studies &middot; YCMOU Affiliated</span>
        </nav>

        <div class="helix-content-wrap">
          <div class="helix-badge-wrap">
            <span class="helix-badge-pill">YCMOU AFFILIATED &middot; STUDY CENTER NO. 62582 &middot; BATCH 2027&ndash;29</span>
            <span class="helix-badge-text">UGC &amp; AIU Recognized &middot; NAAC &lsquo;A&rsquo; Grade University Degree</span>
          </div>

          <h1 class="helix-title">
            B.Sc in Hospitality Studies<br>
            <em>5-Star Luxury &amp; Leadership.</em>
          </h1>

          <p class="helix-desc">
            A comprehensive 3-year undergraduate degree program with <strong>dual 5-star hotel internships</strong>, commercial kitchen &amp; restaurant simulation labs, and <strong>15 Lexicon advantages</strong>. Delivered through an immersive &ldquo;learning by doing&rdquo; curriculum that turns passionate students into top-tier global hospitality managers.
          </p>

          <div class="helix-actions">
            <a href="https://admissions.lexiconmile.com/" target="_blank" rel="noopener noreferrer" class="helix-btn-primary">
              Apply for 2027&ndash;29 <span>&nearr;</span>
            </a>
            <button type="button" class="helix-btn-secondary" id="btn-open-brochure">
              Download Brochure <span>&darr;</span>
            </button>
            <a href="#fees" class="helix-btn-secondary">
              Fee Structure &rarr;
            </a>
          </div>

          <div class="helix-meta-strip">
            <div class="helix-meta-item">
              <span class="helix-meta-dot"></span>
              <span>YCMOU Affiliated (Center No. 62582)</span>
            </div>
            <div class="helix-meta-item">
              <span class="helix-meta-dot"></span>
              <span>Dual 5-Star Hotel Internships</span>
            </div>
            <div class="helix-meta-item">
              <span class="helix-meta-dot"></span>
              <span>15 Lexicon Advantages</span>
            </div>
            <div class="helix-meta-item">
              <span class="helix-meta-dot"></span>
              <span>100% Placement Assistance</span>
            </div>
          </div>
        </div>

        <!-- Executive Glass Dock Stats Strip -->
        <div class="glass-dock-strip reveal">
          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">Duration</span>
            </div>
            <div class="glass-dock-val accent">3 Years</div>
            <div class="glass-dock-sub">6 Semesters &middot; NEP Syllabus</div>
          </div>

          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">University</span>
            </div>
            <div class="glass-dock-val">YCMOU</div>
            <div class="glass-dock-sub">NAAC &lsquo;A&rsquo; &middot; UGC &amp; AIU Recognized</div>
          </div>

          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">Internships</span>
            </div>
            <div class="glass-dock-val accent">Dual Stints</div>
            <div class="glass-dock-sub">5-Star Luxury Hotels Embedded</div>
          </div>

          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">Advantages</span>
            </div>
            <div class="glass-dock-val">15 Pillars</div>
            <div class="glass-dock-sub">French, Opera PMS, FSSAI Certs</div>
          </div>

          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">Total 3-Yr Fee</span>
            </div>
            <div class="glass-dock-val gold">&#8377;6.50L</div>
            <div class="glass-dock-sub">Part-A: &#8377;5.20L + Part-B: &#8377;1.30L</div>
          </div>

          <div class="glass-dock-col">
            <div class="glass-dock-indicator">
              <span class="pulse-dot"></span>
              <span class="glass-dock-label">Placements</span>
            </div>
            <div class="glass-dock-val accent">100%</div>
            <div class="glass-dock-sub">Marriott, Hyatt, Taj, Oberoi</div>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================================================
         SECTION 2: 4-PILLAR PROGRAM OBJECTIVES
         ========================================================================== -->
    <section class="section" id="objectives">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">CORE COMPETENCIES</p>
            <h2>Program Objectives<span class="period">.</span></h2>
            <p class="section-lead">Rigorous culinary craft, beverage mastery, and luxury management engineered to build international hospitality leaders.</p>
          </div>
        </div>

        <div class="pgdm-objectives-grid">
          
          <div class="pgdm-obj-card reveal">
            <div class="pgdm-obj-head">
              <div class="pgdm-obj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <span class="pgdm-obj-num">01</span>
            </div>
            <h3>Culinary Arts &amp; Food Production</h3>
            <p>Master gourmet international cuisines, advanced baking and confectionery, classical culinary techniques, menu engineering, and HACCP hygiene standards.</p>
            <div class="pgdm-obj-tags">
              <span class="pgdm-obj-tag">Kitchen Ops</span>
              <span class="pgdm-obj-tag">Bakery</span>
              <span class="pgdm-obj-tag">Menu Design</span>
              <span class="pgdm-obj-tag">HACCP</span>
            </div>
          </div>

          <div class="pgdm-obj-card reveal">
            <div class="pgdm-obj-head">
              <div class="pgdm-obj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8l2 7H6l2-7z"/><path d="M12 9v13"/><path d="M8 22h8"/></svg>
              </div>
              <span class="pgdm-obj-num">02</span>
            </div>
            <h3>F&amp;B Service &amp; Mixology</h3>
            <p>Fine dining etiquette, sommelier wine pairing, mixology, barista coffee craft, banquet event coordination, and restaurant POS management.</p>
            <div class="pgdm-obj-tags">
              <span class="pgdm-obj-tag">Mixology</span>
              <span class="pgdm-obj-tag">Sommelier</span>
              <span class="pgdm-obj-tag">Barista</span>
              <span class="pgdm-obj-tag">Banqueting</span>
            </div>
          </div>

          <div class="pgdm-obj-card reveal">
            <div class="pgdm-obj-head">
              <div class="pgdm-obj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <span class="pgdm-obj-num">03</span>
            </div>
            <h3>Front Office &amp; Rooms Division</h3>
            <p>Hands-on proficiency in Oracle Hospitality Opera PMS, VIP guest relations, concierge architecture, night auditing, and modern revenue management.</p>
            <div class="pgdm-obj-tags">
              <span class="pgdm-obj-tag">Opera PMS</span>
              <span class="pgdm-obj-tag">Guest Relations</span>
              <span class="pgdm-obj-tag">Night Audit</span>
              <span class="pgdm-obj-tag">Revenue</span>
            </div>
          </div>

          <div class="pgdm-obj-card reveal">
            <div class="pgdm-obj-head">
              <div class="pgdm-obj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span class="pgdm-obj-num">04</span>
            </div>
            <h3>Hospitality Leadership &amp; French</h3>
            <p>Cross-cultural communication in professional French, hospitality sales, strategic hotel asset management, and executive team leadership.</p>
            <div class="pgdm-obj-tags">
              <span class="pgdm-obj-tag">Spoken French</span>
              <span class="pgdm-obj-tag">Leadership</span>
              <span class="pgdm-obj-tag">Hotel Law</span>
              <span class="pgdm-obj-tag">Marketing</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 3: KEY FOCUS AREAS (5 CARDS)
         ========================================================================== -->
    <section class="section section-dark" id="focus-areas">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">IMMERSIVE LEARNING</p>
            <h2>Key Focus Areas<span class="period">.</span></h2>
            <p class="section-lead">A balanced pedagogical framework emphasizing practical kitchen, bar, front-desk, and corporate hotel training.</p>
          </div>
        </div>

        <div class="pgdm-focus-grid">
          
          <div class="pgdm-focus-card reveal">
            <img src="images/hospitality/event5.jpg" alt="Culinary Arts & Food Production" class="pgdm-focus-img" loading="lazy">
            <div class="pgdm-focus-body">
              <span class="pgdm-focus-tag">CULINARY</span>
              <h4>Food Production Labs</h4>
              <p>Commercial quantity kitchen and bakery labs preparing international delicacies and pastry crafts.</p>
            </div>
          </div>

          <div class="pgdm-focus-card reveal">
            <img src="images/hospitality/event2.jpg" alt="F&B Service and Mock Bar" class="pgdm-focus-img" loading="lazy">
            <div class="pgdm-focus-body">
              <span class="pgdm-focus-tag">SERVICE</span>
              <h4>F&amp;B &amp; Mock Bar</h4>
              <p>Training restaurant and fully equipped mock bar covering cocktail crafting, barista art, and table service.</p>
            </div>
          </div>

          <div class="pgdm-focus-card reveal">
            <img src="images/hospitality/conrad-workshop.jpg" alt="Front Office Operations" class="pgdm-focus-img" loading="lazy">
            <div class="pgdm-focus-body">
              <span class="pgdm-focus-tag">FRONT OFFICE</span>
              <h4>Opera PMS Lab</h4>
              <p>Industry-standard property management simulations, check-in algorithms, and guest service protocols.</p>
            </div>
          </div>

          <div class="pgdm-focus-card reveal">
            <img src="images/hospitality/event3.jpg" alt="Housekeeping Suite" class="pgdm-focus-img" loading="lazy">
            <div class="pgdm-focus-body">
              <span class="pgdm-focus-tag">ROOMS DIVISION</span>
              <h4>Housekeeping Suite</h4>
              <p>Model guest room suite covering interior aesthetics, linen management, and 5-star sanitation systems.</p>
            </div>
          </div>

          <div class="pgdm-focus-card reveal">
            <img src="images/hospitality/event4.jpg" alt="Dual 5-Star Internships" class="pgdm-focus-img" loading="lazy">
            <div class="pgdm-focus-body">
              <span class="pgdm-focus-tag">INTERNSHIPS</span>
              <h4>Dual 5-Star Stints</h4>
              <p>Two embedded corporate internships with Marriott, Hyatt, Taj, Oberoi, and Conrad properties.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 4: 15 LEXICON ADVANTAGES
         ========================================================================== -->
    <section class="section" id="advantages">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">THE HMCT ADVANTAGE</p>
            <h2>15 Lexicon Advantages<span class="period">.</span></h2>
            <p class="section-lead">Distinctive institutional features that set our hospitality students apart from traditional hotel management graduates:</p>
          </div>
        </div>

        <div class="advantages-grid">
          
          <div class="adv-card reveal">
            <div class="adv-num">01</div>
            <div>
              <h4>Dual 5-Star Internships</h4>
              <p>Two distinct operational training exposures with luxury brand hospitality chains.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">02</div>
            <div>
              <h4>20:1 Student-Teacher Ratio</h4>
              <p>Optimal class sizes ensuring personalized faculty mentorship and 1-on-1 guidance.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">03</div>
            <div>
              <h4>Spoken French Certification</h4>
              <p>Professional fluency in classical French &mdash; the international language of hospitality.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">04</div>
            <div>
              <h4>Opera PMS Simulation</h4>
              <p>Direct certification on the world's most ubiquitous hotel property management system.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">05</div>
            <div>
              <h4>Barista &amp; Coffee Craft</h4>
              <p>Specialized hands-on coffee brewing, espresso extraction, and latte art training.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">06</div>
            <div>
              <h4>Mixology &amp; Mock Bar</h4>
              <p>Beverage formulation, cocktail crafting techniques, and bar flair demonstrations.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">07</div>
            <div>
              <h4>FSSAI Food Safety</h4>
              <p>Official food safety supervisor and hygiene certification recognized nationwide.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">08</div>
            <div>
              <h4>Dedicated 1-on-1 Mentorship</h4>
              <p>Continuous career mapping by seasoned General Managers and Executive Chefs.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">09</div>
            <div>
              <h4>Wine Tasting &amp; Sommelier</h4>
              <p>Varietal appreciation, viticulture overview, and professional wine service etiquette.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">10</div>
            <div>
              <h4>Commercial Quantity Kitchens</h4>
              <p>Heavy-duty culinary equipment replicating actual 5-star hotel hot-line environments.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">11</div>
            <div>
              <h4>Bakery &amp; Pastry Arts Lab</h4>
              <p>Artisanal bread making, sugar craft, chocolate tempering, and gourmet desserts.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">12</div>
            <div>
              <h4>Event &amp; Banquet Management</h4>
              <p>Live planning and execution of large-scale corporate galas and culinary summits.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">13</div>
            <div>
              <h4>Cross-Cultural Dining Etiquette</h4>
              <p>Refined personal grooming, posture, table manners, and diplomatic protocol.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">14</div>
            <div>
              <h4>Merit Scholarships (₹50,000)</h4>
              <p>Generous financial support for academic achievers, sports stars, and defence wards.</p>
            </div>
          </div>

          <div class="adv-card reveal">
            <div class="adv-num">15</div>
            <div>
              <h4>100% Placement Assistance</h4>
              <p>Dedicated campus recruitment cell partnering with leading hotel chains globally.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 5: PROGRAM SPOTLIGHT (WORLD-CLASS LABS)
         ========================================================================== -->
    <section class="section section-dark" id="labs-spotlight">
      <div class="container">
        <div class="pgdm-lab-spotlight reveal">
          <div class="pgdm-lab-grid">
            
            <div>
              <span class="pgdm-lab-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                PRACTICAL INFRASTRUCTURE SPOTLIGHT
              </span>
              <h2 class="pgdm-lab-title">World-Class Culinary &amp; Hospitality Simulation Suites.</h2>
              <p class="pgdm-lab-desc">
                Hospitality excellence cannot be taught through slides alone. At Lexicon HMCT, our campus boasts industry-grade production kitchens, specialized bakery suites, a training restaurant, a mock bar, an Opera PMS computer lab, and a model housekeeping suite.
              </p>

              <div class="pgdm-lab-quote">
                <p>&ldquo;True hospitality is about precision, passion, and personal connection. We train our students in realistic 5-star setups so they walk into luxury properties as seasoned pros, not trainees.&rdquo;</p>
              </div>

              <div class="pgdm-lab-modules">
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Quantity Training Kitchen (QTK)</span>
                </div>
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Advanced Training Kitchen (ATK)</span>
                </div>
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Bakery &amp; Confectionery Studio</span>
                </div>
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Fine Dining Training Restaurant</span>
                </div>
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Mock Cocktail &amp; Barista Bar</span>
                </div>
                <div class="pgdm-lab-mod-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Opera PMS Front Desk Simulator</span>
                </div>
              </div>
            </div>

            <!-- Terminal Console Card -->
            <div class="pgdm-terminal-card">
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span class="terminal-title">lexicon-hmct-system ~ hospitality-os</span>
              </div>
              <div class="terminal-body">
                <div><span class="cmd">&gt; initialize_service_protocol</span></div>
                <div class="output">[OK] Kitchen Prep Stations: Sanitized &amp; Ready</div>
                <div class="output">[OK] Opera PMS Reservation System: Connected</div>
                <div class="output">[OK] Mock Bar Cellar: Regulated at 12&deg;C</div>
                <div style="margin-top: 10px;"><span class="cmd">&gt; check_internship_readiness</span></div>
                <div class="output">&bull; Marriott Luxury Brand: Contract Confirmed</div>
                <div class="output">&bull; Oberoi Hotels &amp; Resorts: Summer Slot Open</div>
                <div class="output">&bull; Hyatt Regency: Front Desk Stint Assigned</div>
                <div style="margin-top: 10px;"><span class="cmd">&gt; verify_certifications</span></div>
                <div class="success">&check; FSSAI Food Safety Supervisor: Certified</div>
                <div class="success">&check; Spoken French Dipl&ocirc;me: Cleared</div>
                <div class="success">&check; 5-Star Readiness Status: Exceptional</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 6: COMPREHENSIVE CURRICULUM ARCHITECTURE (TABBED)
         ========================================================================== -->
    <section class="section" id="curriculum">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">ACADEMIC RIGOR</p>
            <h2>6-Semester Curriculum Architecture<span class="period">.</span></h2>
            <p class="section-lead">A balanced pedagogical progression affiliated with YCMOU, combining core hospitality subjects with two embedded corporate internships.</p>
          </div>
        </div>

        <div class="curriculum-tabs-nav reveal" role="tablist">
          <button type="button" class="curriculum-tab-btn active" role="tab" aria-selected="true" data-tab="hmct-year-1">
            Year 1 &middot; Foundation &amp; Craft (Sem I &amp; II)
          </button>
          <button type="button" class="curriculum-tab-btn" role="tab" aria-selected="false" data-tab="hmct-year-2">
            Year 2 &middot; Intermediate &amp; Internship I (Sem III &amp; IV)
          </button>
          <button type="button" class="curriculum-tab-btn" role="tab" aria-selected="false" data-tab="hmct-year-3">
            Year 3 &middot; Management &amp; Internship II (Sem V &amp; VI)
          </button>
        </div>

        <!-- Year 1 Content -->
        <div class="curriculum-tab-content active" id="hmct-year-1" role="tabpanel">
          <div class="curriculum-semester-grid">
            
            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester I &middot; Hospitality Foundations</h4>
                <span class="semester-badge">CORE</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>Basic Food Production &amp; Culinary Fundamentals (Practical + Theory)</span>
                  <span class="subject-tag">Culinary</span>
                </li>
                <li class="subject-item">
                  <span>Food &amp; Beverage Service Foundation &amp; Table Layouts</span>
                  <span class="subject-tag">F&amp;B</span>
                </li>
                <li class="subject-item">
                  <span>Front Office Operations &amp; Guest Reception Principles</span>
                  <span class="subject-tag">Front Office</span>
                </li>
                <li class="subject-item">
                  <span>Accommodation Services &amp; Housekeeping Fundamentals</span>
                  <span class="subject-tag">Housekeeping</span>
                </li>
                <li class="subject-item">
                  <span>Communication Skills &amp; Conversational French - I</span>
                  <span class="subject-tag">Language</span>
                </li>
              </ul>
            </div>

            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester II &middot; Advanced Fundamentals &amp; Science</h4>
                <span class="semester-badge">APPLIED</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>Quantity Food Production &amp; Regional Indian Cuisines</span>
                  <span class="subject-tag">Culinary</span>
                </li>
                <li class="subject-item">
                  <span>Beverage Studies, Bar Equipment &amp; Mocktail Crafting</span>
                  <span class="subject-tag">F&amp;B</span>
                </li>
                <li class="subject-item">
                  <span>Front Office Accounting, Reservation Systems &amp; Cashiering</span>
                  <span class="subject-tag">Front Office</span>
                </li>
                <li class="subject-item">
                  <span>Hotel Engineering, Maintenance &amp; Safety Systems</span>
                  <span class="subject-tag">Technical</span>
                </li>
                <li class="subject-item">
                  <span>Food Science, Nutrition &amp; FSSAI Hygiene Guidelines</span>
                  <span class="subject-tag">Science</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Year 2 Content -->
        <div class="curriculum-tab-content" id="hmct-year-2" role="tabpanel">
          <div class="curriculum-semester-grid">
            
            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester III &middot; Advanced Food Craft &amp; Software</h4>
                <span class="semester-badge">SPECIALIZATION</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>International Gastronomy (Continental, Mediterranean &amp; Oriental)</span>
                  <span class="subject-tag">Culinary</span>
                </li>
                <li class="subject-item">
                  <span>Bakery, Pastry Arts &amp; Confectionery Studio</span>
                  <span class="subject-tag">Bakery</span>
                </li>
                <li class="subject-item">
                  <span>Wine Studies, Sommelier Craft &amp; Banquet Operations</span>
                  <span class="subject-tag">F&amp;B</span>
                </li>
                <li class="subject-item">
                  <span>Opera Property Management System (PMS) Certification</span>
                  <span class="subject-tag">Software</span>
                </li>
                <li class="subject-item">
                  <span>Hospitality Sales, Marketing &amp; Public Relations</span>
                  <span class="subject-tag">Business</span>
                </li>
              </ul>
            </div>

            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester IV &middot; Industrial Hotel Internship I</h4>
                <span class="semester-badge">5-STAR INTERNSHIP</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>Food Production Corporate Rotation (Kitchen Hot Line)</span>
                  <span class="subject-tag">Rotational</span>
                </li>
                <li class="subject-item">
                  <span>Food &amp; Beverage Service Live Floor Management</span>
                  <span class="subject-tag">Rotational</span>
                </li>
                <li class="subject-item">
                  <span>Front Desk, Concierge &amp; Night Audit Immersion</span>
                  <span class="subject-tag">Rotational</span>
                </li>
                <li class="subject-item">
                  <span>Housekeeping &amp; Laundry Operations Practical Stint</span>
                  <span class="subject-tag">Rotational</span>
                </li>
                <li class="subject-item">
                  <span>Logbook Submission &amp; Industry Mentor Appraisal</span>
                  <span class="subject-tag">Evaluation</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Year 3 Content -->
        <div class="curriculum-tab-content" id="hmct-year-3" role="tabpanel">
          <div class="curriculum-semester-grid">
            
            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester V &middot; Hotel Strategy &amp; Revenue Operations</h4>
                <span class="semester-badge">STRATEGY</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>Advanced Kitchen Management, Larder &amp; Charcuterie</span>
                  <span class="subject-tag">Culinary</span>
                </li>
                <li class="subject-item">
                  <span>Hotel Financial Management &amp; Uniform System of Accounts</span>
                  <span class="subject-tag">Finance</span>
                </li>
                <li class="subject-item">
                  <span>Revenue Management &amp; Yield Optimization Algorithms</span>
                  <span class="subject-tag">Strategy</span>
                </li>
                <li class="subject-item">
                  <span>Hospitality Law, Licensing &amp; Labor Relations</span>
                  <span class="subject-tag">Legal</span>
                </li>
                <li class="subject-item">
                  <span>Conversational French for Hoteliers - II</span>
                  <span class="subject-tag">Language</span>
                </li>
              </ul>
            </div>

            <div class="semester-card">
              <div class="semester-header">
                <h4>Semester VI &middot; Industrial Hotel Internship II &amp; Placements</h4>
                <span class="semester-badge">CAPSTONE &amp; CAREER</span>
              </div>
              <ul class="subject-list">
                <li class="subject-item">
                  <span>Departmental Specialization Stint (Culinary / F&amp;B / Front Office / Accommodations)</span>
                  <span class="subject-tag">Specialization</span>
                </li>
                <li class="subject-item">
                  <span>Supervisory Leadership Project &amp; Operations Audit</span>
                  <span class="subject-tag">Supervisory</span>
                </li>
                <li class="subject-item">
                  <span>Comprehensive Viva Voce &amp; University Board Defense</span>
                  <span class="subject-tag">Defense</span>
                </li>
                <li class="subject-item">
                  <span>Management Trainee (MT) Campus Placement Drives</span>
                  <span class="subject-tag">Placement</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================================================
         SECTION 7: EMPLOYMENT ENHANCING CERTIFICATIONS (MARQUEE)
         ========================================================================== -->
    <section class="section section-dark" id="certifications">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">INDUSTRY CREDENTIALS</p>
            <h2>Professional Certifications Included<span class="period">.</span></h2>
            <p class="section-lead">Embedded credentials that validate your practical capabilities for prestigious international hotel brands:</p>
          </div>
        </div>

        <div class="cert-marquee-wrap reveal">
          <div class="cert-marquee-track">
            <!-- Set 1 -->
            <div class="cert-pill"><span>FSSAI Food Safety Supervisor</span></div>
            <div class="cert-pill"><span>Oracle Hospitality Opera PMS</span></div>
            <div class="cert-pill"><span>Conversational Professional French</span></div>
            <div class="cert-pill"><span>HACCP Food Safety Standards</span></div>
            <div class="cert-pill"><span>Barista &amp; Coffee Roasting Arts</span></div>
            <div class="cert-pill"><span>Wine &amp; Beverage Tasting Fundamentals</span></div>
            <div class="cert-pill"><span>Cross-Cultural Dining Etiquette</span></div>
            <div class="cert-pill"><span>First Aid &amp; Hotel Emergency Protocols</span></div>

            <!-- Set 2 -->
            <div class="cert-pill"><span>FSSAI Food Safety Supervisor</span></div>
            <div class="cert-pill"><span>Oracle Hospitality Opera PMS</span></div>
            <div class="cert-pill"><span>Conversational Professional French</span></div>
            <div class="cert-pill"><span>HACCP Food Safety Standards</span></div>
            <div class="cert-pill"><span>Barista &amp; Coffee Roasting Arts</span></div>
            <div class="cert-pill"><span>Wine &amp; Beverage Tasting Fundamentals</span></div>
            <div class="cert-pill"><span>Cross-Cultural Dining Etiquette</span></div>
            <div class="cert-pill"><span>First Aid &amp; Hotel Emergency Protocols</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 8: APPROVED COURSE FEES & OFFICIAL BANK DETAILS
         ========================================================================== -->
    <section class="section" id="fees">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">TRANSPARENT FINANCIALS</p>
            <h2>Approved Course Fee Schedule<span class="period">.</span></h2>
            <p class="section-lead">Transparent, scheduled fee installments affiliated with YCMOU and the Lexicon Institute of Hotel Management.</p>
          </div>
        </div>

        <div class="fee-kpi-grid reveal">
          <div class="fee-kpi-card">
            <h4>Total Course Fee (3 Years)</h4>
            <div class="fee-kpi-amount gold">&#8377;3,99,000/-*</div>
            <p>*+ Taxes as applicable &middot; Part-A ₹2,69,229 + Part-B ₹1,29,774</p>
          </div>

          <div class="fee-kpi-card">
            <h4>Part-A &middot; College Training</h4>
            <div class="fee-kpi-amount">&#8377;2,69,229*</div>
            <p>₹89,743/yr &middot; Industry Professional Skills &amp; Practical Training</p>
          </div>

          <div class="fee-kpi-card">
            <h4>Part-B &middot; University Share</h4>
            <div class="fee-kpi-amount">&#8377;1,29,774</div>
            <p>₹43,258/yr &middot; Direct YCMOU University Statutory Fees</p>
          </div>
        </div>

        <div class="fee-table-wrap reveal">
          <table class="fee-table">
            <thead>
              <tr>
                <th>Academic Year</th>
                <th>Core Particulars &amp; Payment Schedule</th>
                <th>Part-A (Institute)*</th>
                <th>Part-B (Univ.)</th>
                <th>Yearly Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Year 1 (AY 2027-28)</strong></td>
                <td>
                  Enrollment Fee: ₹15,000 (Within 3 days of offer letter)<br>
                  1st Installment: ₹37,371 (Within 1 month of registration fee)<br>
                  2nd Installment: ₹37,372 (On or before 15th June 2027)
                </td>
                <td style="color: #38bdf8; font-weight: 700;">₹89,743*</td>
                <td style="color: #22d3ee;">₹43,258</td>
                <td style="font-weight: 700; color: #ffffff;">₹1,33,001</td>
              </tr>
              <tr>
                <td><strong>Year 2 (AY 2028-29)</strong></td>
                <td>Industry Professional Skill Certification Fees (On or before 30th June 2028)</td>
                <td style="color: #38bdf8; font-weight: 700;">₹89,743*</td>
                <td style="color: #22d3ee;">₹43,258</td>
                <td style="font-weight: 700; color: #ffffff;">₹1,33,001</td>
              </tr>
              <tr>
                <td><strong>Year 3 (AY 2029-30)</strong></td>
                <td>Industry Professional Skill Certification Fees (On or before 30th June 2029)</td>
                <td style="color: #38bdf8; font-weight: 700;">₹89,743*</td>
                <td style="color: #22d3ee;">₹43,258</td>
                <td style="font-weight: 700; color: #ffffff;">₹1,33,001</td>
              </tr>
              <tr class="total-row">
                <td colspan="2"><strong>Grand Total (3-Year B.Sc in Hospitality Studies)</strong></td>
                <td style="color: #38bdf8; font-weight: 800;">₹2,69,229*</td>
                <td style="color: #22d3ee; font-weight: 800;">₹1,29,774</td>
                <td style="color: #10b981; font-weight: 800; font-size: 17px;">₹3,99,000/-*</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top: 10px; font-size: 12.5px; color: #94a3b8; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <span>*+ Taxes as applicable. University statutory fees (₹43,258/yr) are paid online directly by the student on the official YCMOU portal.</span>
            <a href="b-sc-fee-structure.html" style="color: #38bdf8; text-decoration: underline; font-weight: 600;">View Full Official Fee Portal &rarr;</a>
          </div>
        </div>

        <!-- Official Bank Account Details -->
        <div class="bank-details-grid reveal">
          <div class="bank-card">
            <div class="bank-card__header">
              <span class="bank-card__badge">Part-A Remittance</span>
              <h4>Account Details For B.Sc. Hospitality Studies</h4>
            </div>
            <ul class="bank-details-list">
              <li><span>Account Name:</span> <strong>Lexicon Management Institute of Leadership &amp; Excellence - A Unit of LLPL</strong></li>
              <li><span>Bank Name:</span> <strong>Kotak Mahindra Bank Limited</strong></li>
              <li><span>Branch &amp; Type:</span> <strong>Ramwadi, Pune &middot; Current</strong></li>
              <li><span>Account Number:</span> <strong>5111793292</strong></li>
              <li><span>IFSC Code:</span> <strong>KKBK0000730</strong></li>
            </ul>
            <button type="button" class="copy-account-btn" onclick="copyBankInfo('5111793292', 'KKBK0000730', this)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>Copy Account Details</span>
            </button>
          </div>

          <div class="bank-card">
            <div class="bank-card__header">
              <span class="bank-card__badge" style="background: rgba(16, 185, 129, 0.12); color: #34d399; border-color: rgba(16, 185, 129, 0.3);">Scholarships</span>
              <h4>Merit Scholarships (Up to &#8377;50,000)</h4>
            </div>
            <p style="font-size: 13.5px; color: #cbd5e1; line-height: 1.6; margin: 0 0 16px 0;">
              Deserving candidates can avail scholarships based on Class 12th merit scores, state/national sports participation, and defence quota concessions. Contact admissions desk for scholarship documentation.
            </p>
            <a href="tel:+918855013525" class="helix-btn-secondary" style="font-size: 12.5px; padding: 8px 16px;">
              <span>Call Scholarship Desk: +91 88550 13525</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================================================
         SECTION 9: ELIGIBILITY CRITERIA & ROADMAP (3 CARDS)
         ========================================================================== -->
    <section class="section section-dark" id="eligibility">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">REQUIREMENTS</p>
            <h2>Eligibility Criteria &amp; Roadmap<span class="period">.</span></h2>
            <p class="section-lead">A straightforward 3-stage qualification benchmark compliant with YCMOU University guidelines:</p>
          </div>
        </div>

        <div class="pgdm-eligibility-grid">
          
          <div class="pgdm-elig-card reveal">
            <span class="pgdm-elig-num">CRITERION 01</span>
            <h3>10+2 Qualification</h3>
            <p>Candidate should have passed the 10+2 Higher Secondary Certificate (HSC) or equivalent examination in <strong>any stream (Science, Commerce, or Arts)</strong> with English as a compulsory subject.</p>
          </div>

          <div class="pgdm-elig-card reveal">
            <span class="pgdm-elig-num">CRITERION 02</span>
            <h3>Minimum Marks</h3>
            <p>Minimum <strong>45% aggregate marks</strong> in 10+2 (40% for candidates belonging to reserved categories in Maharashtra) as mandated by YCMOU.</p>
          </div>

          <div class="pgdm-elig-card reveal">
            <span class="pgdm-elig-num">CRITERION 03</span>
            <h3>Personal Interview &amp; Counseling</h3>
            <p>Personal interaction with our hospitality mentors assessing candidate passion, grooming aptitude, and communication skills followed by provisional seat booking.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 10: 5-STAR HOTEL RECRUITERS
         ========================================================================== -->
    <section class="section" id="recruiters">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">5-STAR NETWORK</p>
            <h2>Our Luxury Hotel Placement Partners<span class="period">.</span></h2>
            <p class="section-lead">Students train and secure placements with the world's most distinguished hospitality brands:</p>
          </div>
        </div>

        <div class="recruiters-strip reveal">
          <div class="recruiter-box"><img src="images/recruiters/r1.jpg" alt="Marriott International" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r2.jpg" alt="The Oberoi Group" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r3.jpg" alt="Taj Hotels" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r4.jpg" alt="Hyatt Hotels" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r5.jpg" alt="Conrad Hotels" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r6.jpg" alt="Westin Hotels" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r7.jpg" alt="Novotel" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r8.jpg" alt="The Ritz-Carlton" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r9.jpg" alt="JW Marriott" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r10.jpg" alt="Hilton Hotels" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r11.jpg" alt="Radisson Blu" loading="lazy"></div>
          <div class="recruiter-box"><img src="images/recruiters/r12.jpg" alt="Accor Hotels" loading="lazy"></div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 11: FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ========================================================================== -->
    <section class="section section-dark" id="faqs">
      <div class="container">
        <div class="section-heading reveal text-center">
          <div>
            <p class="eyebrow">COMMON INQUIRIES</p>
            <h2>Frequently Asked Questions<span class="period">.</span></h2>
            <p class="section-lead">Find answers regarding degree validity, internships, kitchen uniforms, and placement pathways.</p>
          </div>
        </div>

        <div class="faq-container">
          
          <div class="pgdm-accordion-item active">
            <button type="button" class="pgdm-accordion-header" aria-expanded="true">
              <span>Is this B.Sc Hospitality degree recognized for government jobs and higher studies?</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="pgdm-accordion-body">
              <p>Yes. The degree is officially awarded by <strong>Yashwantrao Chavan Maharashtra Open University (YCMOU)</strong>, a UGC recognized and NAAC &lsquo;A&rsquo; Grade accredited university. As per UGC and AIU regulations, degrees from YCMOU are recognized at par with all other statutory Indian universities for government employment, competitive exams, and higher education worldwide.</p>
            </div>
          </div>

          <div class="pgdm-accordion-item">
            <button type="button" class="pgdm-accordion-header" aria-expanded="false">
              <span>What is the difference between B.Sc Hospitality Studies and BHMCT?</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="pgdm-accordion-body">
              <p>B.Sc in Hospitality Studies is an intensive 3-year science-aligned undergraduate degree with heavy emphasis on culinary arts, food science, and dual corporate internships. BHMCT is typically a 4-year technical course. B.Sc allows students to enter the 5-star hotel industry a full year earlier with equivalent managerial outcomes.</p>
            </div>
          </div>

          <div class="pgdm-accordion-item">
            <button type="button" class="pgdm-accordion-header" aria-expanded="false">
              <span>How are the dual 5-star hotel internships organized?</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="pgdm-accordion-body">
              <p>Students undergo two distinct hotel internships: the first in Semester IV and the second in Semester VI. Lexicon HMCT's placement cell coordinates interviews directly with leading 5-star hotel partners like Marriott, Conrad, Taj, and Hyatt.</p>
            </div>
          </div>

          <div class="pgdm-accordion-item">
            <button type="button" class="pgdm-accordion-header" aria-expanded="false">
              <span>Are chef uniforms, toolkits, and hotel software included?</span>
              <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="pgdm-accordion-body">
              <p>Yes. The Year 1 fee includes the official chef uniform, service uniform, professional knife kit, and full access to the Opera PMS simulation labs and commercial kitchens.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SECTION 12: BOTTOM FINAL CTA BANNER
         ========================================================================== -->
    <section class="section" id="apply">
      <div class="container">
        <div class="cta-card reveal">
          <div class="cta-inner">
            <div>
              <p class="eyebrow" style="color: #38bdf8;">ADMISSIONS OPEN &middot; BATCH 2027&ndash;29</p>
              <h2 class="cta-heading">Step into Global Hospitality with <em>B.Sc Hospitality Studies.</em></h2>
              <p class="cta-desc">
                Gain YCMOU degree accreditation, dual 5-star luxury hotel internships, French certification, and 100% placement support at Lexicon HMCT, Pune.
              </p>
              <div class="cta-actions">
                <a href="https://admissions.lexiconmile.com/" target="_blank" rel="noopener noreferrer" class="helix-btn-primary">
                  Start Online Application <span>&nearr;</span>
                </a>
                <button type="button" class="helix-btn-secondary" id="btn-open-brochure-bottom">
                  Download Brochure <span>&darr;</span>
                </button>
              </div>
              <div class="cta-contact-bar">
                <div>
                  <strong style="color: #fff;">Direct HMCT Admissions Hotline:</strong>
                  <a href="tel:+918855013525" style="color: #38bdf8; text-decoration: none; margin-left: 6px;">+91 88550 13525</a>
                </div>
                <div>
                  <strong style="color: #fff;">Email Desk:</strong>
                  <a href="mailto:admission.hmct@mile.education" style="color: #38bdf8; text-decoration: none; margin-left: 6px;">admission.hmct@mile.education</a>
                </div>
              </div>
            </div>
            <div class="cta-image-wrapper">
              <img src="images/hospitality/conrad-workshop.jpg" alt="Lexicon HMCT Hospitality Training" loading="lazy">
              <span class="cta-arrow" aria-hidden="true">&nearr;</span>
            </div>
          </div>
          <div class="cta-bottom">
            <span>WHERE LUXURY HOSPITALITY MEETS CAREER EXCELLENCE.</span>
            <span>LEXICON HMCT &middot; PUNE</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <div id="footer"></div>

  <!-- ==========================================================================
       INTERACTIVE BROCHURE DOWNLOAD MODAL
       ========================================================================== -->
  <div class="modal-backdrop" id="brochure-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-card">
      <button type="button" class="modal-close-btn" id="modal-close-btn" aria-label="Close modal">&times;</button>
      
      <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #38bdf8; display: block; margin-bottom: 8px;">INSTANT ACCESS</span>
      <h3 id="modal-title" style="font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 10px 0;">Download B.Sc Hospitality Brochure</h3>
      <p style="font-size: 13px; color: #94a3b8; margin-bottom: 20px;">Please enter your details to receive the comprehensive 6-semester syllabus, approved fee schedule, and 5-star internship placement report.</p>

      <form id="brochure-form" onsubmit="handleBrochureSubmit(event)">
        <div class="modal-form-group">
          <label for="b-name">Full Name *</label>
          <input type="text" id="b-name" required placeholder="e.g. Vikramaditya Deshmukh">
        </div>

        <div class="modal-form-group">
          <label for="b-email">Email Address *</label>
          <input type="email" id="b-email" required placeholder="vikram@example.com">
        </div>

        <div class="modal-form-group">
          <label for="b-phone">Mobile Number *</label>
          <input type="tel" id="b-phone" required pattern="[0-9]{10}" placeholder="10-digit mobile number">
        </div>

        <div class="modal-form-group">
          <label for="b-spec">Interested Department</label>
          <select id="b-spec">
            <option value="Culinary Arts">Culinary Arts &amp; Food Production</option>
            <option value="F&B Service">Food &amp; Beverage Service &amp; Mixology</option>
            <option value="Front Office">Front Office &amp; Opera PMS</option>
            <option value="Hotel Management">General Hotel Administration</option>
          </select>
        </div>

        <button type="submit" class="button" style="width: 100%; margin-top: 10px; justify-content: center; background: #0b63ce; color: #fff; border: none; padding: 12px; border-radius: 8px; font-weight: 700; cursor: pointer;">
          Download Official Brochure Now <span>&darr;</span>
        </button>

        <div id="modal-success" style="display: none; margin-top: 15px; padding: 12px; border-radius: 8px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-size: 13px; text-align: center;">
          &check; Brochure download starting! Our HMCT counselor will connect with you shortly.
        </div>
      </form>
    </div>
  </div>

  <!-- Shared Component Loader -->
  <script src="js/components.js"></script>

  <!-- Interactive Scripts -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Accordion / Collapsible behavior (User Rule)
      const accordionItems = document.querySelectorAll('.pgdm-accordion-item');
      accordionItems.forEach(item => {
        const header = item.querySelector('.pgdm-accordion-header');
        if (!header) return;

        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          accordionItems.forEach(other => {
            other.classList.remove('active');
            const h = other.querySelector('.pgdm-accordion-header');
            if (h) h.setAttribute('aria-expanded', 'false');
          });

          if (!isActive) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
          }
        });
      });

      // 2. Curriculum Tabs Switcher
      const tabBtns = document.querySelectorAll('.curriculum-tab-btn');
      const tabPanels = document.querySelectorAll('.curriculum-tab-content');

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetTab = btn.getAttribute('data-tab');

          tabBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          tabPanels.forEach(p => p.classList.remove('active'));

          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          const activePanel = document.getElementById(targetTab);
          if (activePanel) {
            activePanel.classList.add('active');
          }
        });
      });

      // 3. Modal Open / Close Logic
      const modal = document.getElementById('brochure-modal');
      const openBtn1 = document.getElementById('btn-open-brochure');
      const openBtn2 = document.getElementById('btn-open-brochure-bottom');
      const closeBtn = document.getElementById('modal-close-btn');

      const openModal = () => { if (modal) modal.classList.add('open'); };
      const closeModal = () => { if (modal) modal.classList.remove('open'); };

      if (openBtn1) openBtn1.addEventListener('click', openModal);
      if (openBtn2) openBtn2.addEventListener('click', openModal);
      if (closeBtn) closeBtn.addEventListener('click', closeModal);

      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
        });
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
          closeModal();
        }
      });
    });

    // 4. Copy Bank Details
    function copyBankInfo(acc, ifsc, btn) {
      const textToCopy = 'Account Number: ' + acc + '\\nIFSC Code: ' + ifsc + '\\nBank: Kotak Mahindra Bank\\nBeneficiary: Lexicon Management Institute of Leadership & Excellence';
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span style="color: #34d399;">&check; Copied to Clipboard!</span>';
        setTimeout(() => { btn.innerHTML = originalText; }, 2500);
      });
    }

    // 5. Form submission handler
    function handleBrochureSubmit(e) {
      e.preventDefault();
      const successBox = document.getElementById('modal-success');
      if (successBox) successBox.style.display = 'block';

      setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'mandatory-disclosure-lexicon-mile.html';
        link.target = '_blank';
        link.click();
      }, 1000);
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'v4', 'b-sc-hospitality-studies.html'), bscHtml, 'utf8');
console.log('Successfully generated modernised v4/b-sc-hospitality-studies.html matching PGDM blueprint!');
