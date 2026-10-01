const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'v4', 'pgdm.html');
const destPath = path.join(__dirname, '..', 'v4', 'programs', 'pgdm', 'index.html');

let content = fs.readFileSync(srcPath, 'utf8');

// replace assets, styles, js
content = content.replace(/(href|src|poster)=["']styles\//g, '$1="../../styles/');
content = content.replace(/(href|src|poster)=["']assets\//g, '$1="../../assets/');
content = content.replace(/(href|src|poster)=["']images\//g, '$1="../../images/');
content = content.replace(/(href|src|poster)=["']js\//g, '$1="../../js/');
content = content.replace(/url\(["']?images\//g, 'url("../../images/');
content = content.replace(/url\(["']?assets\//g, 'url("../../assets/');

// replace root page links
content = content.replace(/href=["']index\.html["']/g, 'href="../../index.html"');
content = content.replace(/href=["']programs\.html["']/g, 'href="../../programs.html"');
content = content.replace(/href=["']pgdm\.html["']/g, 'href="index.html"');
content = content.replace(/href=["']contact\.html["']/g, 'href="../../contact.html"');
content = content.replace(/href=["']admission\.html["']/g, 'href="../../admission.html"');
content = content.replace(/href=["']campus-tour\.html["']/g, 'href="../../campus-tour.html"');
content = content.replace(/href=["']our-recruiters\.html["']/g, 'href="../../our-recruiters.html"');
content = content.replace(/href=["']fee-pgdm\.html["']/g, 'href="../../fee-pgdm.html"');
content = content.replace(/href=["']faculty\.html["']/g, 'href="../../faculty.html"');
content = content.replace(/href=["']alumni\.html["']/g, 'href="../../alumni.html"');
content = content.replace(/href=["']bba\.html["']/g, 'href="../../bba.html"');
content = content.replace(/href=["']global-mba\.html["']/g, 'href="../global-mba/"');
content = content.replace(/href=["']mba-in-business-analytics\.html["']/g, 'href="../mba-in-business-analytics/"');
content = content.replace(/href=["']sbs\.html["']/g, 'href="../../sbs.html"');
content = content.replace(/href=["']b-sc-hospitality-studies\.html["']/g, 'href="../../b-sc-hospitality-studies.html"');
content = content.replace(/href=["']diploma-in-hospitality-studies\.html["']/g, 'href="../../diploma-in-hospitality-studies.html"');

fs.writeFileSync(destPath, content, 'utf8');
console.log('Successfully synced v4/programs/pgdm/index.html with v4/pgdm.html!');
