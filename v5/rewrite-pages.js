const fs = require('fs');

const createPage = (title, bodyContent) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#05070C">
  <title>${title} | Lexicon MILE</title>
  <link rel="icon" href="images/favicon.png" type="image/png">
  <link rel="preload" href="assets/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <div id="header"></div>
  <main id="main">
    ${bodyContent}
  </main>
  <div id="footer"></div>
  <script src="js/components.js"></script>
</body>
</html>`;

const aboutLexicon = createPage('About Us', `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">ABOUT US</p>
            <h2>Lexicon MILE<span class="period">.</span></h2>
          </div>
          <p>A legacy of over 20 years, shaping the future of education and transforming lives through continuous learning, innovation, and unwavering core values.</p>
        </div>
        
        <div class="campus-grid" style="margin-bottom: 80px;">
          <figure class="campus-photo campus-main reveal">
            <img src="images/lexicon-building.jpg" alt="Lexicon Campus" loading="lazy">
            <figcaption>
              <span>01 / OUR ROOTS</span>
              <h3>About the Lexicon Family.</h3>
              <p style="margin-top: 10px; font-size: 14px; color: #a3aec1;">Founded in 2006 in Pune, The Lexicon Group has evolved into a premier educational and business leader.</p>
            </figcaption>
          </figure>
          <figure class="campus-photo reveal">
            <img src="images/lexicon-students.jpg" alt="Lexicon Students" loading="lazy">
            <figcaption>
              <span>02 / LEXICON MILE</span>
              <h3>Transforming Business Education.</h3>
              <p style="margin-top: 10px; font-size: 14px; color: #a3aec1;">A two-year, full-time PGDM program with a bold emphasis on entrepreneurship.</p>
            </figcaption>
          </figure>
        </div>

        <div class="section-heading centered reveal" style="margin-top: 100px;">
            <p class="eyebrow">CORE VALUES</p>
            <h2>Vision & Mission<span class="period">.</span></h2>
        </div>
        <div class="legacy-grid" style="margin-top: 40px;">
          <div class="reveal">
            <strong><span style="font-size: 24px;">Vision</span></strong>
            <p style="margin-top: 15px;">To be an educational institution of choice which promotes human well-being through continuous learning.</p>
          </div>
          <div class="reveal">
            <strong><span style="font-size: 24px;">Mission</span></strong>
            <p style="margin-top: 15px;">To foster a dynamic environment of academic excellence, equipping individuals with the skills and mindset to thrive globally.</p>
          </div>
          <div class="reveal">
            <strong><span style="font-size: 24px;">Values</span></strong>
            <p style="margin-top: 15px;">Integrity, continuous innovation, empathy, and a steadfast commitment to delivering quality education.</p>
          </div>
        </div>

      </div>
    </section>
`);

const lexiconGroup = createPage('Lexicon Group', `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">OUR FOUNDATION</p>
            <h2>The Lexicon Group<span class="period">.</span></h2>
          </div>
          <p>The Lexicon Group of Institutes is an education hub, founded in 2006, expanding across multiple domains including Media, Law, and Wellness.</p>
        </div>

        <div class="cta-main-layout reveal" style="margin-top: 40px;">
          <div class="cta-text-content">
            <p class="eyebrow"><span class="status-dot"></span>SINCE 2006</p>
            <h2>Empowering<br><span>Generations.</span></h2>
            <p>From pre-schools to postgraduate institutes, Lexicon has established itself as one of the most trusted names in education.</p>
            <div class="cta-buttons" style="margin-top: 30px;">
              <a class="button button-outline" href="about-lexicon.html">About Lexicon MILE <span>↗</span></a>
            </div>
          </div>
          <div class="cta-image-wrapper">
            <img src="images/lexicon-group.jpg" alt="Lexicon Group Overview" loading="lazy" onerror="this.src='images/hospitality.jpg'">
            <span class="cta-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
        
        <div class="section-heading reveal" style="margin-top: 120px;">
          <div>
            <p class="eyebrow">DIVERSITY IN EDUCATION</p>
            <h2>Our Institutes<span class="period">.</span></h2>
          </div>
        </div>
        
        <div class="program-grid">
          <article class="program-card reveal">
            <div class="program-image">
                <img src="images/schools.jpg" alt="Lexicon Schools" loading="lazy" onerror="this.src='images/courses/BBA%20image.png'">
                <span class="program-category">EDUCATION</span>
            </div>
            <div class="program-body">
              <div class="program-title-row">
                <h3>The Lexicon Schools</h3>
              </div>
              <p>State-of-the-art CBSE schools offering holistic education from pre-primary to higher secondary levels.</p>
            </div>
          </article>
          <article class="program-card reveal">
            <div class="program-image">
                <img src="images/kids.jpg" alt="Lexicon Kids" loading="lazy" onerror="this.src='images/courses/BBA%20image.png'">
                <span class="program-category">PRE-SCHOOL</span>
            </div>
            <div class="program-body">
              <div class="program-title-row">
                <h3>Lexicon Kids</h3>
              </div>
              <p>Nurturing young minds with a foundation built on care, creativity, and cognitive development.</p>
            </div>
          </article>
          <article class="program-card reveal">
            <div class="program-image">
                <img src="images/management.jpg" alt="Lexicon MILE" loading="lazy" onerror="this.src='images/courses/PGDM%20image.png'">
                <span class="program-category">HIGHER ED</span>
            </div>
            <div class="program-body">
              <div class="program-title-row">
                <h3>Lexicon MILE</h3>
              </div>
              <p>Premier management institute shaping future leaders through PGDM, Global MBA, and BBA programs.</p>
            </div>
          </article>
          <article class="program-card reveal">
            <div class="program-image">
                <img src="images/wellness.jpg" alt="Lexicon Rainbow" loading="lazy" onerror="this.src='images/courses/HMCT%20IHM%20image.png'">
                <span class="program-category">SPECIAL NEEDS</span>
            </div>
            <div class="program-body">
              <div class="program-title-row">
                <h3>Lexicon Rainbow</h3>
              </div>
              <p>A dedicated center for children with special needs, ensuring inclusive education for everyone.</p>
            </div>
          </article>
        </div>

      </div>
    </section>
`);

const trustees = createPage('Managing Trustees', `
    <section class="section faculty-section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">LEADERSHIP</p>
            <h2>Board of Managing Trustees<span class="period">.</span></h2>
          </div>
          <p>Our leaders are mentors first. The leadership philosophy emphasizes approachability, mentorship, and vision-driven education.</p>
        </div>
        
        <div class="faculty-grid">
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/sd-sharma.jpg" alt="Mr. S.D. Sharma" loading="lazy" onerror="this.src='images/leaders/kiran-bedi.jpg'">
              <div class="leader-insight">Guiding the vision of<br>The Lexicon Group.</div>
            </div>
            <h3>Mr. S.D. Sharma</h3>
            <p>CHAIRMAN, THE LEXICON GROUP</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/pankaj-sharma.jpg" alt="Mr. Pankaj Sharma" loading="lazy" onerror="this.src='images/leaders/suresh.jpg'">
              <div class="leader-insight">Transforming education<br>for the next generation.</div>
            </div>
            <h3>Mr. Pankaj Sharma</h3>
            <p>PRESIDENT, THE LEXICON GROUP</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/neeraj-sharma.jpg" alt="Mr. Neeraj Sharma" loading="lazy" onerror="this.src='images/leaders/anand.jpeg'">
              <div class="leader-insight">Driving innovation and<br>excellence across domains.</div>
            </div>
            <h3>Mr. Neeraj Sharma</h3>
            <p>VICE CHAIRMAN, THE LEXICON GROUP</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/monisha-sharma.jpg" alt="Mrs. Monisha Sharma" loading="lazy" onerror="this.src='images/leaders/falguni-nayar.jpeg'">
              <div class="leader-insight">Nurturing holistic development<br>in schools.</div>
            </div>
            <h3>Mrs. Monisha Sharma</h3>
            <p>TRUSTEE, DIRECTOR - THE LEXICON SCHOOLS</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/deepti-sharma.jpg" alt="Mrs. Deepti Sharma" loading="lazy" onerror="this.src='images/leaders/falguni-nayar.jpeg'">
              <div class="leader-insight">Fostering early childhood<br>education.</div>
            </div>
            <h3>Mrs. Deepti Sharma</h3>
            <p>TRUSTEE, DIRECTOR - LEXICON KIDS</p>
          </article>
        </div>
      </div>
    </section>
`);

const boardOfGov = createPage('Board of Governors', `
    <section class="section faculty-section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">GOVERNANCE</p>
            <h2>Board of Governors<span class="period">.</span></h2>
          </div>
          <p>Lexicon MILE is guided by an eminent Board of Governors, comprising distinguished leaders from academia, industry, and the corporate world.</p>
        </div>
        
        <div class="faculty-grid">
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/leaders/kiran-bedi.jpg" alt="Dr. Kiran Bedi" loading="lazy">
              <div class="leader-insight">The perspective of industry.<br>The power of experience.</div>
            </div>
            <h3>Dr. Kiran Bedi</h3>
            <p>LEADERSHIP MENTOR</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/leaders/falguni-nayar.jpeg" alt="Falguni Nayar" loading="lazy">
              <div class="leader-insight">Turning business knowledge<br>into leadership potential.</div>
            </div>
            <h3>Falguni Nayar</h3>
            <p>ENTREPRENEURSHIP MENTOR</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/leaders/anand.jpeg" alt="Anand Chandrasekaran" loading="lazy">
              <div class="leader-insight">Real-world context.<br>New ways of thinking.</div>
            </div>
            <h3>Anand Chandrasekaran</h3>
            <p>INNOVATION MENTOR</p>
          </article>
          
          <article class="leader-card reveal" tabindex="0">
            <div class="portrait">
              <img src="images/leaders/suresh.jpg" alt="Suresh Narayanan" loading="lazy">
              <div class="leader-insight">Where technology meets<br>the future of business.</div>
            </div>
            <h3>Suresh Narayanan</h3>
            <p>CORPORATE MENTOR</p>
          </article>
        </div>
      </div>
    </section>
`);

const ceosMessage = createPage("CEO's Message", `
    <section class="section" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">FROM THE DESK OF</p>
            <h2>Mr. Nasir Shaikh<span class="period">.</span></h2>
          </div>
          <p>Group CEO, The Lexicon Group of Institutes, MultiFit, EduCrack & EasyRecruit+</p>
        </div>
        
        <div class="cta-main-layout reveal" style="margin-top: 40px; align-items: flex-start;">
          <div class="cta-image-wrapper" style="position: sticky; top: 120px;">
            <img src="images/nasir-shaikh.jpg" alt="Mr. Nasir Shaikh" loading="lazy" onerror="this.src='images/leaders/suresh.jpg'" style="border-radius: 12px;">
          </div>
          <div class="cta-text-content" style="padding-left: 40px;">
            <h3 style="font-size: 28px; margin-bottom: 24px; color: #fff;">A warm welcome to Lexicon Management Institute of Leadership & Excellence!</h3>
            
            <p style="color: #c1c8d3; margin-bottom: 20px; font-size: 17px; line-height: 1.8;">"Education is not just about academics; it is about holistic development, critical thinking, and preparing oneself to face the challenges of the future."</p>
            
            <p style="color: #c1c8d3; margin-bottom: 20px; font-size: 16px; line-height: 1.7;">At Lexicon MILE, we believe in nurturing talent and molding individuals into future-ready leaders. Our comprehensive curriculum, combined with real-world exposure and a focus on practical learning, ensures that our students are well-equipped to excel in their chosen fields.</p>
            
            <p style="color: #c1c8d3; margin-bottom: 20px; font-size: 16px; line-height: 1.7;">We are committed to providing an environment that fosters innovation, creativity, and a spirit of entrepreneurship. Our distinguished faculty, state-of-the-art infrastructure, and strong industry connections play a crucial role in shaping the careers of our students.</p>
            
            <p style="color: #c1c8d3; margin-bottom: 40px; font-size: 16px; line-height: 1.7;">As you embark on this exciting journey with us, I encourage you to make the most of the opportunities available, engage actively in all aspects of campus life, and strive for excellence in everything you do. Together, let us build a brighter future.</p>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
                <p style="font-family: 'Times New Roman', serif; font-size: 32px; font-style: italic; color: #fff;">Nasir Shaikh</p>
                <p style="color: #67aaff; font-size: 14px; font-weight: 600; margin-top: 5px; letter-spacing: 0.05em;">GROUP CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
`);

const awards = createPage('Ranking & Accreditation', `
    <section class="section awards-section" id="recognition" style="padding-top: 120px;">
      <div class="container">
        <div class="section-heading reveal">
          <div>
            <p class="eyebrow">EXCELLENCE, RECOGNIZED.</p>
            <h2>Ranking & Accreditation<span class="period">.</span></h2>
          </div>
          <p>Lexicon MILE continues to be recognized for excellence<br class="desktop-break"> in education, leadership and industry engagement.</p>
        </div>
        
        <!-- We use the same awards-grid that index.html uses, so scripts/main.js will populate it -->
        <div class="awards-grid" id="awards-grid"></div>
        
        <!-- Fallback static content just in case the JS only runs on homepage -->
        <div class="legacy-grid reveal" style="margin-top: 80px; padding-top: 80px; border-top: 1px solid rgba(255,255,255,0.1);">
          <div>
            <strong><span style="font-size: 32px;">AICTE</span></strong>
            <p style="margin-top: 15px;">Approved Programs</p>
          </div>
          <div>
            <strong><span style="font-size: 32px;">Top 20</span></strong>
            <p style="margin-top: 15px;">B-Schools in India (Times of India)</p>
          </div>
          <div>
            <strong><span style="font-size: 32px;">Best</span></strong>
            <p style="margin-top: 15px;">Management Institute for Placements</p>
          </div>
          <div>
            <strong><span style="font-size: 32px;">Award</span></strong>
            <p style="margin-top: 15px;">Excellence in Education (BBC Knowledge)</p>
          </div>
        </div>

      </div>
    </section>
`);

fs.writeFileSync('about-lexicon.html', aboutLexicon);
fs.writeFileSync('lexicon-group.html', lexiconGroup);
fs.writeFileSync('managing-trustees.html', trustees);
fs.writeFileSync('board-of-governors.html', boardOfGov);
fs.writeFileSync('ceos-message.html', ceosMessage);
fs.writeFileSync('awards-accolades.html', awards);

console.log('Successfully generated all 6 pages with standard CSS styles!');

