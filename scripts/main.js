'use strict';

const megaMenuData = {
  // About Us Menu
  'about-lexicon': {
    overview: `<h4 class="mega-heading">OVERVIEW</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Founded in 2006 in Pune, The Lexicon Group has evolved into a premier educational and business leader, empowering individuals at every stage of life through diverse initiatives. The group continues to create opportunities for learning, growth and development with a strong focus on excellence.</p>`,
    image: `<img src="images/portrait-1.jpg" alt="About Lexicon" class="mega-image">`
  },
  'lexicon-group': {
    overview: `<h4 class="mega-heading">LEXICON GROUP</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Lexicon Group is a prominent Pune-based conglomerate founded in 2006, dedicated to fostering excellence across education, wellness, media, and innovative ventures. Headquartered in Pune, the group has evolved into a diverse ecosystem that impacts thousands of lives through quality-driven initiatives.</p>`,
    image: `<img src="images/campus.jpg" alt="Lexicon Group" class="mega-image">`
  },
  'managing-trustees': {
    overview: `<h4 class="mega-heading">MANAGING TRUSTEES</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Managing Trustees of Lexicon MILE bring together visionary leadership, industry experience and a strong commitment to quality education. Their collective vision focuses on innovation, excellence, values and holistic student development, while fostering industry relevance, lifelong learning and leadership for the future.</p>`,
    image: `<img src="images/classroom.jpg" alt="Managing Trustees" class="mega-image">`
  },
  'ceo-message': {
    overview: `<h4 class="mega-heading">CEO'S MESSAGE</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Dear Students, Faculty, & Industry Partners, Welcome to Lexicon Management Institute of Leadership & Excellence (Lexicon MILE). As CEO, I see Lexicon MILE as a long-term commitment to developing leaders who think independently, act responsibly, and remain grounded while navigating complexity.</p>`,
    image: `<img src="images/global.jpg" alt="CEO Message" class="mega-image">`
  },
  'governing-body': {
    overview: `<h4 class="mega-heading">GOVERNING BODY</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Board of Governors of Lexicon MILE brings together experienced academicians, industry professionals, technologists and education leaders from diverse fields. Their collective expertise supports academic excellence, industry relevance, strong governance and progressive learning, contributing to continued institutional growth.</p>`,
    image: `<img src="images/collaboration.jpg" alt="Governing Body" class="mega-image">`
  },
  'ranking-accreditation': {
    overview: `<h4 class="mega-heading">RANKING & ACCREDITATION</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE has been recognised through prestigious awards and accolades for excellence in management education, academic leadership and industry-oriented learning. These recognitions reflect achievements in placements, innovation, digital initiatives and leadership development for industry-ready professionals.</p>`,
    image: `<img src="images/hospitality.jpg" alt="Ranking and Accreditation" class="mega-image">`
  },

  // Programs Menu
  'pgdm': {
    overview: `<h4 class="mega-heading">PGDM SPECIALIZATIONS</h4>
               <a href="#pgdm-bm" class="mega-link" style="margin-bottom: 5px;">PGDM in Business Management <span>↗</span></a>
               <a href="#pgdm-mf" class="mega-link" style="margin-bottom: 5px;">PGDM in Marketing & Finance <span>↗</span></a>
               <a href="#pgdm-rba" class="mega-link" style="margin-bottom: 15px;">PGDM in Research and Business Analytics <span>↗</span></a>
               <span style="display: inline-block; padding: 4px 10px; background: #ffffff1a; color: #8cb4f5; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; border-radius: 4px; margin-bottom: 12px; align-self: flex-start;">2 Years · AICTE Approved</span>
               <p style="color: #b1bfd2; font-size: 13px; line-height: 1.6;">A 2-year, full-time, AICTE-approved PGDM (Approval No. 1-4259511) designed around entrepreneurship, applied AI and a corporate co-learning model.</p>`,
    image: `<img src="images/classroom.jpg" alt="PGDM" class="mega-image">`
  },
  'mba-global': {
    overview: `<h4 class="mega-heading">MBA GLOBAL TRACKS</h4>
               <a href="#mba-usw" class="mega-link" style="margin-bottom: 5px;">MBA Global · USW, UK <span>↗</span></a>
               <a href="#mba-inti" class="mega-link" style="margin-bottom: 5px;">MBA Global · INTI, Malaysia <span>↗</span></a>
               <a href="#mba-sbs" class="mega-link" style="margin-bottom: 15px;">MBA Global · SBS Swiss Business School <span>↗</span></a>
               <span style="display: inline-block; padding: 4px 10px; background: #ffffff1a; color: #8cb4f5; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; border-radius: 4px; margin-bottom: 15px;">Global Exposure</span>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7;">The MBA Global programme combines management education at Lexicon MILE with international learning through partner universities, offering global academic standards, international learning and exposure.</p>`,
    image: `<img src="images/global.jpg" alt="MBA Global" class="mega-image">`
  },
  'bba': {
    overview: `<h4 class="mega-heading">BBA SPECIALIZATIONS</h4>
               <a href="#bba-fm" class="mega-link" style="margin-bottom: 5px;">Finance Management (FM) <span>↗</span></a>
               <a href="#bba-hrm" class="mega-link" style="margin-bottom: 5px;">Human Resource Management (HRM) <span>↗</span></a>
               <a href="#bba-mm" class="mega-link" style="margin-bottom: 5px;">Marketing Management (MM) <span>↗</span></a>
               <a href="#bba-abm" class="mega-link" style="margin-bottom: 5px;">Agri Business Management (ABM) <span>↗</span></a>
               <a href="#bba-sm" class="mega-link" style="margin-bottom: 15px;">Services Management (SM) <span>↗</span></a>
               <span style="display: inline-block; padding: 4px 10px; background: #ffffff1a; color: #8cb4f5; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; border-radius: 4px; margin-bottom: 15px;">4 Years · AICTE Approved</span>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7;">Lexicon MILE’s BBA combines core business fundamentals with AI, analytics and hands-on industry exposure.</p>`,
    image: `<img src="images/collaboration.jpg" alt="BBA" class="mega-image">`
  },
  'hmct': {
    overview: `<h4 class="mega-heading">HMCT SPECIALIZATIONS</h4>
               <a href="#bsc-hs" class="mega-link" style="margin-bottom: 5px;">B.Sc in Hospitality Studies <span>↗</span></a>
               <a href="#dip-hs" class="mega-link" style="margin-bottom: 5px;">Diploma in Hospitality Studies <span>↗</span></a>
               <a href="#h-school" class="mega-link" style="margin-bottom: 15px;">Lexicon MILE H-School <span>↗</span></a>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7;">Lexicon MILE H-School, by the hoteliers, for the hoteliers, affiliated with YCMOU, a UGC-recognised, NAAC 'A' Grade University. Built for students seeking hands-on exposure to the hospitality industry through collaborations with leading hospitality brands.</p>`,
    image: `<img src="images/hospitality.jpg" alt="HMCT" class="mega-image">`
  },

  // Admissions Menu
  'admissions-process': {
    overview: `<h4 class="mega-heading">ADMISSIONS PROCESS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE’s admission process guides students through eligibility, application, selection and enrolment. Applicants can explore entrance requirements, application details, fees and scholarships, while the admissions team provides guidance throughout the process. The approach makes admissions structured and transparent for aspiring management professionals.</p>`,
    image: `<img src="images/collaboration.jpg" alt="Admissions Process" class="mega-image">`
  },
  'pgdm-fee-structure': {
    overview: `<h4 class="mega-heading">PGDM FEE STRUCTURE</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The PGDM fee structure outlines registration, first-year tuition, second-year tuition and development fees, along with their respective payment schedules. For the 2027–29 batch, the total programme fee is ₹6.95 lakh, plus applicable taxes, with payments scheduled across admission and academic milestones.</p>`,
    image: `<img src="images/campus.jpg" alt="Fees Structure" class="mega-image">`
  },
  'scholarships': {
    overview: `<h4 class="mega-heading">SCHOLARSHIPS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE offers scholarships designed to recognise academic excellence and support deserving students by reducing the financial burden of management education. For the PGDM 2026–28 batch, scholarships are based on entrance examination performance, with awards up to ₹1,00,000 for CAT, ₹75,000 for CMAT and ₹50,000 for MAT. Scholarships are limited and subject to applicable conditions.</p>`,
    image: `<img src="images/hero.jpg" alt="Scholarships" class="mega-image">`
  },
  'admission-guide': {
    overview: `<h4 class="mega-heading">ADMISSION GUIDE</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Lexicon MILE admission guide provides a step-by-step pathway for applicants, from creating an account and verifying their email to completing the online application. Candidates enter their academic and personal details, pay the application fee and submit the completed application. The guide makes the admission journey structured and easy to follow.</p>`,
    image: `<img src="images/classroom.jpg" alt="Admission Guide" class="mega-image">`
  },
  'education-loan': {
    overview: `<h4 class="mega-heading">EDUCATION LOAN ASSISTANCE</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE supports students seeking financial assistance through partnerships with reputed banking institutions offering education loans at nominal interest rates. The admissions team assists students with loan enquiries, documentation and processing. This support helps students navigate the education loan process and makes financing more accessible.</p>`,
    image: `<img src="images/hospitality.jpg" alt="Education Loan" class="mega-image">`
  },

  // Faculty & Mentors
  'faculty-mentors': {
    overview: `<h4 class="mega-heading">FACULTY & INDUSTRY MENTORS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE brings together accomplished faculty and experienced industry professionals who connect academic knowledge with real-world business challenges. Through the “A Mentor Every MILE” model, students engage through leadership sessions, one-on-one mentoring, fireside chats and industry-integrated projects with industry leaders and professionals.</p>`,
    image: `<img src="images/collaboration.jpg" alt="Faculty & Mentors" class="mega-image">`
  },
  'faculty-directory': {
    overview: `<h4 class="mega-heading">FACULTY DIRECTORY</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE’s faculty directory brings together accomplished academic scholars and experienced industry practitioners across management, analytics, marketing, business communication and specialised areas. The directory features resident faculty and visiting industry leaders, bringing academic knowledge and practical business perspectives into the learning experience.</p>`,
    image: `<img src="images/global.jpg" alt="Faculty Directory" class="mega-image">`
  },

  // Placements
  'our-recruiters': {
    overview: `<h4 class="mega-heading">OUR RECRUITERS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE has built a strong industry network of 200+ recruiters, providing students with career opportunities across leading national and multinational organisations. Its recruiter ecosystem spans diverse industries and sectors, connecting students with companies for internships, placements and long-term career opportunities across multiple professional fields.</p>`,
    image: `<img src="images/hospitality.jpg" alt="Our Recruiters" class="mega-image">`
  },
  'placements-overview': {
    overview: `<h4 class="mega-heading">PLACEMENTS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE’s placement ecosystem connects students with 200+ organisations across diverse sectors, supported by strong industry engagement and practical learning. For the 2024–26 PGDM batch, the institute reports 500+ placement offers, with the highest international package at ₹49 LPA and highest domestic package at ₹22 LPA, supporting industry-ready careers.</p>`,
    image: `<img src="images/hero.jpg" alt="Placements" class="mega-image">`
  },
  'recruitment-process': {
    overview: `<h4 class="mega-heading">RECRUITMENT PROCESS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE has streamlined its recruitment process through technology, industry integration and outcome-driven education, enabling organisations to connect efficiently with talent. Its recruitment platform helps identify Day Zero Professionals based on role requirements, skills and organisational needs. The Career Development & Placement Cell prepares students for dynamic corporate environments.</p>`,
    image: `<img src="images/classroom.jpg" alt="Recruitment Process" class="mega-image">`
  },

  // More
  'seat-vacancy': {
    overview: `<h4 class="mega-heading">SEAT VACANCY DETAILS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Seat Vacancy Details section provides updated information on available seats across programmes offered by Lexicon MILE. It helps prospective students understand current availability and programme-wise vacancy details. The section provides information on admission opportunities, helping applicants make informed decisions and proceed with the admission process.</p>`,
    image: `<img src="images/sliders/4.jpg-1.jpeg" alt="Seat Vacancy" class="mega-image">`
  },
  'campus': {
    overview: `<h4 class="mega-heading">CAMPUS TOUR</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Lexicon MILE campus provides an interactive and collaborative learning environment with modern classrooms, digital learning facilities and dedicated spaces for teamwork and practical exposure. The campus also houses Hyper Build – The Lexicon MILE AI Lab, where students work on real corporate challenges and practical AI applications.</p>`,
    image: `<img src="images/campus.jpg" alt="Campus Tour" class="mega-image">`
  },
  'blogs': {
    overview: `<h4 class="mega-heading">BLOGS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">The Lexicon MILE blog brings together insights on management education, careers, business and industry trends. Covering PGDM, MBA Global and BBA, the articles explore programme choices, career opportunities, placements, skills and international exposure. The content helps students understand emerging trends and make informed academic and career decisions.</p>`,
    image: `<img src="images/global.jpg" alt="Blogs" class="mega-image">`
  },
  'events-webinars': {
    overview: `<h4 class="mega-heading">EVENTS & WEBINARS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE creates a vibrant learning environment through leadership conclaves, industry summits, TEDx events, masterclasses, industrial visits and thought-leadership sessions. These experiences connect students with industry leaders, entrepreneurs and professionals, encouraging networking, practical learning and exposure to real-world business perspectives.</p>`,
    image: `<img src="images/collaboration.jpg" alt="Events" class="mega-image">`
  },
  'partnerships': {
    overview: `<h4 class="mega-heading">PARTNERSHIPS</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Lexicon MILE collaborates with leading academic institutions, industry organisations and professional networks to strengthen learning beyond the classroom. These partnerships support research, faculty interactions, student learning opportunities, curriculum development, internships and live projects, connecting academic knowledge with real business challenges.</p>`,
    image: `<img src="images/hero.jpg" alt="Partnerships" class="mega-image">`
  },
  'contact': {
    overview: `<h4 class="mega-heading">CONTACT US</h4>
               <p style="color: #b1bfd2; font-size: 14px; line-height: 1.7; ">Connect with Lexicon MILE for admission, placement and general enquiries through dedicated support channels. The institute’s Pune campus is located at MILE Tower, GAT No. 726, Pune-Nagar Road, Wagholi. Dedicated contacts are available to assist prospective students, recruiters and other visitors with relevant enquiries and support.</p>`,
    image: `<img src="images/portrait-1.jpg" alt="Contact Us" class="mega-image">`
  }
};

document.querySelectorAll('.mega-link-large').forEach(link => {
  link.addEventListener('mouseenter', function() {
    const key = this.getAttribute('data-hover');
    if (key && megaMenuData[key]) {
      const megaMenu = this.closest('.mega-menu');
      if (!megaMenu) return;
      const overviewContainer = megaMenu.querySelector('.mega-col-sub');
      const imageContainer = megaMenu.querySelector('.mega-col-image');
      if (overviewContainer) overviewContainer.innerHTML = megaMenuData[key].overview;
      if (imageContainer) imageContainer.innerHTML = megaMenuData[key].image;
    }
  });
});

// This is a frontend concept. No enquiries or personal data are sent to a server.
const programs = {
  pgdm: { title: 'PGDM', category: 'POSTGRADUATE / MANAGEMENT', image: 'classroom', description: 'An AI-integrated, industry-focused management program designed to develop future-ready business leaders.', highlights: ['AI-integrated business learning', 'Industry immersion and live projects', 'Leadership development', 'Business strategy and practical decision-making'] },
  mba: { title: 'MBA Global', category: 'POSTGRADUATE / GLOBAL BUSINESS', image: 'global', description: 'Experience globally focused MBA programmes across the UK, Malaysia, and UAE, with dual-campus learning and international exposure. Choose from International Business, Business Analytics & AI, or Family Business Management and build global leadership skills. Gain practical experience, industry exposure, and a truly global MBA experience.', highlights: ['Global exposure and perspectives', 'International business', 'Strategic thinking', 'Cross-cultural learning and leadership'] },
  bba: { title: 'BBA', category: 'UNDERGRADUATE / BUSINESS', image: 'collaboration', description: 'A future-ready BBA at Lexicon MILE combining business, AI, analytics, and hands-on industry exposure. Learn through real-world projects and AI-powered tools to build practical, analytical, and professional skills. Graduate as a confident Day Zero Professional, ready for an AI-driven business world.', highlights: ['Business foundations', 'Innovation and practical learning', 'Entrepreneurial thinking', 'Leadership development'] },
  ihm: { title: 'IHM / HMCT', category: 'HOSPITALITY / MANAGEMENT', image: 'hospitality', description: 'Build a career in hospitality, tourism, and hotel management through academic excellence and hands-on industry exposure. Develop global perspectives, practical skills, and a passion for service excellence.', highlights: ['Hospitality and service excellence', 'Tourism and management', 'Practical industry training', 'Professional development'] }
};

const awards = [
  'Top 100 Institutes in India for Digital Distinction',
  'Best B-School in Leadership Excellence',
  'Best Private Management Institute in India for Placements',
  'Dewang Mehta National Education Award',
  'RRC Knowledge Education Leadership Award',
  "AsiaOne World's Greatest Brand Award",
  'Lead Lab Centre of Excellence Award',
  'Best Management Institute for Placements'
];
document.getElementById('awards-grid').innerHTML = awards.map((award, index) => `<article class="award-item reveal"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#award"/></svg><span class="award-index">${String(index + 1).padStart(2, '0')}</span><h3>${award}</h3></article>`).join('');

const activities = [
  { title: 'Clubs & Communities', image: 'classroom', description: 'Find your people. Exchange perspectives. Build something bigger together.' },
  { title: 'Competitions', image: 'collaboration', description: 'Take on new challenges and turn bold ideas into your competitive edge.' },
  { title: 'Events & Experiences', image: 'auditorium', description: 'Be part of the moments, conversations and celebrations that stay with you.' },
  { title: 'Industry Visits', image: 'global', description: 'Go behind the scenes and see the world of business in motion.' },
  { title: 'Workshops', image: 'hero', description: 'Get hands-on with new tools, fresh perspectives and real-world skills.' },
  { title: 'Student Activities', image: 'campus', description: 'Make room for curiosity, collaboration and a little friendly competition.' },
  { title: 'Entrepreneurship', image: 'collaboration', description: 'Challenge assumptions. Test an idea. Take the first step towards building it.' },
  { title: 'Leadership', image: 'classroom', description: 'Learn to inspire a team, take ownership and create meaningful change.' }
];
document.getElementById('life-track').innerHTML = activities.map((activity, index) => `<article class="life-card"><div class="life-image"><img src="images/${activity.image}.jpg" alt="Illustrative ${activity.title.toLowerCase()} experience" loading="lazy" width="700" height="470"><span>${String(index + 1).padStart(2, '0')}</span></div><h3>${activity.title}</h3><p>${activity.description}</p></article>`).join('');

// Native dialogs provide keyboard focus containment and Escape-to-close.
const detailDialog = document.getElementById('detail-dialog');
const dialogContent = document.getElementById('dialog-content');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
let previousFocus = null;
function openDialog(content) {
  if (mobileMenu.open) mobileMenu.close();
  if (!detailDialog.open) previousFocus = document.activeElement;
  dialogContent.innerHTML = content;
  if (!detailDialog.open) detailDialog.showModal();
  document.body.classList.add('menu-open');
  detailDialog.scrollTop = 0;
  document.getElementById('dialog-close').focus();
}
function closeDialog() { detailDialog.close(); }
document.getElementById('dialog-close').addEventListener('click', closeDialog);
detailDialog.addEventListener('close', () => {
  document.body.classList.remove('menu-open');
  if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
});
function closeOnBackdrop(event, dialog) {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}
detailDialog.addEventListener('click', event => closeOnBackdrop(event, detailDialog));
menuToggle.addEventListener('click', () => {
  mobileMenu.showModal();
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
});
document.getElementById('menu-close').addEventListener('click', () => mobileMenu.close());
mobileMenu.addEventListener('close', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  if (!detailDialog.open) document.body.classList.remove('menu-open');
});
mobileMenu.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => mobileMenu.close()));

function programDialog(key) {
  const program = programs[key];
  if (!program) return;
  openDialog(`<p class="eyebrow">${program.category}</p><h2 id="dialog-title">${program.title}<span class="period">.</span></h2><img class="dialog-hero" src="images/${program.image}.jpg" alt="Illustrative ${program.title} learning environment"><p>${program.description}</p><ul>${program.highlights.map(item => `<li>${item}</li>`).join('')}</ul><p class="dialog-notice">Detailed curriculum, duration, accreditation, eligibility and fees will be added once confirmed by Lexicon MILE.</p><button class="button" data-action="apply" data-selected="${key}">I'm interested <span>↗</span></button>`);
}
function applicationDialog(selected) {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('lexicon-program-interest')); } catch (_) { /* Storage may be unavailable. */ }
  const choice = programs[selected] ? selected : (saved && programs[saved.program] ? saved.program : 'pgdm');
  openDialog(`<p class="eyebrow">ADMISSIONS / 2026–27</p><h2 id="dialog-title">Your next chapter starts here<span class="period">.</span></h2><p>Choose the path that matches your ambition. Save your program preference and explore what comes next.</p><form class="interest-form" id="interest-form"><label for="program-interest">Which program are you interested in?</label><select id="program-interest" name="program">${Object.entries(programs).map(([key, program]) => `<option value="${key}" ${key === choice ? 'selected' : ''}>${program.title}</option>`).join('')}</select><button type="submit" class="button">Save My Interest <span>↗</span></button><div id="interest-status" role="status"></div></form><p class="dialog-notice">This is an admissions preview, not an application submission. Your program preference stays on this device only. Official application links and admissions contact details will be added before launch.</p>`);
}
const information = {
  'admission-process': { eyebrow: 'ADMISSIONS / YOUR NEXT STEP', title: 'Begin with ambition.', body: '<p>Explore our programs, identify the learning experience that fits your goals, and prepare for the next stage of your journey.</p><ul><li>Explore PGDM, MBA Global, BBA and IHM / HMCT.</li><li>Review the official eligibility criteria when published.</li><li>Prepare your academic records and supporting documents.</li><li>Complete the official application when its link is available.</li></ul><p class="dialog-notice">Institution-specific selection stages, deadlines and application instructions are awaiting confirmation.</p>' },
  eligibility: { eyebrow: 'ADMISSIONS / ELIGIBILITY', title: 'Find your fit.', body: '<p>Eligibility requirements vary by program. Academic qualifications, entrance-test requirements and selection criteria will be published following institutional confirmation.</p><p>Explore each program to understand its focus. No unverified eligibility criteria are presented in this concept.</p>' },
  fees: { eyebrow: 'ADMISSIONS / PROGRAM FEES', title: 'Invest in what’s next.', body: '<p>A complete, program-specific fee schedule will be available before applications go live, including the payment schedule and any additional charges.</p><p class="dialog-notice">Fees have not been supplied for this design concept. Please rely only on the official fee structure once published.</p>' },
  scholarships: { eyebrow: 'ADMISSIONS / SCHOLARSHIPS', title: 'Make ambition possible.', body: '<p>Scholarship availability, eligibility, amounts and application timelines will be shared once the official policy is confirmed.</p><p class="dialog-notice">This concept does not promise scholarship funding or financial assistance.</p>' },
  placements: { eyebrow: 'CAREERS / BUILT FOR THE WORLD OF WORK', title: 'Your potential. Real impact.', body: '<p>Industry exposure, practical learning and corporate relationships connect education to the world of work.</p><ul><li>500+ students placed</li><li>200+ recruiters / companies</li><li>49 LPA highest package — context to be confirmed</li><li>22 LPA highest package — context to be confirmed</li></ul><p class="dialog-notice">These figures were supplied for the homepage concept. Cohorts, reporting periods, program applicability and salary components have not been provided. They are not a placement guarantee. A verified placement report is required before publication.</p>' },
  contact: { eyebrow: 'CONNECT / LEXICON MILE', title: 'Let’s start a conversation.', body: '<p>Explore your next chapter with Lexicon MILE in Pune, Maharashtra, India.</p><p class="dialog-notice">The official campus address, admissions email and phone number have not been provided. Verified contact channels will be added before launch.</p>' },
  whatsapp: { eyebrow: 'CONNECT / WHATSAPP', title: 'One conversation away.', body: '<p>Our WhatsApp enquiry channel will make it easier to explore programs and admissions.</p><p class="dialog-notice">An official WhatsApp number has not yet been configured. No message has been sent. Verified contact details are needed before enabling this action.</p>' },
  call: { eyebrow: 'CONNECT / CALL', title: 'Talk about your next step.', body: '<p>Speak with the admissions team about choosing a program and preparing your application.</p><p class="dialog-notice">The official admissions phone number has not yet been provided. This preview does not place calls.</p>' },
  privacy: { eyebrow: 'LEGAL / PREVIEW NOTICE', title: 'Your privacy matters.', body: '<p>This design preview does not collect or transmit personal information. If you choose “Save My Interest,” your selected program is stored locally in your browser. Clear your browser’s site data to remove it.</p><p>No analytics, tracking cookies or external runtime asset requests are included. Hosting providers may retain standard request logs.</p><p class="dialog-notice">An institution-approved privacy policy is required before the production site collects applications or connects third-party services.</p>' },
  terms: { eyebrow: 'LEGAL / PREVIEW NOTICE', title: 'A note on this experience.', body: '<p>This is a homepage design concept for Lexicon MILE. Photography, portraits and recruiter wordmarks are illustrative. Program descriptions, names, recognition and numerical outcomes were supplied in the project brief and require institutional review.</p><p>No application is submitted, no payment is collected, and no admission, scholarship or placement outcome is guaranteed through this preview.</p><p class="dialog-notice">Institution-approved terms and conditions must replace this preview notice before public launch.</p>' }
};

const storyDetails = {
  students: { category: 'STUDENTS SPEAK', title: 'Voices of the MILE-Makers.', image: 'classroom', text: 'Inside the experience, in their own words. Discover the learning, connections and personal growth behind the MILE journey.' },
  recruiters: { category: 'RECRUITERS SPEAK', title: "The Recruiter’s Verdict.", image: 'hero', text: 'What industry looks for in tomorrow’s talent. A closer look at the skills, perspectives and readiness that matter in the world of work.' },
  parents: { category: 'PARENTS SPEAK', title: 'A Parent’s Perspective.', image: 'campus', text: 'Confidence in the journey. Pride in the growth. A family’s perspective on a transformative chapter in a student’s life.' }
};

// Downloads are generated entirely in the browser; this is intentionally a concept overview.
function downloadBrochure() {
  const content = [
    'LEXICON MILE', 'BUSINESS EDUCATION FOR THE NEXT GENERATION OF GLOBAL LEADERS', '',
    'PROGRAM OVERVIEW — DESIGN CONCEPT / NOT AN OFFICIAL ADMISSIONS BROCHURE', '',
    'Build Your Edge. Lead What Comes Next.',
    'An industry-integrated business education built for ambitious leaders.', '',
    ...Object.values(programs).flatMap(program => [program.title.toUpperCase(), program.description, ...program.highlights.map(item => `• ${item}`), '']),
    'NEXT STEPS', 'Official application links, eligibility, duration, accreditation, program fees and scholarship policies are awaiting institutional confirmation.',
    'Admissions cycle shown in this concept: 2026–27.', '',
    'IMPORTANT', 'This is a locally generated text overview of the homepage concept. It is not an official institutional brochure. No application is submitted through this site. Claims and affiliations require verification before publication.'
  ].join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Lexicon-MILE-Program-Overview-Concept.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  toast('Concept program overview downloaded. Official brochure pending.');
}
let toastTimer;
function toast(message) {
  const notification = document.getElementById('toast');
  notification.textContent = message;
  notification.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => notification.classList.remove('visible'), 4500);
}

document.addEventListener('click', event => {
  const target = event.target.closest('[data-program], [data-action], [data-story], [data-social]');
  if (!target) return;
  if (target.dataset.program) return programDialog(target.dataset.program);
  if (target.dataset.social) {
    const platform = target.dataset.social;
    openDialog(`<p class="eyebrow">CONNECT / ${platform.toUpperCase()}</p><h2 id="dialog-title">Stay in the conversation.</h2><p>Follow Lexicon MILE on ${platform} for perspectives, campus moments and community stories.</p><p class="dialog-notice">The institution’s verified ${platform} profile link has not been provided. It will be connected before launch.</p>`);
    return;
  }
  if (target.dataset.story) {
    const story = storyDetails[target.dataset.story];
    openDialog(`<p class="eyebrow">${story.category}</p><h2 id="dialog-title">${story.title}</h2><img class="dialog-hero" src="images/${story.image}.jpg" alt="Illustrative film thumbnail"><p>${story.text}</p><p class="dialog-notice">Film coming soon. This is an editorial thumbnail preview; no official video has been supplied.</p>`);
    return;
  }
  const action = target.dataset.action;
  if (action === 'apply') return applicationDialog(target.dataset.selected);
  if (action === 'brochure') return downloadBrochure();
  const info = information[action];
  if (info) openDialog(`<p class="eyebrow">${info.eyebrow}</p><h2 id="dialog-title">${info.title}</h2>${info.body}`);
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'interest-form') return;
  event.preventDefault();
  const program = document.getElementById('program-interest').value;
  const status = document.getElementById('interest-status');
  const message = document.createElement('p');
  message.className = 'saved-interest';
  try {
    localStorage.setItem('lexicon-program-interest', JSON.stringify({ program, savedAt: new Date().toISOString() }));
    message.textContent = `Your interest in ${programs[program].title} is saved on this device. This is not an application submission.`;
  } catch (_) {
    message.textContent = 'Your browser has disabled local storage, so your preference could not be saved. No application has been submitted.';
  }
  status.replaceChildren(message);
});

// Manual carousel: no auto-advance to interrupt reading or keyboard navigation.
const testimonials = [
  { quote: 'Lexicon MILE gave me the confidence to step outside the classroom and solve real business problems.', name: 'Mr. Siddhant Raj', program: 'PGDM · Batch details to be confirmed', image: 'student', note: 'Provided testimonial · illustrative portrait' },
  { quote: 'The most valuable lessons happen when you turn an idea into action, alongside people who challenge you to think bigger.', name: 'The industry-immersion perspective', program: 'PGDM · Illustrative student voice', image: 'mentor-woman', note: 'Illustrative editorial quote · student name and batch pending' },
  { quote: 'A global perspective starts with curiosity — about people, markets and the possibilities beyond your comfort zone.', name: 'The global-learning perspective', program: 'MBA Global · Illustrative student voice', image: 'mentor-man', note: 'Illustrative editorial quote · student name and batch pending' }
];
let testimonialIndex = 0;
function setTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  const testimonial = testimonials[testimonialIndex];
  document.getElementById('testimonial-quote').textContent = testimonial.quote;
  document.getElementById('testimonial-name').textContent = testimonial.name;
  document.getElementById('testimonial-program').textContent = testimonial.program;
  document.getElementById('testimonial-note').textContent = testimonial.note;
  document.getElementById('testimonial-photo').src = `images/${testimonial.image}.jpg`;
  document.getElementById('testimonial-index').innerHTML = `${String(testimonialIndex + 1).padStart(2, '0')} <span>/ 03</span>`;
}
document.getElementById('testimonial-prev').addEventListener('click', () => setTestimonial(-1));
document.getElementById('testimonial-next').addEventListener('click', () => setTestimonial(1));

const lifeTrack = document.getElementById('life-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function scrollActivities(direction) {
  const card = lifeTrack.querySelector('.life-card');
  const gap = parseFloat(getComputedStyle(lifeTrack).gap) || 22;
  lifeTrack.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
document.getElementById('life-prev').addEventListener('click', () => scrollActivities(-1));
document.getElementById('life-next').addEventListener('click', () => scrollActivities(1));
function updateTrack() {
  const maxScroll = lifeTrack.scrollWidth - lifeTrack.clientWidth;
  const ratio = lifeTrack.clientWidth / lifeTrack.scrollWidth;
  const indicator = document.getElementById('life-progress');
  indicator.style.width = `${ratio * 100}%`;
  indicator.style.transform = `translateX(${(lifeTrack.scrollLeft / Math.max(1, maxScroll)) * (1 / ratio - 1) * 100}%)`;
  document.getElementById('life-prev').disabled = lifeTrack.scrollLeft < 2;
  document.getElementById('life-next').disabled = lifeTrack.scrollLeft >= maxScroll - 2;
}
lifeTrack.addEventListener('scroll', updateTrack, { passive: true });
window.addEventListener('resize', updateTrack);
updateTrack();

// Content is visible by default. Observer only adds entrance motion, never hides text.
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      if (reducedMotion.matches) return;
      const target = Number(entry.target.dataset.counter);
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / 1150, 1);
        entry.target.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: .8 });
  document.querySelectorAll('[data-counter]').forEach(element => counterObserver.observe(element));
}
const header = document.getElementById('site-header');
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 35); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Very small pointer-following movement on the main CTAs, fine pointers only.
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
  document.querySelectorAll('.hero-buttons .button, .cta-buttons .button').forEach(button => {
    button.addEventListener('pointermove', event => {
      const box = button.getBoundingClientRect();
      button.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .045}px, ${(event.clientY - box.top - box.height / 2) * .07}px)`;
    });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
}

// Hero background slider — auto-advances with crossfade, no controls visible
(function heroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  let current = 0;
  const interval = 5000; // 5 seconds per slide
  function next() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }
  // Respect reduced motion preference
  if (!reducedMotion.matches) {
    setInterval(next, interval);
  }
})();
    // ==========================================
    // 16. Stacking Cards on Scroll Animation
    // ==========================================
    const stackCards = document.querySelectorAll('.practically-card.stack-card');
    const pracHeader = document.querySelector('.practically-header');
    if (stackCards.length > 0) {
        let isStackTicking = false;
        const lastCard = stackCards[stackCards.length - 1];

        function updateCardStack() {
            stackCards.forEach((card, index) => {
                const nextCard = stackCards[index + 1];
                if (nextCard) {
                    const cardRect = card.getBoundingClientRect();
                    const nextRect = nextCard.getBoundingClientRect();
                    
                    // How much the next card has overlapped with the current sticky card
                    const overlapDistance = cardRect.bottom - nextRect.top;
                    const cardHeight = cardRect.height || 450;
                    
                    if (overlapDistance > 0) {
                        const progress = Math.min(Math.max(overlapDistance / cardHeight, 0), 1);
                        // Scale down card proportionally as next card covers it like a deck of cards
                        const scale = 1 - (progress * 0.05);
                        const brightness = 1 - (progress * 0.12);
                        const translateY = -progress * 8;
                        card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                        card.style.filter = `brightness(${brightness})`;
                    } else {
                        card.style.transform = 'scale(1) translateY(0px)';
                        card.style.filter = 'brightness(1)';
                    }
                }
            });

            isStackTicking = false;
        }

        window.addEventListener('scroll', () => {
            if (!isStackTicking) {
                requestAnimationFrame(updateCardStack);
                isStackTicking = true;
            }
        }, { passive: true });

        // Initial calculation
        updateCardStack();
    }

    // ==========================================

