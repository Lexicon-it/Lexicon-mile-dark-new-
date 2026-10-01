const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'v4', 'sbs.html');
const destDir = path.join(__dirname, '..', 'v4', 'programs', 'sbs');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let content = fs.readFileSync(srcPath, 'utf8');
content = content.replace(/(href|src|poster)=["']styles\//g, '$1="../../styles/');
content = content.replace(/(href|src|poster)=["']assets\//g, '$1="../../assets/');
content = content.replace(/(href|src|poster)=["']images\//g, '$1="../../images/');
content = content.replace(/(href|src|poster)=["']js\//g, '$1="../../js/');
content = content.replace(/url\(["']?images\//g, 'url("../../images/');
content = content.replace(/url\(["']?assets\//g, 'url("../../assets/');
content = content.replace(/href=["']index\.html["']/g, 'href="../../index.html"');
content = content.replace(/href=["']programs\.html["']/g, 'href="../../programs.html"');
content = content.replace(/href=["']sbs\.html["']/g, 'href="index.html"');

fs.writeFileSync(path.join(destDir, 'index.html'), content, 'utf8');
console.log('Successfully created v4/programs/sbs/index.html');
