'use strict';
const frame = document.getElementById('homepage');
const output = document.getElementById('results');
let passed = 0;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
function check(condition, label) {
  if (!condition) throw new Error(label);
  passed += 1;
  console.log(`PASS ${passed}: ${label}`);
  output.textContent += `\nPASS ${passed}: ${label}`;
}
frame.addEventListener('load', async () => {
  output.textContent = '';
  try {
    const doc = frame.contentDocument;
    const win = frame.contentWindow;
    const modal = doc.getElementById('detail-dialog');
    const close = () => doc.getElementById('dialog-close').click();
    check(doc.querySelectorAll('h1').length === 1, 'Exactly one homepage H1');
    check(doc.querySelectorAll('.program-card').length === 4, 'All four programs present');
    check(doc.querySelectorAll('.award-item').length === 8, 'All eight awards rendered');
    check(doc.querySelectorAll('.life-card').length === 8, 'All eight student activities rendered');
    const missingAnchors = [...doc.querySelectorAll('a[href^="#"]')].filter(link => link.hash && !doc.querySelector(link.hash));
    check(missingAnchors.length === 0, 'All section navigation targets exist');
    for (const key of ['pgdm', 'mba', 'bba', 'ihm']) {
      doc.querySelector(`[data-program="${key}"]`).click();
      check(modal.open && !!doc.getElementById('dialog-title'), `${key} program dialog opens`);
      close();
      await wait(25);
    }
    doc.querySelector('[data-program="mba"]').click();
    modal.querySelector('[data-action="apply"]').click();
    check(doc.getElementById('program-interest').value === 'mba', 'Program choice carried into admissions preview');
    const oldPreference = win.localStorage.getItem('lexicon-program-interest');
    doc.getElementById('interest-form').requestSubmit();
    check(JSON.parse(win.localStorage.getItem('lexicon-program-interest')).program === 'mba', 'Program interest saved on this device');
    check(doc.getElementById('interest-status').textContent.includes('not an application submission'), 'Save confirmation explicitly states no application was submitted');
    close();
    await wait(25);
    doc.querySelector('[data-action="apply"]').click();
    check(doc.getElementById('program-interest').value === 'mba', 'Saved program choice restored');
    close();
    if (oldPreference === null) win.localStorage.removeItem('lexicon-program-interest');
    else win.localStorage.setItem('lexicon-program-interest', oldPreference);
    await wait(25);
    const originalQuote = doc.getElementById('testimonial-quote').textContent;
    doc.getElementById('testimonial-next').click();
    check(doc.getElementById('testimonial-quote').textContent !== originalQuote, 'Next testimonial changes content');
    doc.getElementById('testimonial-prev').click();
    check(doc.getElementById('testimonial-quote').textContent === originalQuote, 'Previous testimonial restores content');
    doc.getElementById('testimonial-prev').click();
    check(doc.getElementById('testimonial-index').textContent.trim().startsWith('03'), 'Testimonial wraps backwards');
    doc.getElementById('testimonial-next').click();
    doc.getElementById('menu-toggle').click();
    check(doc.getElementById('mobile-menu').open && doc.getElementById('menu-toggle').getAttribute('aria-expanded') === 'true', 'Navigation dialog opens with accessible state');
    doc.querySelector('#mobile-menu a[href="#programs"]').click();
    await wait(60);
    check(!doc.getElementById('mobile-menu').open && doc.getElementById('menu-toggle').getAttribute('aria-expanded') === 'false', 'Navigation link closes menu and resets accessible state');
    for (const action of ['placements','admission-process','eligibility','fees','scholarships','contact','whatsapp','call','privacy','terms']) {
      doc.querySelector(`[data-action="${action}"]`).click();
      check(modal.open && doc.getElementById('dialog-title').textContent.length > 0, `${action} information dialog opens`);
      close();
      await wait(25);
    }
    for (const story of ['students','recruiters','parents']) {
      doc.querySelector(`[data-story="${story}"]`).click();
      check(modal.open && modal.textContent.includes('Film coming soon'), `${story} film is clearly marked as a preview`);
      close();
      await wait(25);
    }
    const track = doc.getElementById('life-track');
    track.scrollLeft = 0;
    doc.getElementById('life-next').click();
    await wait(700);
    check(track.scrollLeft > 0, 'Student-life next button scrolls the real track');
    doc.getElementById('life-prev').click();
    await wait(700);
    check(track.scrollLeft < 3, 'Student-life previous button returns to start');
    const brokenImages = [...doc.images].filter(image => image.complete && image.naturalWidth === 0);
    check(brokenImages.length === 0, 'No broken images among loaded assets');
    check(!modal.open && !doc.getElementById('mobile-menu').open, 'All dialogs closed after testing');
    console.log(`COMPLETE: ${passed} interaction checks passed.`);
    output.textContent += `\n\nCOMPLETE: ${passed} interaction checks passed.`;
    output.dataset.complete = 'true';
  } catch (error) {
    console.error(`FAIL: ${error.message}`);
    output.textContent += `\nFAIL: ${error.message}`;
    output.dataset.complete = 'failed';
  }
});
