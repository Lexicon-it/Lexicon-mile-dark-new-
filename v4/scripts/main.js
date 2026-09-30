'use strict';

const megaMenuData = {
  // About Us Menu
  'about-lexicon': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">OVERVIEW</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Founded in 2006 in Pune, The Lexicon Group has evolved into a premier educational and business leader, empowering individuals at every stage of life through diverse initiatives. The group continues to create opportunities for learning, growth and development with a strong focus on excellence.</p>
               <a href="about-lexicon.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Learn More About Lexicon MILE <span>↗</span></a>`,
    image: `<img src="images/06.Banner.png" alt="About Lexicon" class="mega-image">`
  },
  'lexicon-group': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">LEXICON GROUP</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Lexicon Group is a prominent Pune-based conglomerate founded in 2006, dedicated to fostering excellence across education, wellness, media, and innovative ventures. Headquartered in Pune, the group has evolved into a diverse ecosystem that impacts thousands of lives through quality-driven initiatives.</p>
               <a href="lexicon-group.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Explore The Lexicon Group Legacy <span>↗</span></a>`,
    image: `<img src="images/campus.jpg" alt="Lexicon Group" class="mega-image">`
  },
  'managing-trustees': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">MANAGING TRUSTEES</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Managing Trustees of Lexicon MILE bring together visionary leadership, industry experience and a strong commitment to quality education. Their collective vision focuses on innovation, excellence, values and holistic student development, while fostering industry relevance, lifelong learning and leadership for the future.</p>
               <a href="managing-trustees.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Meet Our Managing Trustees <span>↗</span></a>`,
    image: `<img src="images/classroom.jpg" alt="Managing Trustees" class="mega-image">`
  },
  'ceo-message': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">FROM THE VICE CHAIRMAN'S DESK</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Driving contemporary pedagogies, ethical leadership, and industry-synced management education. Vice Chairman Mr. Neeraj Sharma shares his directive on bridging the corporate employability gap and fostering global standards.</p>
               <a href="vice-chairmans-desk.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Read Vice Chairman's Full Address <span>↗</span></a>`,
    image: `<img src="images/trustees/neeraj-sharma.jpg" alt="Mr. Neeraj Sharma, Vice Chairman" class="mega-image">`
  },
  'governing-body': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">BOARD OF GOVERNORS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Board of Governors of Lexicon MILE brings together experienced academicians, industry professionals, technologists and education leaders from diverse fields. Their collective expertise supports academic excellence, industry relevance, strong governance and progressive learning.</p>
               <a href="board-of-governors.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Board of Governors <span>↗</span></a>`,
    image: `<img src="images/campus/lexicon-campus-building.png" alt="Board of Governors - Lexicon MILE Campus" class="mega-image">`
  },
  'ranking-accreditation': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">RANKING & ACCREDITATION</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE has been recognised through prestigious awards and accolades for excellence in management education, academic leadership and industry-oriented learning. These recognitions reflect achievements in placements, innovation, digital initiatives and leadership development.</p>
               <a href="awards-accolades.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Recognitions & Accreditations <span>↗</span></a>`,
    image: `<img src="images/campus/lexicon-campus-building.png" alt="Ranking and Accreditation" class="mega-image">`
  },

  // Programs Menu
  'pgdm': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">PGDM SPECIALIZATIONS</h4>
               <div class="mega-link mega-link-static" style="margin-bottom: 4px;">PGDM in Business Management</div>
               <div class="mega-link mega-link-static" style="margin-bottom: 4px;">PGDM in Marketing & Finance</div>
               <div class="mega-link mega-link-static">PGDM in Research and Business Analytics</div>`,
    image: `<img src="images/classroom.jpg" alt="PGDM" class="mega-image">`
  },
  'mba-global': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">MBA GLOBAL TRACKS</h4>
               <a href="global-mba.html#mba-usw" class="mega-link" style="margin-bottom: 4px;">MBA Global · USW, UK <span>↗</span></a>
               <a href="mba-in-business-analytics.html" class="mega-link" style="margin-bottom: 4px;">MBA Global · INTI, Malaysia <span>↗</span></a>
               <a href="sbs.html" class="mega-link">MBA Global · SBS Swiss Business School <span>↗</span></a>`,
    image: `<img src="images/global.jpg" alt="MBA Global" class="mega-image">`
  },
  'bba': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 8px;">BBA SPECIALIZATIONS</h4>
               <div class="mega-spec-item" style="color: #c1c8d3; font-size: 14px; margin-bottom: 5px; cursor: default; user-select: none;">Finance Management (FM)</div>
               <div class="mega-spec-item" style="color: #c1c8d3; font-size: 14px; margin-bottom: 5px; cursor: default; user-select: none;">Human Resource Management (HRM)</div>
               <div class="mega-spec-item" style="color: #c1c8d3; font-size: 14px; margin-bottom: 5px; cursor: default; user-select: none;">Marketing Management (MM)</div>
               <div class="mega-spec-item" style="color: #c1c8d3; font-size: 14px; margin-bottom: 5px; cursor: default; user-select: none;">Agri Business Management (ABM)</div>
               <div class="mega-spec-item" style="color: #c1c8d3; font-size: 14px; margin-bottom: 5px; cursor: default; user-select: none;">Services Management (SM)</div>`,
    image: `<img src="images/collaboration.jpg" alt="BBA" class="mega-image">`
  },
  'hmct': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">HMCT SPECIALIZATIONS</h4>
               <a href="b-sc-hospitality-studies.html" class="mega-link" style="margin-bottom: 4px;">B.Sc in Hospitality Studies <span>↗</span></a>
               <a href="diploma-in-hospitality-studies.html" class="mega-link">Diploma in Hospitality Studies <span>↗</span></a>`,
    image: `<img src="images/campus/lexicon-campus-building.png" alt="HMCT" class="mega-image">`
  },

  // Admissions Menu
  'admissions-process': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">ADMISSIONS PROCESS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE’s admission process guides candidates through eligibility, online application, document evaluation, personal interviews and final enrolment with complete transparency.</p>
               <a href="admission.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Complete Admissions Process & Eligibility <span>↗</span></a>`,
    image: `<img src="images/collaboration.jpg" alt="Admissions Process" class="mega-image">`
  },
  'fee-structure': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">PROGRAM FEES STRUCTURE</h4>
               <p style="color: #8cb4f5; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px 0;">Approved Academic Fees &middot; Transparent Installments</p>
               <div class="mega-fee-list" style="display: flex; flex-direction: column; gap: 7px; margin-bottom: 12px;">
                  <a href="fee-pgdm.html" class="mega-fee-btn" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.09); text-decoration: none; transition: all 0.22s ease;">
                    <span class="fee-title" style="color: #ffffff; font-weight: 600; font-size: 12.5px; letter-spacing: -0.01em; white-space: nowrap;">PGDM</span>
                    <span class="fee-arrow" style="color: #8cb4f5; font-size: 13px; font-weight: 700;">↗</span>
                  </a>
                  <a href="global-mba-usw-uk.html#fee-structure" class="mega-fee-btn" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.09); text-decoration: none; transition: all 0.22s ease;">
                    <span class="fee-title" style="color: #ffffff; font-weight: 600; font-size: 12.5px; letter-spacing: -0.01em; white-space: nowrap;">MBA Global</span>
                    <span class="fee-arrow" style="color: #8cb4f5; font-size: 13px; font-weight: 700;">↗</span>
                  </a>
                  <a href="fee-bba.html" class="mega-fee-btn" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.09); text-decoration: none; transition: all 0.22s ease;">
                    <span class="fee-title" style="color: #ffffff; font-weight: 600; font-size: 12.5px; letter-spacing: -0.01em; white-space: nowrap;">BBA</span>
                    <span class="fee-arrow" style="color: #8cb4f5; font-size: 13px; font-weight: 700;">↗</span>
                  </a>
                  <a href="b-sc-fee-structure.html" class="mega-fee-btn" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.09); text-decoration: none; transition: all 0.22s ease;">
                    <span class="fee-title" style="color: #ffffff; font-weight: 600; font-size: 12.5px; letter-spacing: -0.01em; white-space: nowrap;">B.Sc Hospitality</span>
                    <span class="fee-arrow" style="color: #8cb4f5; font-size: 13px; font-weight: 700;">↗</span>
                  </a>
                  <a href="diploma-in-hospitality-studies-fees.html" class="mega-fee-btn" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 14px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.09); text-decoration: none; transition: all 0.22s ease;">
                    <span class="fee-title" style="color: #ffffff; font-weight: 600; font-size: 12.5px; letter-spacing: -0.01em; white-space: nowrap;">Diploma Hospitality</span>
                    <span class="fee-arrow" style="color: #8cb4f5; font-size: 13px; font-weight: 700;">↗</span>
                  </a>
                </div>
               <p style="color: #b1bfd2; font-size: 12.5px; line-height: 1.5; margin: 0;">Comprehensive breakdown including statutory tuition, development fees, scheduled milestone installments, wire transfer account numbers, and 100% educational loan facilitation.</p>`,
    image: `<img src="images/campus.jpg" alt="Fees Structure" class="mega-image">`
  },
  'pgdm-fee-structure': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 5px;">PGDM FEE STRUCTURE</h4>
               <span style="display: inline-block; padding: 3px 8px; background: rgba(140, 180, 245, 0.15); color: #8cb4f5; font-size: 11px; font-weight: 700; border-radius: 4px; margin-bottom: 8px;">Batch 2027–29 · AICTE Approved</span>
               <p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">Total Programme Fee: ₹6,95,000 <span style="font-weight: 400; color: #94a3b8; font-size: 12px;">(+ applicable taxes)</span></p>
               <p style="color: #b1bfd2; font-size: 13px; line-height: 1.6; margin-bottom: 10px;">Payment is scheduled across 4 academic milestones: Registration (₹50k within 3 days), 1st Year Tuition (₹2.00L within 1 month), 2nd Year Tuition (₹2.00L by Mar 2028), and Development Fees (₹2.45L by Jun 2027).</p>
               <a href="fee-pgdm.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Full PGDM Fee Schedule & Bank A/C <span>↗</span></a>`,
    image: `<img src="images/classroom.jpg" alt="PGDM Fees" class="mega-image">`
  },
  'mba-global-fee-structure': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 5px;">MBA GLOBAL FEES</h4>
               <span style="display: inline-block; padding: 3px 8px; background: rgba(46, 196, 182, 0.15); color: #2ec4b6; font-size: 11px; font-weight: 700; border-radius: 4px; margin-bottom: 8px;">Batch 2026–28 · UK Degree</span>
               <p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">India: ₹7,50,000 + GST &middot; UK: £7,500 GBP</p>
               <p style="color: #b1bfd2; font-size: 13px; line-height: 1.6; margin-bottom: 10px;">India component covers 60 credits delivered at Lexicon MILE (Terms 1–2) with structured installments. Progression to Term 3 at University of South Wales, UK (£7,500 payable directly to USW).</p>
               <a href="global-mba-usw-uk.html#fee-structure" class="mega-link" style="color: #2ec4b6; font-weight: 600; font-size: 12px;">View MBA Global Breakdown & Installments <span>↗</span></a>`,
    image: `<img src="images/global.jpg" alt="MBA Global Fees" class="mega-image">`
  },
  'bba-fee-structure': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 5px;">BBA FEE STRUCTURE</h4>
               <span style="display: inline-block; padding: 3px 8px; background: rgba(240, 86, 36, 0.15); color: #f05624; font-size: 11px; font-weight: 700; border-radius: 4px; margin-bottom: 8px;">Batch 2026–29 · SPPU Pune · NEP 2020</span>
               <p style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">3-Year Grand Total: ₹5,70,000 <span style="font-weight: 400; color: #94a3b8; font-size: 12px;">(₹1,90,000 / year)</span></p>
               <p style="color: #b1bfd2; font-size: 13px; line-height: 1.6; margin-bottom: 10px;">Scheduled across 3 academic years: Enrolment (₹15,000), Part-A Tuition (₹20,000-₹35,000), Development Fee (₹3,500), and Part-B Industry Skills (₹1,51,500). Optional 4th Year Honours at ₹1,50,000.</p>
               <a href="fee-bba.html" class="mega-link" style="color: #f05624; font-weight: 600; font-size: 12px;">View Full BBA Fee Schedule & Bank A/C <span>↗</span></a>`,
    image: `<img src="images/collaboration.jpg" alt="BBA Fees" class="mega-image">`
  },
  'scholarships': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">SCHOLARSHIPS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE offers scholarships designed to recognise academic excellence and support deserving students by reducing the financial burden of management education. For the PGDM 2026–28 batch, scholarships are based on entrance examination performance, with awards up to ₹1,00,000 for CAT, ₹75,000 for CMAT and ₹50,000 for MAT. Scholarships are limited and subject to applicable conditions.</p>
               <a href="scholarship.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Full Scholarship Criteria & Terms <span>↗</span></a>`,
    image: `<img src="images/hero.jpg" alt="Scholarships" class="mega-image">`
  },
  'admission-guide': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">ADMISSION GUIDE</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Lexicon MILE admission guide provides a step-by-step pathway for applicants, from creating an account and verifying their email to completing the online application, submitting academic details, and scheduling selection rounds.</p>
               <a href="admission-guide.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Open Step-by-Step Admission Guide <span>↗</span></a>`,
    image: `<img src="images/classroom.jpg" alt="Admission Guide" class="mega-image">`
  },
  'education-loan': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">EDUCATION LOAN ASSISTANCE</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE supports students seeking financial assistance through partnerships with reputed banking institutions offering education loans at nominal interest rates. The admissions team provides end-to-end guidance with documentation and processing.</p>
               <a href="education-loan.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Explore Partner Banks & Loan Support <span>↗</span></a>`,
    image: `<img src="images/campus/lexicon-campus-building.png" alt="Education Loan" class="mega-image">`
  },

  // Faculty & Mentors
  'faculty-mentors': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">FACULTY & INDUSTRY MENTORS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE brings together accomplished faculty and experienced industry professionals who connect academic knowledge with real-world business challenges through its “A Mentor Every MILE” model.</p>
               <a href="faculty-mentors.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Meet Our Industry Mentors <span>↗</span></a>`,
    image: `<img src="images/collaboration.jpg" alt="Faculty & Mentors" class="mega-image">`
  },
  'faculty-directory': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">FACULTY DIRECTORY</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE’s faculty directory brings together accomplished academic scholars and experienced industry practitioners across management, analytics, marketing, business communication and specialised areas.</p>
               <a href="faculty.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Explore Full Faculty Profiles <span>↗</span></a>`,
    image: `<img src="images/global.jpg" alt="Faculty Directory" class="mega-image">`
  },

  // Placements
  'our-recruiters': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">OUR RECRUITERS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE has built a strong industry network of 200+ recruiters, providing students with career opportunities across leading national and multinational organisations for internships and placements.</p>
               <a href="our-recruiters.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View 200+ Recruiting Partners <span>↗</span></a>`,
    image: `<img src="images/campus/lexicon-campus-building.png" alt="Our Recruiters" class="mega-image">`
  },
  'placements-overview': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">PLACEMENTS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE’s placement ecosystem connects students with 200+ organisations across diverse sectors. For the 2024–26 PGDM batch, 500+ offers were received, with highest international package at ₹49 LPA and domestic at ₹18 LPA.</p>
               <a href="placement.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Placement Report & Statistics <span>↗</span></a>`,
    image: `<img src="images/hero.jpg" alt="Placements" class="mega-image">`
  },
  'recruitment-process': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">RECRUITMENT PROCESS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE has streamlined its recruitment process through technology, industry integration and outcome-driven education, connecting organisations efficiently with talent for dynamic corporate environments.</p>
               <a href="recruitment-process.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Explore Campus Recruitment Process <span>↗</span></a>`,
    image: `<img src="images/classroom.jpg" alt="Recruitment Process" class="mega-image">`
  },

  // More
  'seat-vacancy': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">SEAT VACANCY DETAILS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Seat Vacancy Details section provides updated information on available seats across programmes offered by Lexicon MILE, helping applicants make informed decisions and proceed with the admission process.</p>
               <a href="seat-vacancy-details.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Check Live Seat Availability <span>↗</span></a>`,
    image: `<img src="images/sliders/4.jpg-1.jpeg" alt="Seat Vacancy" class="mega-image">`
  },
  'campus': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">CAMPUS TOUR</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Lexicon MILE campus provides an interactive and collaborative learning environment with modern classrooms, digital learning facilities, dedicated team spaces, and Hyper Build – The Lexicon MILE AI Lab.</p>
               <a href="campus-tour.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Take Campus Tour <span>↗</span></a>`,
    image: `<img src="images/campus.jpg" alt="Campus Tour" class="mega-image">`
  },
  'blogs': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">BLOGS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">The Lexicon MILE blog brings together insights on management education, careers, business and industry trends across PGDM, MBA Global and BBA to help students make informed academic decisions.</p>
               <a href="lexicon-blog.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Read Latest Insights & Articles <span>↗</span></a>`,
    image: `<img src="images/global.jpg" alt="Blogs" class="mega-image">`
  },
  'events-webinars': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">EVENTS & WEBINARS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE creates a vibrant learning environment through leadership conclaves, industry summits, TEDx events, masterclasses, and industrial visits connecting students with top business leaders.</p>
               <a href="events-webinars.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">View Upcoming Conclaves & Summits <span>↗</span></a>`,
    image: `<img src="images/collaboration.jpg" alt="Events" class="mega-image">`
  },
  'partnerships': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">PARTNERSHIPS</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Lexicon MILE collaborates with leading academic institutions, industry organisations and professional networks to support research, student learning opportunities, curriculum development and live projects.</p>
               <a href="partnerships.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Explore Academic & Industry Tie-ups <span>↗</span></a>`,
    image: `<img src="images/hero.jpg" alt="Partnerships" class="mega-image">`
  },
  'alumni': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">ALUMNI</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Our strong global alumni network comprises accomplished professionals leading top corporations worldwide who actively mentor students and foster lifelong career connections.</p>
               <a href="alumni.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Connect with Global Alumni Network <span>↗</span></a>`,
    image: `<img src="images/alumni/1.png" alt="Alumni" class="mega-image">`
  },
  'virtual-tour': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">VIRTUAL TOUR</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Experience the Lexicon MILE campus through an immersive 360-degree virtual tour. Explore modern classrooms, seminar halls, Hyper Build AI Lab, library, and sports amenities from anywhere in the world.</p>
               <a href="virtual-tour.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Launch 360° Virtual Campus Experience <span>↗</span></a>`,
    image: `<img src="images/campus-tour/hero-banner.jpeg" alt="Virtual Tour" class="mega-image">`
  },
  'contact': {
    overview: `<h4 class="mega-heading" style="margin-bottom: 6px;">CONTACT US</h4>
               <p style="color: #b1bfd2; font-size: 13.5px; line-height: 1.55; margin: 0 0 10px 0;">Connect with Lexicon MILE for admission, placement and general enquiries through dedicated support channels. The campus is located at MILE Tower, GAT No. 726, Pune-Nagar Road, Wagholi.</p>
               <a href="contact.html" class="mega-link" style="color: #8cb4f5; font-weight: 600; font-size: 12px;">Get In Touch & Campus Location <span>↗</span></a>`,
    image: `<img src="images/campus.jpg" alt="Contact Us" class="mega-image">`
  }
};

function updateMegaMenuOverview(link) {
  const key = link.getAttribute('data-hover');
  if (key && megaMenuData[key]) {
    const megaMenu = link.closest('.mega-menu');
    if (!megaMenu) return;
    const overviewContainer = megaMenu.querySelector('.mega-col-sub');
    const imageContainer = megaMenu.querySelector('.mega-col-image');
    const prefix = typeof getComponentPrefix === 'function' ? getComponentPrefix() : '';
    if (overviewContainer) {
      let overviewHtml = megaMenuData[key].overview;
      if (prefix) {
        overviewHtml = overviewHtml.replace(/href="([^"\/:]+\.html(?:#[^"]*)?)"/g, `href="${prefix}$1"`);
      }
      overviewContainer.innerHTML = overviewHtml;
    }
    if (imageContainer) {
      let imageHtml = megaMenuData[key].image;
      if (prefix) {
        imageHtml = imageHtml.replace(/src="(assets|images)\//g, `src="${prefix}$1/`);
      }
      imageContainer.innerHTML = imageHtml;
    }
  }
}

// Delegated hover on .mega-link-large and [data-hover] works regardless of when header HTML is injected
document.addEventListener('mouseover', function(e) {
  const link = e.target.closest('.mega-link-large, .mega-link-sub, [data-hover]');
  if (link) {
    updateMegaMenuOverview(link);
  }
});

// Remove closing state when mouse leaves submenu nav item
document.addEventListener('mouseout', function(e) {
  const navItem = e.target.closest('.nav-item.has-submenu');
  if (navItem && (!e.relatedTarget || !navItem.contains(e.relatedTarget))) {
    navItem.classList.remove('menu-closed');
  }
});

// Non-clickable category items update the overview panel on click/tap
document.addEventListener('click', function(e) {
  const staticItem = e.target.closest('.mega-link-static[data-hover]');
  if (staticItem) {
    updateMegaMenuOverview(staticItem);
  }
});

// Handle clicking links inside the mega menu (smooth routing & clean menu dismissal)
document.addEventListener('click', function(e) {
  const link = e.target.closest('.mega-menu a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // External / protocols pass through
  if (href.startsWith('http') && !href.includes(window.location.host)) return;
  if (href.startsWith('tel:') || href.startsWith('mailto:')) return;

  const navItem = link.closest('.nav-item.has-submenu');
  if (navItem) {
    navItem.classList.add('menu-closed');
    setTimeout(() => navItem.classList.remove('menu-closed'), 600);
  }

  // Same page anchor handling
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  let targetPath = '';
  let targetHash = '';
  try {
    const url = new URL(link.href, window.location.origin);
    targetPath = url.pathname.split('/').pop() || 'index.html';
    targetHash = url.hash;
  } catch (err) {}

  if (targetPath === currentPath && targetHash) {
    const targetEl = document.querySelector(targetHash);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, targetHash);
    }
  } else if (targetPath === currentPath && !targetHash) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// This is a frontend concept. No enquiries or personal data are sent to a server.
const programs = {
  pgdm: { title: 'PGDM', category: 'POSTGRADUATE / MANAGEMENT', image: 'classroom', description: 'An AI-integrated, industry-focused management program designed to develop future-ready business leaders.', highlights: ['AI-integrated business learning', 'Industry immersion and live projects', 'Leadership development', 'Business strategy and practical decision-making'] },
  mba: { title: 'MBA Global', category: 'POSTGRADUATE / GLOBAL BUSINESS', image: 'global', description: 'Experience globally focused MBA programmes across the UK, Malaysia, and UAE, with dual-campus learning and international exposure. Choose from International Business, Business Analytics & AI, or Family Business Management and build global leadership skills. Gain practical experience, industry exposure, and a truly global MBA experience.', highlights: ['Global exposure and perspectives', 'International business', 'Strategic thinking', 'Cross-cultural learning and leadership'] },
  bba: { title: 'BBA', category: 'UNDERGRADUATE / BUSINESS', image: 'collaboration', description: 'A future-ready BBA at Lexicon MILE combining business, AI, analytics, and hands-on industry exposure. Learn through real-world projects and AI-powered tools to build practical, analytical, and professional skills. Graduate as a confident Day Zero Professional, ready for an AI-driven business world.', highlights: ['Business foundations', 'Innovation and practical learning', 'Entrepreneurial thinking', 'Leadership development'] },
  ihm: { title: 'IHM / HMCT', category: 'HOSPITALITY / MANAGEMENT', image: 'hospitality', description: 'Build a career in hospitality, tourism, and hotel management through academic excellence and hands-on industry exposure. Develop global perspectives, practical skills, and a passion for service excellence.', highlights: ['Hospitality and service excellence', 'Tourism and management', 'Practical industry training', 'Professional development'] }
};

const awards = [
  { title: 'Top 100 Institutes in India for Digital Distinction', subtitle: 'Technology Conformance to NEP – ASSOCHAM 2022.' },
  { title: 'Best B-School in Leadership Excellence', subtitle: 'BW Education, Future of Management Education Awards 2023.' },
  { title: 'Best Private Management Institute in India for Placements', subtitle: 'CEGR 2022' },
  { title: 'Dewang Mehta National Education Award', subtitle: 'Best Emerging B-School' },
  { title: 'BBC Knowledge Education Leadership Award', subtitle: 'Best Academic & Industry Interface' },
  { title: "AsiaOne World's Greatest Brand Award", subtitle: 'Singapore' },
  { title: 'Lead Lab Centre of Excellence Award', subtitle: 'For nurturing youth leadership' },
  { title: 'Best Management Institute for Placements', subtitle: 'Integrated Chambers of Commerce and Industry, 2020' }
];
const awardsGrid = document.getElementById('awards-grid');
if (awardsGrid) awardsGrid.innerHTML = awards.map((award, index) => `<article class="award-item reveal"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#award"/></svg><span class="award-index">${String(index + 1).padStart(2, '0')}</span><h3>${award.title}</h3><p class="award-subtitle">${award.subtitle}</p></article>`).join('');

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
const lifeTrackEl = document.getElementById('life-track');
if (lifeTrackEl) lifeTrackEl.innerHTML = activities.map((activity, index) => `<article class="life-card"><div class="life-image"><img src="images/${activity.image}.jpg" alt="Illustrative ${activity.title.toLowerCase()} experience" loading="lazy" width="700" height="470"><span>${String(index + 1).padStart(2, '0')}</span></div><h3>${activity.title}</h3><p>${activity.description}</p></article>`).join('');

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
  if (key === 'pgdm') {
    window.location.href = 'pgdm.html#pgdm-bm';
    return;
  }
  if (key === 'bba') {
    window.location.href = 'bba.html';
    return;
  }
  if (key === 'mba') {
    const card = document.getElementById('card-mba');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.toggle('show-courses');
      return;
    }
  }
  if (key === 'ihm' || key === 'hmct') {
    const card = document.getElementById('card-hmct');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.toggle('show-courses');
      return;
    }
  }
  const program = programs[key];
  if (!program) return;
  openDialog(`<p class="eyebrow">${program.category}</p><h2 id="dialog-title">${program.title}<span class="period">.</span></h2><img class="dialog-hero" src="images/${program.image}.jpg" alt="Illustrative ${program.title} learning environment"><p>${program.description}</p><ul>${program.highlights.map(item => `<li>${item}</li>`).join('')}</ul><p class="dialog-notice">Detailed curriculum, duration, accreditation, eligibility and fees will be added once confirmed by Lexicon MILE.</p><button class="button" data-action="apply" data-selected="${key}">I'm interested <span>↗</span></button>`);
}
function applicationDialog(selected) {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('lexicon-program-interest')); } catch (_) { /* Storage may be unavailable. */ }
  const choice = programs[selected] ? selected : (saved && programs[saved.program] ? saved.program : 'pgdm');
  openDialog(`<p class="eyebrow">ADMISSIONS / 2026–27</p><h2 id="dialog-title">Your next chapter<br>starts here<span class="period">.</span></h2><p>Choose the path that matches your ambition. Save your program preference and explore what comes next.</p><form class="interest-form" id="interest-form"><label for="program-interest">Which program are you interested in?</label><select id="program-interest" name="program">${Object.entries(programs).map(([key, program]) => `<option value="${key}" ${key === choice ? 'selected' : ''}>${program.title}</option>`).join('')}</select><button type="submit" class="button">Save My Interest <span>↗</span></button><div id="interest-status" role="status"></div></form><p class="dialog-notice">This is an admissions preview, not an application submission. Your program preference stays on this device only. Official application links and admissions contact details will be added before launch.</p>`);
}
const information = {
  'admission-process': { eyebrow: 'ADMISSIONS / YOUR NEXT STEP', title: 'Begin with ambition.', body: '<p>Explore our programs, identify the learning experience that fits your goals, and prepare for the next stage of your journey.</p><ul><li>Explore PGDM, MBA Global, BBA and IHM / HMCT.</li><li>Review the official eligibility criteria when published.</li><li>Prepare your academic records and supporting documents.</li><li>Complete the official application when its link is available.</li></ul><p class="dialog-notice">Institution-specific selection stages, deadlines and application instructions are awaiting confirmation.</p>' },
  eligibility: { eyebrow: 'ADMISSIONS / ELIGIBILITY', title: 'Find your fit.', body: '<p>Eligibility requirements vary by program. Academic qualifications, entrance-test requirements and selection criteria will be published following institutional confirmation.</p><p>Explore each program to understand its focus. No unverified eligibility criteria are presented in this concept.</p>' },
  fees: { eyebrow: 'ADMISSIONS / PROGRAM FEES', title: 'Invest in what’s next.', body: '<p>A complete, program-specific fee schedule will be available before applications go live, including the payment schedule and any additional charges.</p><p class="dialog-notice">Fees have not been supplied for this design concept. Please rely only on the official fee structure once published.</p>' },
  scholarships: { eyebrow: 'ADMISSIONS / SCHOLARSHIPS', title: 'Make ambition possible.', body: '<p>Scholarship availability, eligibility, amounts and application timelines will be shared once the official policy is confirmed.</p><p class="dialog-notice">This concept does not promise scholarship funding or financial assistance.</p>' },
  placements: { eyebrow: 'CAREERS / BUILT FOR THE WORLD OF WORK', title: 'Your potential. Real impact.', body: '<p>Industry exposure, practical learning and corporate relationships connect education to the world of work.</p><ul><li>500+ students placed</li><li>200+ recruiters / companies</li><li>49 LPA highest package — context to be confirmed</li><li>18 LPA highest package — context to be confirmed</li></ul><p class="dialog-notice">These figures were supplied for the homepage concept. Cohorts, reporting periods, program applicability and salary components have not been provided. They are not a placement guarantee. A verified placement report is required before publication.</p>' },
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
  const toggleBtn = event.target.closest('.program-course-toggle, [data-toggle-card]');
  if (toggleBtn) {
    event.preventDefault();
    const cardId = toggleBtn.dataset.toggleCard;
    const card = document.getElementById(cardId);
    if (card) {
      const isExpanded = card.classList.toggle('show-courses');
      card.querySelectorAll('.program-course-toggle').forEach(b => {
        b.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      });
      if (isExpanded) {
        document.querySelectorAll('.program-card.show-courses').forEach(other => {
          if (other !== card) {
            other.classList.remove('show-courses');
            other.querySelectorAll('.program-course-toggle').forEach(b => b.setAttribute('aria-expanded', 'false'));
          }
        });
      }
    }
    return;
  }
  const campusCard = event.target.closest('.campus-photo');
  if (campusCard && event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    if (!event.target.closest('a')) {
      window.location.href = 'campus-tour.html';
      return;
    }
  }
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
  if (action === 'apply') {
    window.open('https://admissions.lexiconmile.com/', '_blank');
    return;
  }
  if (action === 'whatsapp') {
    window.open('https://api.whatsapp.com/send/?phone=%2B919967427278&text&type=phone_number&app_absent=0', '_blank');
    return;
  }
  if (action === 'call') {
    window.location.href = 'tel:+919967427278';
    return;
  }
  if (action === 'contact') {
    window.location.href = 'contact.html';
    return;
  }
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
  { quote: 'Lexicon MILE transformed my perspective on management. The faculty are industry veterans who bring real-world insights into every session.', name: 'Devyani Pardhi', program: 'PGDM Batch 2023-25', image: '1', note: '' },
  { quote: 'The international exposure through the USW partnership was invaluable. I got to experience global business education firsthand.', name: 'Ajinkya', program: 'Lexicon MILE Alumni', image: '2', note: '' },
  { quote: 'The placement mentorship program was exceptional. Right from building your resume to mock interviews, every step was supported professionally.', name: 'Palak Keshari', program: 'Lexicon MILE Alumni', image: '3', note: '' }
];
let testimonialIndex = 0;
function setTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  const testimonial = testimonials[testimonialIndex];
  document.getElementById('testimonial-quote').textContent = testimonial.quote;
  document.getElementById('testimonial-name').textContent = testimonial.name;
  document.getElementById('testimonial-program').textContent = testimonial.program;
  document.getElementById('testimonial-note').textContent = testimonial.note;
  document.getElementById('testimonial-photo').src = `images/testimonial/${testimonial.image}.jpeg`;
  document.getElementById('testimonial-index').innerHTML = `${String(testimonialIndex + 1).padStart(2, '0')} <span>/ 03</span>`;
}
const tPrev = document.getElementById('testimonial-prev');
const tNext = document.getElementById('testimonial-next');
if (tPrev) tPrev.addEventListener('click', () => setTestimonial(-1));
if (tNext) tNext.addEventListener('click', () => setTestimonial(1));

const lifeTrack = document.getElementById('life-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function scrollActivities(direction) {
  const card = lifeTrack.querySelector('.life-card');
  const gap = parseFloat(getComputedStyle(lifeTrack).gap) || 22;
  lifeTrack.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
const lPrev = document.getElementById('life-prev');
const lNext = document.getElementById('life-next');
if (lPrev) lPrev.addEventListener('click', () => scrollActivities(-1));
if (lNext) lNext.addEventListener('click', () => scrollActivities(1));
function updateTrack() {
  const maxScroll = lifeTrack.scrollWidth - lifeTrack.clientWidth;
  const ratio = lifeTrack.clientWidth / lifeTrack.scrollWidth;
  const indicator = document.getElementById('life-progress');
  indicator.style.width = `${ratio * 100}%`;
  indicator.style.transform = `translateX(${(lifeTrack.scrollLeft / Math.max(1, maxScroll)) * (1 / ratio - 1) * 100}%)`;
  document.getElementById('life-prev').disabled = lifeTrack.scrollLeft < 2;
  document.getElementById('life-next').disabled = lifeTrack.scrollLeft >= maxScroll - 2;
}
if (lifeTrack) {
  lifeTrack.addEventListener('scroll', updateTrack, { passive: true });
  window.addEventListener('resize', updateTrack);
  updateTrack();
}

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

