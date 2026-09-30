const fs = require('fs');
let js = fs.readFileSync('hf_final.js', 'utf8');

// Replace repetitive styles in megaMenuData with CSS classes
js = js.replace(/style="?color:#b1bfd2;font-size:14px;line-height:1.7;margin-top:15px;"?/g, 'class="mega-desc"');
js = js.replace(/style="?margin-bottom:5px;"?/g, 'class="mega-mb5"');
js = js.replace(/style="?margin-bottom:15px;"?/g, 'class="mega-mb15"');
js = js.replace(/style="?margin-bottom:2px;"?/g, 'class="mega-mb2"');
js = js.replace(/style="?margin-bottom:8px;"?/g, 'class="mega-mb8"');
js = js.replace(/style="?display:inline-block;padding:4px10px;background:#ffffff1a;color:#8cb4f5;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:4px;margin-bottom:15px;"?/g, 'class="mega-badge mega-mb15"');
js = js.replace(/style="?display:inline-block;padding:4px10px;background:#ffffff1a;color:#8cb4f5;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:4px;margin-bottom:12px;align-self:flex-start;"?/g, 'class="mega-badge mega-mb12"');
js = js.replace(/style="?display:inline-block;padding:4px10px;background:#ffffff1a;color:#8cb4f5;font-size:11px;font-weight:700;letter-spacing:0.05em;border-radius:4px;margin-bottom:8px;align-self:flex-start;"?/g, 'class="mega-badge mega-mb8"');

// The JS also contains all the information dialogs: information, storyDetails. The footer doesn't have these.
let newJs = js.substring(0, js.indexOf('const programs='));
newJs += js.substring(js.indexOf('const header=document.getElementById'), js.indexOf('if(window.matchMedia'));
newJs += 'document.querySelectorAll(".mega-desc").forEach(el=>{el.style.color="#b1bfd2";el.style.fontSize="14px";el.style.lineHeight="1.7";el.style.marginTop="15px"});';

console.log('Optimized JS size:', newJs.length);
fs.writeFileSync('hf_final_opt.js', newJs);
