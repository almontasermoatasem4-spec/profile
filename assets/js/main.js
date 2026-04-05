/**
* Template Name: SnapFolio
* Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
* Updated: Jul 21 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  // headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Light/Dark Theme Toggle
   */
  const themeToggleBottons = document.querySelectorAll('.theme-toggle-btn');
  const themeToggleIcons = document.querySelectorAll('.theme-toggle-btn i');

  // Check for saved user preference, if any, on load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
      themeToggleIcons.forEach(icon => {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      });
    }
  }

  function switchTheme(e) {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggleIcons.forEach(icon => {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
      });
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleIcons.forEach(icon => {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      });
    }
  }

  themeToggleBottons.forEach(btn => {
    btn.addEventListener('click', switchTheme, false);
  });

  /**
   * Language Support
   */
  const translations = {
    // Navigation
    "nav_home": { "en": "Home", "ar": "الرئيسية" },
    "nav_about": { "en": "About", "ar": "من أنا" },
    "nav_resume": { "en": "Resume", "ar": "السيرة الذاتية" },
    "nav_portfolio": { "en": "Portfolio", "ar": "أعمالي" },
    "nav_services": { "en": "Services", "ar": "خدماتي" },
    "nav_contact": { "en": "Contact", "ar": "تواصل معي" },

    // Hero
    "hero_title": { "en": "Mr<span class=\"accent-text\">Web</span>", "ar": "مستر <span class=\"accent-text\">ويب</span>" },
    "hero_name": { "en": "Moatasem Almontaser", "ar": "معتصم المنتصر" },
    "hero_role_intro": { "en": "I'm a", "ar": "أنا" },
    "hero_description": { "en": "Passionate about creating exceptional digital experiences that blend innovative design with functional development. Let's bring your vision to life.", "ar": "شغوف بإنشاء تجارب رقمية استثنائية تمزج بين التصميم المبتكر والتطوير الوظيفي. دعنا نحول رؤيتك إلى واقع." },
    "btn_view_work": { "en": "View My Work", "ar": "شاهد أعمالي" },
    "btn_get_touch": { "en": "Get In Touch", "ar": "تواصل معي" },

    // About
    "about_badge": { "en": "Get to Know Me", "ar": "تعرف علي" },
    "about_title": { "en": "Passionate About Creating Digital Experiences", "ar": "شغوف بخلق تجارب رقمية مميزة" },
    "about_desc_1": { "en": "I’m a passionate web developer and designer focused on building modern, high-quality digital experiences. I enjoy turning ideas into fast, clean, and user-friendly websites using the latest technologies. As a dedicated student, I continuously work on improving my programming skills and expanding my knowledge to grow into a strong and professional developer in the tech world.", "ar": "أنا مطور ومصمم ويب شغوف أركز على بناء تجارب رقمية حديثة وعالية الجودة. أستمتع بتحويل الأفكار إلى مواقع ويب سريعة ونظيفة وسهلة الاستخدام باستخدام أحدث التقنيات. وبصفتي طالباً متفانياً، أعمل باستمرار على تحسين مهاراتي البرمجية وتوسيع معرفتي للنمو لأصبح مطوراً قوياً ومحترفاً في عالم التكنولوجيا." },
    "about_desc_2": { "en": "", "ar": "" },
    "stats_projects": { "en": "Projects Completed", "ar": "مشاريع مكتملة" },
    "stats_exp_years": { "en": "Years Experience", "ar": "سنوات الخبرة" },
    "stats_client_sat": { "en": "Client Satisfaction", "ar": "رضا العملاء" },

    // About Details
    "detail_spec_label": { "en": "Specialization", "ar": "التخصص" },
    "detail_spec_val": { "en": "UI/UX Design & Development", "ar": "تطوير وتصميم واجهات" },
    "detail_exp_label": { "en": "Experience Level", "ar": "المستوى" },
    "detail_exp_val": { "en": "Senior Professional", "ar": "محترف أول" },
    "detail_edu_label": { "en": "Education", "ar": "التعليم" },
    "detail_edu_val": { "en": "Computer Science, MIT", "ar": "علوم الحاسوب" },
    "detail_lang_label": { "en": "Languages", "ar": "اللغات" },
    "detail_lang_val": { "en": "English, Spanish, French", "ar": "العربية، الإنجليزية" },
    "btn_download_cv": { "en": "Download Resume", "ar": "تحميل السيرة الذاتية" },
    "btn_lets_talk": { "en": "Let's Talk", "ar": "لنتحدث" },

    // Stats Section
    "stat_happy_clients": { "en": "Happy Clients", "ar": "عملاء سعداء" },
    "stat_projects": { "en": "Projects", "ar": "مشاريع" },
    "stat_hours_support": { "en": "Hours Of Support", "ar": "ساعات دعم" },
    "stat_workers": { "en": "Hard Workers", "ar": "فريق عمل" },

    // Skills
    "skills_title": { "en": "Skills", "ar": "المهارات" },
    "skills_desc": { "en": "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit", "ar": "نبذة عن المهارات التقنية والعملية" },
    "skills_frontend": { "en": "Front-end Development", "ar": "تطوير الواجهات" },
    "skills_backend": { "en": "Back-end Development", "ar": "تطوير الخلفية" },

    // Resume
    "resume_title": { "en": "Resume", "ar": "السيرة الذاتية" },
    "resume_desc": { "en": "My professional and educational journey in detail.", "ar": "رحلتي المهنية والتعليمية بالتفصيل" },
    "resume_summary": { "en": "Professional Summary", "ar": "ملخص مهني" },
    "resume_summary_text": { "en": "Software Developer and IT student with two years of hands-on experience in web development and freelancing. Skilled in building modern, scalable, and responsive web applications using multiple technologies. Strong background in both development and design analysis, with solid experience in Oracle APEX and full database-driven systems. Certified in Web Development and International Computer Driving License (ICDL). Actively studying Information Technology at Al-Razi University since 2023.", "ar": "مطور برمجيات وطالب تقنية معلومات بخبرة عملية تمتد لسنتين في تطوير الويب والعمل الحر. أمتلك مهارات قوية في بناء تطبيقات ويب حديثة وقابلة للتوسع، مع خبرة متقدمة في التحليل والتصميم. لدي خبرة قوية في Oracle APEX وبناء الأنظمة المعتمدة على قواعد البيانات. حاصل على شهادة معتمدة في تطوير الويب والرخصة الدولية لقيادة الحاسوب (ICDL). أدرس تخصص تقنية المعلومات في جامعة الرازي منذ عام 2023." },
    "resume_contact_info": { "en": "Contact Information", "ar": "معلومات الاتصال" },
    "resume_tech_skills": { "en": "Technical Skills", "ar": "المهارات التقنية" },
    "resume_exp_title": { "en": "Professional Experience", "ar": "الخبرة العملية" },
    "resume_edu_title": { "en": "Education", "ar": "التعليم" },
    "resume_cert_title": { "en": "Certifications", "ar": "الشهادات" },

    // Skills
    "skill_web_dev": { "en": "HTML / CSS / JavaScript", "ar": "HTML / CSS / JavaScript" },
    "skill_programming": { "en": "PHP / Python / Java", "ar": "PHP / Python / Java" },
    "skill_database": { "en": "SQL / MySQL / Oracle APEX", "ar": "SQL / MySQL / Oracle APEX" },
    "skill_frameworks": { "en": "React.js / Next.js / Node.js", "ar": "React.js / Next.js / Node.js" },
    "skill_version_control": { "en": "Git / GitHub", "ar": "Git / GitHub" },
    "skill_design": { "en": "Web Design & System Analysis", "ar": "تصميم الويب وتحليل الأنظمة" },

    // Experience
    "exp_job_title": { "en": "Freelance Software Developer", "ar": "مطور برمجيات مستقل" },
    "exp_duration": { "en": "2023 – Present", "ar": "2023 – حتى الآن" },
    "exp_freelance": { "en": "Freelance", "ar": "عمل حر" },
    "exp_task_1": { "en": "Developed full web applications using HTML, CSS, JavaScript, PHP, and modern frameworks", "ar": "تطوير تطبيقات ويب متكاملة باستخدام HTML وCSS وJavaScript وPHP" },
    "exp_task_2": { "en": "Built database-driven systems using SQL, MySQL, and Oracle", "ar": "بناء أنظمة تعتمد على قواعد البيانات باستخدام SQL وMySQL وOracle" },
    "exp_task_3": { "en": "Designed and implemented Oracle APEX applications", "ar": "تطوير تطبيقات احترافية باستخدام Oracle APEX" },
    "exp_task_4": { "en": "Used Git and GitHub for version control and project management", "ar": "استخدام Git وGitHub لإدارة الإصدارات والمشاريع" },
    "exp_task_5": { "en": "Delivered responsive UI/UX designs with strong analytical and problem-solving approaches", "ar": "تصميم واجهات مستخدم متجاوبة مع تركيز قوي على التحليل وحل المشكلات" },
    "exp_task_6": { "en": "Worked independently with clients from idea to deployment", "ar": "تنفيذ المشاريع بشكل كامل من الفكرة حتى الإطلاق" },

    // Education
    "edu_degree": { "en": "Bachelor of Information Technology (IT)", "ar": "بكالوريوس تقنية معلومات (IT)" },
    "edu_duration": { "en": "2023 – Present", "ar": "2023 – حتى الآن" },
    "edu_university": { "en": "Al-Razi University", "ar": "جامعة الرازي" },
    "edu_desc": { "en": "Actively studying Information Technology with focus on software development, database systems, and web technologies.", "ar": "أدرس حالياً تقنية المعلومات مع التركيز على تطوير البرمجيات وأنظمة قواعد البيانات وتقنيات الويب." },

    // Certifications
    "cert_1": { "en": "Certified Web Development Program", "ar": "شهادة معتمدة في تطوير الويب" },
    "cert_2": { "en": "International Computer Driving License (ICDL)", "ar": "الرخصة الدولية لقيادة الحاسوب (ICDL)" },

    // Portfolio
    "portfolio_title": { "en": "Portfolio", "ar": "أعمالي" },
    "portfolio_desc": { "en": "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.", "ar": "معرض لبعض أعمالي السابقة والمميزة" },
    "filter_all": { "en": "All Projects", "ar": "الكل" },
    "filter_photo": { "en": "Photography", "ar": "تطوير" },
    "filter_design": { "en": "Design", "ar": "تصميم" },
    "filter_auto": { "en": "Automotive", "ar": "اخرى" },
    "filter_nature": { "en": "Nature", "ar": "طبيعة" },

    // Services
    "services_title": { "en": "Services", "ar": "خدماتي" },
    "services_desc": { "en": "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit", "ar": "ما يمكنني تقديمه لك من خدمات" },
    "services_innovative": { "en": "<div>Innovative business</div><div><span>performance solutions</span></div>", "ar": "<div>حلول أعمال</div><div><span>مبتكرة وفعالة</span></div>" },
    "services_intro_desc": { "en": "We integrate forward-thinking strategies, creative approaches, and state-of-the-art technologies.", "ar": "ندمج الاستراتيجيات المستقبلية والأساليب الإبداعية مع أحدث التقنيات." },
    "btn_view_services": { "en": "View All Services", "ar": "عرض كل الخدمات" },

    // Service Cards
    "service_branding": { "en": "Creative <span>branding</span>", "ar": "الهوية <span>البصرية</span>" },
    "service_systems": { "en": "Design <span>systems</span>", "ar": "أنظمة <span>التصميم</span>" },
    "service_marketing": { "en": "Marketing <span>strategies</span>", "ar": "استراتيجيات <span>التسويق</span>" },
    "service_platforms": { "en": "Digital <span>platforms</span>", "ar": "المنصات <span>الرقمية</span>" },
    "service_growth": { "en": "Growth <span>acceleration</span>", "ar": "تسريع <span>النمو</span>" },
    "service_media": { "en": "Media <span>solutions</span>", "ar": "حلول <span>الميديا</span>" },
    "service_branding_desc": { "en": "Crafting unique brand identities.", "ar": "صياغة هويات تجارية فريدة." },
    "service_systems_desc": { "en": "Building comprehensive design systems.", "ar": "بناء أنظمة تصميم شاملة." },
    "service_marketing_desc": { "en": "Strategic marketing plans.", "ar": "خطط تسويقية استراتيجية." },
    "service_platforms_desc": { "en": "Robust digital platforms.", "ar": "منصات رقمية قوية." },
    "service_growth_desc": { "en": "Accelerating business growth.", "ar": "تسريع نمو الأعمال." },
    "service_media_desc": { "en": "Engaging media solutions.", "ar": "حلول إعلامية جذابة." },

    // Testimonials
    "testimonials_title": { "en": "Testimonials", "ar": "آراء العملاء" },
    "testimonials_desc": { "en": "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit", "ar": "ماذا يقول العملاء عني" },

    // Contact
    "contact_title": { "en": "Contact", "ar": "تواصل معي" },
    "contact_desc": { "en": "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit", "ar": "لا تتردد في التواصل معي لأي استفسار" },
    "contact_info_title": { "en": "Contact Info", "ar": "معلومات الاتصال" },
    "contact_info_desc": { "en": "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.", "ar": "يمكنك التواصل عبر القنوات التالية" },
    "info_location": { "en": "Our Location", "ar": "الموقع" },
    "info_location_val": { "en": "Yemen, Sana'a", "ar": "اليمن، صنعاء" },
    "info_facebook": { "en": "Facebook", "ar": "فيسبوك" },
    "info_facebook_val": { "en": "Mutasim Al-Muntasir", "ar": "معتصم المنتصر" },
    "info_phone": { "en": "Phone Number", "ar": "رقم الهاتف" },
    "info_email": { "en": "Email Address", "ar": "البريد الإلكتروني" },
    "form_title": { "en": "Get In Touch", "ar": "أرسل رسالة" },
    "form_desc": { "en": "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.", "ar": "املأ النموذج وسيتم الرد عليك قريباً" },
    "form_ph_name": { "en": "Your Name", "ar": "الاسم" },
    "form_ph_email": { "en": "Your Email", "ar": "البريد الإلكتروني" },
    "form_ph_subject": { "en": "Subject", "ar": "الموضوع" },
    "form_ph_message": { "en": "Message", "ar": "الرسالة" },
    "btn_send_msg": { "en": "Send Message", "ar": "إرسال" },

    // Testimonials details
    "test1_text": { "en": "Great work on the website! Clean code and responsive design.", "ar": "عمل رائع على الموقع! كود نظيف وتصميم متجاوب." },
    "test1_name": { "en": "Ahmed Mohammed", "ar": "أحمد محمد" },
    "test1_position": { "en": "Web Developer", "ar": "مطور ويب" },
    "test2_text": { "en": "Professional service and timely delivery. Highly recommended!", "ar": "خدمة احترافية وتسليم في الوقت المحدد. موصى به للغاية!" },
    "test2_name": { "en": "Sarah Johnson", "ar": "سارة جونسون" },
    "test2_position": { "en": "Project Manager", "ar": "مديرة مشاريع" },

    // Footer
    "footer_rights": { "en": "All Rights Reserved", "ar": "جميع الحقوق محفوظة" },
    "footer_designed": { "en": "Designed by", "ar": "تصميم" }
  };

  const languageToggleBtn = document.getElementById('language-toggle');

  function updateLanguage(lang) {
    // Save preference
    localStorage.setItem('language', lang);

    // Update HTML dir
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      languageToggleBtn.textContent = 'EN';

      // Swap Bootstrap to RTL
      const bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');
      if (bootstrapLink && !bootstrapLink.href.includes('rtl')) {
        bootstrapLink.href = bootstrapLink.href.replace('bootstrap.min.css', 'bootstrap.rtl.min.css');
      }

      // Change Font
      document.body.style.fontFamily = "'Cairo', sans-serif";

    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      languageToggleBtn.textContent = 'AR';

      // Swap Bootstrap to LTR
      const bootstrapLink = document.querySelector('link[href*="bootstrap.rtl.min.css"]');
      if (bootstrapLink) {
        bootstrapLink.href = bootstrapLink.href.replace('bootstrap.rtl.min.css', 'bootstrap.min.css');
      }

      // Reset Font to Unified English Font
      document.body.style.fontFamily = "'Outfit', sans-serif";
    }

    // Preserve Theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcons = document.querySelectorAll('.theme-toggle-btn i');
    themeIcons.forEach(icon => {
      if (currentTheme === 'light') {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
      }
    });

    // Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.innerHTML = translations[key][lang];
      }

      // Handle placeholders for inputs
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (translations[key] && translations[key][lang]) {
          el.placeholder = translations[key][lang];
        }
      }
    });

    // Re-init AOS to handle potential layout shifts
    if (typeof AOS === 'object') {
      setTimeout(() => AOS.refresh(), 100);
    }
  }

  // Event Listener
  if (languageToggleBtn) {
    languageToggleBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('language') === 'ar' ? 'en' : 'ar';
      updateLanguage(currentLang);
    });
  }

  // Init on load
  const savedLang = localStorage.getItem('language') || 'en';
  updateLanguage(savedLang);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();