(function () {
  'use strict';

  // ---- Language translations ----
  const translations = {
    en: {
      navHome: 'Home',
      navAbout: 'About',
      navEducation: 'Education',
      navExperience: 'Experience',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navResearch: 'Research',
      navCV: 'CV',
      navContact: 'Contact',
      heroGreeting: "Hello, I'm",
      heroName: 'Bishwaprotap Ray',
      heroDesc: 'Passionate about leveraging AI, Machine Learning, and Deep Learning to build intelligent software solutions that solve real-world challenges and create meaningful social impact.',
      btnGetInTouch: 'Get In Touch',
      btnViewCV: 'View My CV',
      btnDownloadCV: 'Download CV',
      aboutTag: 'About Me',
      aboutTitle: 'Who I Am',
      aboutLead: "Hello! I'm <strong>Bishwaprotap Ray</strong>, an Artificial Intelligence Engineer, Machine Learning Engineer, Software Developer, Research Enthusiast, and Robotics Innovator from Bangladesh.",
      aboutPara1: "I am deeply passionate about leveraging Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Data Science to develop intelligent software solutions that solve real-world challenges. My vision is to contribute to the future of AI by building technologies that improve industries, empower people, and create meaningful social impact.",
      aboutPara2: "My journey into technology began during my secondary education, where I first discovered my interest in programming, electronics, and robotics. What started as simple programming exercises gradually evolved into a strong passion for software development and artificial intelligence.",
      aboutPara3: "I completed my Diploma in Engineering (Computer Technology) from Barisal Polytechnic Institute and pursued a Bachelor of Computer Science and Engineering (BCSE) at IUBAT, actively participating in programming competitions, robotics events, AI contests, hackathons, and research activities.",
      cardEducation: 'Education',
      cardEducationText: 'BCSE at IUBAT & Diploma in Computer Technology from Barisal Polytechnic Institute',
      cardRole: 'Current Role',
      cardRoleText: 'AI Software Development Intern at AKIJ iBOS — building intelligent ERP solutions',
      cardLocation: 'Location',
      cardLocationText: 'Dhaka, Bangladesh — Flat A6, House 98, Road 13, Uttara Sector 10',
      cardLanguages: 'Languages',
      cardLanguagesText: 'Bangla (Native), English (Fluent), Hindi (Conversational)',
      philosophyTitle: 'Personal Philosophy',
      philosophyQuote: '"Artificial Intelligence is more than just a field of study—it is a powerful tool for solving complex global challenges. Whether it\'s improving healthcare through predictive analytics, optimizing enterprise operations with intelligent automation, or developing smart systems for education and agriculture, AI has the potential to create lasting positive change."',
      philosophyVision: 'My long-term goal is to become a globally recognized AI Engineer and Researcher, building trustworthy, explainable, and scalable AI solutions across healthcare, finance, education, manufacturing, smart cities, and enterprise software.',
      educationTag: 'Academic',
      educationTitle: 'Education',
      educationSubtitle: 'My educational journey in Computer Science and Engineering',
      experienceTag: 'Career',
      experienceTitle: 'Professional Experience',
      exp1Date: 'Feb 2026 – Jul 2026',
      exp1Title: 'AI Software Development Intern',
      exp1Company: 'AKIJ iBOS',
      exp1Desc: 'Develop intelligent enterprise software solutions that automate business operations through Artificial Intelligence at one of Bangladesh\'s leading ERP software companies.',
      exp1Task1: 'Designed AI-powered ERP automation systems and workflow modules',
      exp1Task2: 'Developed Leave Management Systems and Employee Movement Applications',
      exp1Task3: 'Built AI Assistants for intelligent HR support solutions',
      exp1Task4: 'Integrated REST APIs and backend services using FastAPI',
      exp1Task5: 'Contributed to debugging, testing, deployment, and production-level development',
      exp2Date: 'Jan 2019 – Apr 2019',
      exp2Title: 'Android Application Developer Intern',
      exp2Company: 'BDtask',
      exp2Desc: 'Gained valuable experience in Android application development using Java and Android Studio.',
      exp2Task1: 'Worked on user interface design and database integration',
      exp2Task2: 'Developed mobile applications in collaboration with experienced engineers',
      exp2Task3: 'Gained hands-on experience with real-world Android projects',
      skillsTag: 'Expertise',
      skillsTitle: 'Technical Skills',
      skillCat1: 'Programming Languages',
      skillCat2: 'AI & Machine Learning',
      skillCat3: 'Frameworks & Libraries',
      skillCat4: 'Tools & Platforms',
      projectsTag: 'Portfolio',
      projectsTitle: 'AI Projects',
      projectsSubtitle: 'Real-world projects demonstrating AI-driven system design and implementation',
      projBadgeEnterprise: 'Enterprise',
      proj1Title: 'AI-Powered ERP Automation System',
      proj1Desc: 'Intelligent enterprise workflow automation with AI assistants for HR and business operations at AKIJ iBOS.',
      proj2Title: 'PeopleDesk Leave Assistant',
      proj2Desc: 'AI-powered leave management system with intelligent employee support and workflow automation.',
      proj3Title: 'Face Attendance System',
      proj3Desc: 'Computer vision-based attendance tracking using facial recognition technology.',
      proj4Title: 'OCR Document Scanner',
      proj4Desc: 'Optical character recognition system for automated document processing and data extraction.',
      proj5Title: 'Parkinson\'s Disease Prediction',
      proj5Desc: 'Machine learning model for early detection and prediction of Parkinson\'s disease.',
      proj6Title: 'Brain Tumor Classification',
      proj6Desc: 'ML-based medical imaging analysis for brain tumor detection and classification.',
      proj7Title: 'Cardiovascular Disease Risk Classification',
      proj7Desc: 'Weighted feature fusion with Explainable AI on Bangladeshi clinical and lifestyle data.',
      proj8Title: 'Deep Learning Glaucoma Detection',
      proj8Desc: 'Deep learning model for automated glaucoma detection from medical images.',
      proj9Title: 'CNN Fruit Classification',
      proj9Desc: 'Convolutional neural network for fresh and rotten fruit classification.',
      proj10Title: 'Mobile Money Fraud Detection',
      proj10Desc: 'Synthetic transaction analysis for detecting fraudulent mobile money activities.',
      proj11Title: 'Chronic Kidney Disease Prediction',
      proj11Desc: 'ML-based predictive model for chronic kidney disease risk assessment.',
      proj12Title: 'Blood Disease Prediction',
      proj12Desc: 'Machine learning system for blood disease classification and prediction.',
      proj13Title: 'Employee Management System',
      proj13Desc: 'Full-stack employee management with automated workflows and reporting.',
      proj14Title: 'Weight Bridge Scale Automation',
      proj14Desc: 'Automated weighing system with intelligent data processing and integration.',
      proj15Title: 'AI Chatbots',
      proj15Desc: 'Intelligent conversational agents for customer support and enterprise assistance.',
      proj16Title: 'Medex Data Scraper',
      proj16Desc: 'Web scraping application for medical data collection and analysis.',
      viewAllProjects: 'View All Projects on GitHub',
      researchTag: 'Publications',
      researchTitle: 'Research & Publications',
      researchInterests: 'Research Interests',
      interest1: 'Artificial Intelligence',
      interest2: 'Machine Learning',
      interest3: 'Deep Learning',
      interest4: 'Computer Vision',
      interest5: 'Explainable AI',
      interest6: 'NLP',
      interest7: 'Healthcare AI',
      interest8: 'Smart Agriculture',
      interest9: 'Robotics',
      interest10: 'IoT',
      interest11: 'Smart Cities',
      interest12: 'Enterprise AI',
      interest13: 'Educational Data Mining',
      interest14: 'Intelligent Automation',
      confPapers: 'Conference Papers',
      journalArticles: 'Journal Articles',
      bookChapters: 'Book Chapters',
      awardsTitle: 'Awards & Achievements',
      leadershipTitle: 'Leadership & Community',
      certTitle: 'Certifications',
      cvTag: 'Resume',
      cvTitle: 'My CV',
      cvSubtitle: 'View or download my complete curriculum vitae',
      openNewTab: 'Open in New Tab',
      downloadPdf: 'Download PDF',
      pdfFallback: 'PDF not displaying?',
      openCvNewTab: 'Open CV in a new tab',
      orDownload: 'or use the download button above.',
      contactTag: 'Connect',
      contactTitle: 'Get In Touch',
      contactSubtitle: "I'm always open to discussing AI projects, research collaborations, and new opportunities.",
      contactEmail: 'Email',
      contactPhone: 'Phone',
      contactLocation: 'Location',
      contactAddress: 'Flat A6, House 98, Road 13<br>Uttara Sector 10, Dhaka 1230<br>Bangladesh',
      contactLinkedin: 'LinkedIn',
      contactGithub: 'GitHub',
      contactFacebook: 'Facebook',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      pub1Title: 'Assessing Multiscale SPEI Drought Prediction with ANN and Classical Machine Learning Models in Northern Bangladesh',
      pub1Venue: 'IEEE QPAIN 2026 — Quantum Photonics, Artificial Intelligence & Networking',
      pub2Title: 'Intelligent Energy Optimization Load Management with Machine Learning',
      pub2Venue: 'IEEE QPAIN 2026 — April 2026',
      pub3Title: 'Ground Water Scenario of Meghalaya State: Prospective Areas for Development',
      pub3Venue: 'Water Resources of North Eastern and Eastern India — August 2021',
      pub4Title: 'Hydrogeology of Assam and its Development Prospects',
      pub4Venue: 'Water Resources of North Eastern and Eastern India — August 2021',
      pub5Title: 'Cardiovascular Disease Risk Classification Using Machine Learning with Weighted Feature Fusion and Explainable AI on Bangladeshi Clinical and Lifestyle Data',
      pub5Venue: 'Indonesian Journal of Electrical Engineering and Informatics (IJEEI) — February 2026',
      pub6Title: 'A Machine Learning Approach for Predicting Academic Performance Using Classification Models: Based on Study of Private Universities in Bangladesh',
      pub6Venue: 'April 2026',
      award1: '🥈 2nd Place — Line Following Robot Competition, IIC-IUBAT 2023',
      award2: '🥉 3rd Place — Project Shocking Competition, IIC-IUBAT 2023',
      award3: '🥈 2nd Place — Barisal Division Skill Competition 2018',
      award4: '🏅 5th Place — National Skill Competition of Bangladesh 2018',
      award5: '🤖 BUBT Artificial Intelligence Contest 2025',
      award6: '💡 National Innovation Competition Techathon 2024',
      leader1: 'Manager, Robotics Wing — IUBAT IT Society (2025)',
      leader2: 'Ex-Deputy Manager, Robotics Wing — IUBAT IT Society (2023)',
      leader3: 'Member, Bangladesh Robotics Club',
      leader4: 'Member, Bangladesh Android Developer Community',
      cert1: 'Python with Machine Learning — Enhancing Digital Government & Economy Project',
      cert2: 'Cloud Engineering — Certificate of Completion',
      cert3: 'Python Programming Language — Certificate of Completion',
      cert4: 'Mobile Game & Application Project — Certificate of Competence',
      cert5: 'Microsoft PowerPoint Basics — Certificate of Participation',
      cert6: 'BUBT AI Conquest 2025 — Certificate of Achievement'
    },
    bn: {
      navHome: 'হোম',
      navAbout: 'সম্পর্কে',
      navEducation: 'শিক্ষা',
      navExperience: 'অভিজ্ঞতা',
      navSkills: 'দক্ষতা',
      navProjects: 'প্রজেক্ট',
      navResearch: 'গবেষণা',
      navCV: 'সিভি',
      navContact: 'যোগাযোগ',
      heroGreeting: 'হ্যালো, আমি',
      heroName: 'বিশ্বপ্রতাপ রায়',
      heroDesc: 'কৃত্রিম বুদ্ধিমত্তা, মেশিন লার্নিং এবং ডিপ লার্নিং ব্যবহার করে বাস্তব সমস্যার সমাধান এবং সামাজিক প্রভাব সৃষ্টির জন্য বুদ্ধিমান সফটওয়্যার সমাধান তৈরি করতে আগ্রহী।',
      btnGetInTouch: 'যোগাযোগ করুন',
      btnViewCV: 'সিভি দেখুন',
      btnDownloadCV: 'সিভি ডাউনলোড',
      aboutTag: 'সম্পর্কে',
      aboutTitle: 'আমি কে',
      aboutLead: 'হ্যালো! আমি <strong>বিশ্বপ্রতাপ রায়</strong>, একজন কৃত্রিম বুদ্ধিমত্তা ইঞ্জিনিয়ার, মেশিন লার্নিং ইঞ্জিনিয়ার, সফটওয়্যার ডেভেলপার, গবেষণা উৎসাহী এবং রোবোটিক্স উদ্ভাবক বাংলাদেশ থেকে।',
      aboutPara1: 'আমি কৃত্রিম বুদ্ধিমত্তা, মেশিন লার্নিং, ডিপ লার্নিং, কম্পিউটার ভিশন এবং ডেটা সায়েন্স ব্যবহার করে বাস্তব সমস্যার সমাধানের জন্য বুদ্ধিমান সফটওয়্যার সমাধান তৈরি করতে গভীরভাবে আগ্রহী। আমার লক্ষ্য হলো শিল্প, মানুষকে ক্ষমতায়ন এবং সার্থক সামাজিক প্রভাব সৃষ্টি করে এআই-এর ভবিষ্যতে অবদান রাখা।',
      aboutPara2: 'আমার প্রযুক্তির যাত্রা মাধ্যমিক শিক্ষার সময় শুরু হয়েছিল, যখন আমি প্রথম প্রোগ্রামিং, ইলেকট্রনিক্স এবং রোবোটিক্সে আগ্রহ আবিষ্কার করেছি। সাধারণ প্রোগ্রামিং অনুশীলন থেকে শুরু করে এটি ধীরে ধীরে সফটওয়্যার ডেভেলপমেন্ট এবং কৃত্রিম বুদ্ধিমত্তার প্রতি শক্তিশালী আগ্রহে পরিণত হয়েছে।',
      aboutPara3: 'আমি বরিশাল পলিটেকনিক ইনস্টিটিউট থেকে ডিপ্লোমা ইন ইঞ্জিনিয়ারিং (কম্পিউটার টেকনোলজি) এবং আইইউবিএটিতে কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (বিসিএসই) অনুসরণ করেছি, সক্রিয়ভাবে প্রোগ্রামিং প্রতিযোগিতা, রোবোটিক্স ইভেন্ট, এআই প্রতিযোগিতা, হ্যাকাথন এবং গবেষণা কার্যকলাপে অংশগ্রহণ করেছি।',
      cardEducation: 'শিক্ষা',
      cardEducationText: 'আইইউবিএটিতে বিসিএসই এবং বরিশাল পলিটেকনিক ইনস্টিটিউট থেকে কম্পিউটার টেকনোলজিতে ডিপ্লোমা',
      cardRole: 'বর্তমান ভূমিকা',
      cardRoleText: 'একেআইজে আইবিওএস-এ এআই সফটওয়্যার ডেভেলপমেন্ট ইন্টার্ন — বুদ্ধিমান ইআরপি সমাধান তৈরি করছেন',
      cardLocation: 'অবস্থান',
      cardLocationText: 'ঢাকা, বাংলাদেশ — ফ্ল্যাট এ৬, বাড়ি ৯৮, রোড ১৩, উত্তরা সেক্টর ১০',
      cardLanguages: 'ভাষা',
      cardLanguagesText: 'বাংলা (মাতৃভাষা), ইংরেজি (সাবলীল), হিন্দি (কথোপকথন)',
      philosophyTitle: 'ব্যক্তিগত দর্শন',
      philosophyQuote: '"কৃত্রিম বুদ্ধিমত্তা কেবল একটি অধ্যয়নের ক্ষেত্র নয়—এটি জটিল বৈশ্বিক চ্যালেঞ্জ সমাধানের জন্য একটি শক্তিশালী টুল। প্রেডিক্টিভ অ্যানালিটিক্সের মাধ্যমে স্বাস্থ্যসেবা উন্নত করা, বুদ্ধিমান অটোমেশনের সাথে এন্টারপ্রাইজ অপারেশন অপ্টিমাইজ করা, বা শিক্ষা এবং কৃষির জন্য স্মার্ট সিস্টেম তৈরি করা—যাই হোক না কেন, এআই-এর স্থায়ী ইতিবাচক পরিবর্তন সৃষ্টির সম্ভাবনা রয়েছে।"',
      philosophyVision: 'আমার দীর্ঘমেয়াদী লক্ষ্য হলো একজন বিশ্বব্যাপী স্বীকৃত এআই ইঞ্জিনিয়ার এবং গবেষক হওয়া, স্বাস্থ্যসেবা, অর্থ, শিক্ষা, উৎপাদন, স্মার্ট সিটি এবং এন্টারপ্রাইজ সফটওয়্যার জীবন্ততাসহ নির্ভরযোগ্য, ব্যাখ্যাযোগ্য এবং স্কেলেবল এআই সমাধান তৈরি করা।',
      educationTag: 'শিক্ষাগত',
      educationTitle: 'শিক্ষা',
      educationSubtitle: 'কম্পিউটার সায়েন্স এবং ইঞ্জিনিয়ারিং-এ আমার শিক্ষাগত যাত্রা',
      experienceTag: 'ক্যারিয়ার',
      experienceTitle: 'পেশাদার অভিজ্ঞতা',
      exp1Date: 'ফেব্রুয়ারি ২০২৬ – জুলাই ২০২৬',
      exp1Title: 'এআই সফটওয়্যার ডেভেলপমেন্ট ইন্টার্ন',
      exp1Company: 'একেআইজে আইবিওএস',
      exp1Desc: 'বাংলাদেশের অন্যতম শীর্ষ ইআরপি সফটওয়্যার কোম্পানিতে কৃত্রিম বুদ্ধিমত্তার মাধ্যমে ব্যবসায়িক অপারেশন অটোমেট করে বুদ্ধিমান এন্টারপ্রাইজ সফটওয়্যার সমাধান তৈরি করুন।',
      exp1Task1: 'এআই-চালিত ইআরপি অটোমেশন সিস্টেম এবং ওয়ার্কফ্লো মডিউল ডিজাইন করেছেন',
      exp1Task2: 'লিভ ম্যানেজমেন্ট সিস্টেম এবং এমপ্লয়ি মুভমেন্ট অ্যাপ্লিকেশন তৈরি করেছেন',
      exp1Task3: 'বুদ্ধিমান এইচআর সাপোর্ট সমাধানের জন্য এআই অ্যাসিস্ট্যান্ট তৈরি করেছেন',
      exp1Task4: 'ফাস্টএপিআই ব্যবহার করে রেস্ট এপিআই এবং ব্যাকএন্ড সার্ভিস ইন্টিগ্রেট করেছেন',
      exp1Task5: 'ডিবাগিং, টেস্টিং, ডিপ্লয়মেন্ট এবং প্রোডাকশন-লেভেল ডেভেলপমেন্টে অবদান রেখেছেন',
      exp2Date: 'জানুয়ারি ২০১৯ – এপ্রিল ২০১৯',
      exp2Title: 'অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপার ইন্টার্ন',
      exp2Company: 'বিডিটাস্ক',
      exp2Desc: 'জাভা এবং অ্যান্ড্রয়েড স্টুডিও ব্যবহার করে অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপমেন্টে মূল্যবান অভিজ্ঞতা অর্জন করেছেন।',
      exp2Task1: 'ইউজার ইন্টারফেস ডিজাইন এবং ডেটাবেস ইন্টিগ্রেশনে কাজ করেছেন',
      exp2Task2: 'অভিজ্ঞ ইঞ্জিনিয়ারদের সাথে সহযোগিতায় মোবাইল অ্যাপ্লিকেশন তৈরি করেছেন',
      exp2Task3: '�াস্তব-বিশ্বের অ্যান্ড্রয়েড প্রকল্পে হাতে-কলমে অভিজ্ঞতা অর্জন করেছেন',
      skillsTag: 'দক্ষতা',
      skillsTitle: 'প্রযুক্তিগত দক্ষতা',
      skillCat1: 'প্রোগ্রামিং ভাষা',
      skillCat2: 'এআই এবং মেশিন লার্নিং',
      skillCat3: 'ফ্রেমওয়ার্ক এবং লাইব্রেরি',
      skillCat4: 'টুল এবং প্ল্যাটফর্ম',
      projectsTag: 'পোর্টফোলিও',
      projectsTitle: 'এআই প্রজেক্ট',
      projectsSubtitle: 'এআই-চালিত সিস্টেম ডিজাইন এবং বাস্তবায়ন প্রদর্শনকারী বাস্তব-বিশ্বের প্রকল্প',
      projBadgeEnterprise: 'এন্টারপ্রাইজ',
      proj1Title: 'এআই-চালিত ইআরপি অটোমেশন সিস্টেম',
      proj1Desc: 'একেআইজে আইবিওএস-এ এইচআর এবং ব্যবসায়িক অপারেশনের জন্য এআই অ্যাসিস্ট্যান্ট সহ বুদ্ধিমান এন্টারপ্রাইজ ওয়ার্কফ্লো অটোমেশন।',
      proj2Title: 'পিপলডেস্ক লিভ অ্যাসিস্ট্যান্ট',
      proj2Desc: 'বুদ্ধিমান কর্মী সমর্থন এবং ওয়ার্কফ্লো অটোমেশন সহ এআই-চালিত লিভ ম্যানেজমেন্ট সিস্টেম।',
      proj3Title: 'ফেস অ্যাটেনডেন্স সিস্টেম',
      proj3Desc: 'ফেসিয়াল রিকগনিশন প্রযুক্তি ব্যবহার করে কম্পিউটার ভিশন-ভিত্তিক উপস্থিতি ট্র্যাকিং।',
      proj4Title: 'ওসিআর ডকুমেন্ট স্ক্যানার',
      proj4Desc: 'স্বয়ংক্রিয় ডকুমেন্ট প্রসেসিং এবং ডেটা এক্সট্র্যাকশনের জন্য অপটিক্যাল ক্যারেক্টার রিকগনিশন সিস্টেম।',
      proj5Title: 'পারকিনসন্স রোগ পূর্বাভাস',
      proj5Desc: 'পারকিনসন্স রোগের প্রাথমিক সনাক্তকরণ এবং পূর্বাভাসের জন্য মেশিন লার্নিং মডেল।',
      proj6Title: 'ব্রেইন টিউমার শ্রেণীবিন্যাস',
      proj6Desc: 'ব্রেইন টিউমার সনাক্তকরণ এবং শ্রেণীবিন্যাসের জন্য এমএল-ভিত্তিক মেডিকেল ইমেজিং বিশ্লেষণ।',
      proj7Title: 'কার্ডিওভাসকুলার রোগ ঝুঁকি শ্রেণীবিন্যাস',
      proj7Desc: 'বাংলাদেশী ক্লিনিকাল এবং লাইফস্টাইল ডেটার উপর এক্সপ্লেইনেবল এআই সহ ওয়েটেড ফিচার ফিউশন।',
      proj8Title: 'ডিপ লার্নিং গ্লুকোমা সনাক্তকরণ',
      proj8Desc: 'মেডিকেল ইমেজ থেকে স্বয়ংক্রিয় গ্লুকোমা সনাক্তকরণের জন্য ডিপ লার্নিং মডেল।',
      proj9Title: 'সিএনএন ফল শ্রেণীবিন্যাস',
      proj9Desc: 'তাজা এবং পচা ফল শ্রেণীবিন্যাসের জন্য কনভোলিউশনাল নিউরাল নেটওয়ার্ক।',
      proj10Title: 'মোবাইল মানি ফ্রড সনাক্তকরণ',
      proj10Desc: 'জালিয়াতি মোবাইল মানি কার্যকলাপ সনাক্ত করার জন্য সিনথেটিক লেনদেন বিশ্লেষণ।',
      proj11Title: 'ক্রনিক কিডনি রোগ পূর্বাভাস',
      proj11Desc: 'ক্রনিক কিডনি রোগ ঝুঁকি মূল্যায়নের জন্য এমএল-ভিত্তিক পূর্বাভাসকারী মডেল।',
      proj12Title: 'রক্ত রোগ পূর্বাভাস',
      proj12Desc: 'রক্ত রোগ শ্রেণীবিন্যাস এবং পূর্বাভাসের জন্য মেশিন লার্নিং সিস্টেম।',
      proj13Title: 'কর্মচারী ম্যানেজমেন্ট সিস্টেম',
      proj13Desc: 'স্বয়ংক্রিয় ওয়ার্কফ্লো এবং রিপোর্টিং সহ ফুল-স্ট্যাক কর্মচারী ম্যানেজমেন্ট।',
      proj14Title: 'ওয়েট ব্রিজ স্কেল অটোমেশন',
      proj14Desc: 'বুদ্ধিমান ডেটা প্রসেসিং এবং ইন্টিগ্রেশন সহ স্বয়ংক্রিয় ওজন সিস্টেম।',
      proj15Title: 'এআই চ্যাটবট',
      proj15Desc: 'গ্রাহক সমর্থন এবং এন্টারপ্রাইজ সহায়তার জন্য বুদ্ধিমান কথোপকথন এজেন্ট।',
      proj16Title: 'মেডেক্স ডেটা স্ক্র্যাপার',
      proj16Desc: 'মেডিকেল ডেটা সংগ্রহ এবং বিশ্লেষণের জন্য ওয়েব স্ক্র্যাপিং অ্যাপ্লিকেশন।',
      viewAllProjects: 'গিটহাবে সব প্রজেক্ট দেখুন',
      researchTag: 'প্রকাশনা',
      researchTitle: 'গবেষণা ও প্রকাশনা',
      researchInterests: 'গবেষণার আগ্রহ',
      interest1: 'কৃত্রিম বুদ্ধিমত্তা',
      interest2: 'মেশিন লার্নিং',
      interest3: 'ডিপ লার্নিং',
      interest4: 'কম্পিউটার ভিশন',
      interest5: 'এক্সপ্লেইনেবল এআই',
      interest6: 'এনএলপি',
      interest7: 'স্বাস্থ্যসেবা এআই',
      interest8: 'স্মার্ট কৃষি',
      interest9: 'রোবোটিক্স',
      interest10: 'আইওটি',
      interest11: 'স্মার্ট সিটি',
      interest12: 'এন্টারপ্রাইজ এআই',
      interest13: 'শিক্ষাগত ডেটা মাইনিং',
      interest14: 'বুদ্ধিমান অটোমেশন',
      confPapers: 'কনফারেন্স পেপার',
      journalArticles: 'জার্নাল নিবন্ধ',
      bookChapters: 'বই অধ্যায়',
      awardsTitle: 'পুরস্কার ও অর্জন',
      leadershipTitle: 'নেতৃত্ব ও সম্প্রদায়',
      certTitle: 'সার্টিফিকেশন',
      cvTag: 'রেজুমে',
      cvTitle: 'আমার সিভি',
      cvSubtitle: 'আমার সম্পূর্ণ কারিকুলাম ভিটে দেখুন বা ডাউনলোড করুন',
      openNewTab: 'নতুন ট্যাবে খুলুন',
      downloadPdf: 'পিডিএফ ডাউনলোড করুন',
      pdfFallback: 'পিডিএফ প্রদর্শিত হচ্ছে না?',
      openCvNewTab: 'নতুন ট্যাবে সিভি খুলুন',
      orDownload: 'অথবা উপরের ডাউনলোড বাটন ব্যবহার করুন।',
      contactTag: 'সংযোগ',
      contactTitle: 'যোগাযোগ করুন',
      contactSubtitle: 'আমি সর্বদা এআই প্রকল্প, গবেষণা সহযোগিতা এবং নতুন সুযোগ নিয়ে আলোচনা করতে প্রস্তুত।',
      contactEmail: 'ইমেইল',
      contactPhone: 'ফোন',
      contactLocation: 'অবস্থান',
      contactAddress: 'ফ্ল্যাট এ৬, বাড়ি ৯৮, রোড ১৩<br>উত্তরা সেক্টর ১০, ঢাকা ১২৩০<br>বাংলাদেশ',
      contactLinkedin: 'লিংকডইন',
      contactGithub: 'গিটহাব',
      contactFacebook: 'ফেসবুক',
      formName: 'আপনার নাম',
      formEmail: 'আপনার ইমেইল',
      formSubject: 'বিষয়',
      formMessage: 'বার্তা',
      formSubmit: 'বার্তা পাঠান',
      pub1Title: 'উত্তর বাংলাদেশে এএনএন এবং ক্লাসিকাল মেশিন লার্নিং মডেল সহ মাল্টিস্কেল এসপিইআই খরার পূর্বাভাস মূল্যায়ন',
      pub1Venue: 'আইইইই কিউপিএআইএন ২০২৬ — কোয়ান্টাম ফোটনিক্স, কৃত্রিম বুদ্ধিমত্তা এবং নেটওয়ার্কিং',
      pub2Title: 'মেশিন লার্নিং সহ বুদ্ধিমান শক্তি অপ্টিমাইজেশন লোড ম্যানেজমেন্ট',
      pub2Venue: 'আইইইই কিউপিএআইএন ২০২৬ — এপ্রিল ২০২৬',
      pub3Title: 'মেঘালয় রাজ্যের ভূগর্ভস্থ পানির পরিস্থিতি: উন্নয়নের সম্ভাব্য এলাকা',
      pub3Venue: 'উত্তর-পূর্ব এবং পূর্ব ভারতের জল সম্পদ — আগস্ট ২০২১',
      pub4Title: 'আসামের হাইড্রোজিওলজি এবং এর উন্নয়ন সম্ভাবনা',
      pub4Venue: 'উত্তর-পূর্ব এবং পূর্ব ভারতের জল সম্পদ — আগস্ট ২০২১',
      pub5Title: 'বাংলাদেশী ক্লিনিকাল এবং লাইফস্টাইল ডেটার উপর এক্সপ্লেইনেবল এআই সহ ওয়েটেড ফিচার ফিউশন এবং মেশিন লার্নিং ব্যবহার করে কার্ডিওভাসকুলার রোগ ঝুঁকি শ্রেণীবিন্যাস',
      pub5Venue: 'ইন্দোনেশিয়ান জার্নাল অফ ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং অ্যান্ড ইনফরমেটিক্স (আইজেইইআই) — ফেব্রুয়ারি ২০২৬',
      pub6Title: 'ক্লাসিফিকেশন মডেল ব্যবহার করে একাডেমিক পারফরম্যান্স পূর্বাভাসের জন্য মেশিন লার্নিং পদ্ধতি: বাংলাদেশের বেসরকারি বিশ্ববিদ্যালয়ের গবেষণার উপর ভিত্তি করে',
      pub6Venue: 'এপ্রিল ২০২৬',
      award1: '🥈 ২য় স্থান — লাইন ফলোয়িং রোবট প্রতিযোগিতা, আইআইসি-আইইউবিএটি ২০২৩',
      award2: '🥉 ৩য় স্থান — প্রজেক্ট শকিং প্রতিযোগিতা, আইআইসি-আইইউবিএটি ২০২৩',
      award3: '🥈 ২য় স্থান — বরিশাল বিভাগ স্কিল প্রতিযোগিতা ২০১৮',
      award4: '🏅 ৫ম স্থান — বাংলাদেশ জাতীয় স্কিল প্রতিযোগিতা ২০১৮',
      award5: '🤖 বিইউবিটি কৃত্রিম বুদ্ধিমত্তা প্রতিযোগিতা ২০২৫',
      award6: '💡 জাতীয় উদ্ভাবন প্রতিযোগিতা টেকাথন ২০২৪',
      leader1: 'ম্যানেজার, রোবোটিক্স উইং — আইইউবিএটি আইটি সোসাইটি (২০২৫)',
      leader2: 'প্রাক্তন ডেপুটি ম্যানেজার, রোবোটিক্স উইং — আইইউবিএটি আইটি সোসাইটি (২০২৩)',
      leader3: 'সদস্য, বাংলাদেশ রোবোটিক্স ক্লাব',
      leader4: 'সদস্য, বাংলাদেশ অ্যান্ড্রয়েড ডেভেলপার কমিউনিটি',
      cert1: 'মেশিন লার্নিং সহ পাইথন — ডিজিটাল সরকার ও অর্থনীতি প্রকল্প উন্নতকরণ',
      cert2: 'ক্লাউড ইঞ্জিনিয়ারিং — সমাপ্তির সার্টিফিকেট',
      cert3: 'পাইথন প্রোগ্রামিং ল্যাঙ্গুয়েজ — সমাপ্তির সার্টিফিকেট',
      cert4: 'মোবাইল গেম অ্যান্ড অ্যাপ্লিকেশন প্রজেক্ট — দক্ষতার সার্টিফিকেট',
      cert5: 'মাইক্রোসফট পাওয়ারপয়েন্ট বেসিকস — অংশগ্রহণের সার্টিফিকেট',
      cert6: 'বিইউবিটি এআই কনকোয়েস্ট ২০২৫ — অর্জনের সার্টিফিকেট'
    }
  };

  // ---- Theme switcher ----
  const themeBtns = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    themeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });
  }

  if (themeBtns.length > 0) {
    themeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setTheme(btn.dataset.theme);
      });
    });
  }

  setTheme(savedTheme);

  // ---- Language switcher ----
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('lang') || 'en';

  // ---- Typed text effect variables ----
  window.titles = savedLang === 'bn' ? [
    'কৃত্রিম বুদ্ধিমত্তা ইঞ্জিনিয়ার',
    'মেশিন লার্নিং ইঞ্জিনিয়ার',
    'সফটওয়্যার ডেভেলপার',
    'গবেষণা উৎসাহী',
    'রোবোটিক্স উদ্ভাবক'
  ] : [
    'Artificial Intelligence Engineer',
    'Machine Learning Engineer',
    'Software Developer',
    'Research Enthusiast',
    'Robotics Innovator'
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) {
        if (el.tagName === 'SPAN' && el.parentElement.classList.contains('btn-ghost')) {
          // Special case for download button with icon
          el.textContent = t[key];
        } else if (key === 'aboutLead' || key === 'philosophyQuote' || key === 'contactAddress') {
          // Elements that contain HTML
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update typed text titles based on language
    if (lang === 'bn') {
      window.titles = [
        'কৃত্রিম বুদ্ধিমত্তা ইঞ্জিনিয়ার',
        'মেশিন লার্নিং ইঞ্জিনিয়ার',
        'সফটওয়্যার ডেভেলপার',
        'গবেষণা উৎসাহী',
        'রোবোটিক্স উদ্ভাবক'
      ];
    } else {
      window.titles = [
        'Artificial Intelligence Engineer',
        'Machine Learning Engineer',
        'Software Developer',
        'Research Enthusiast',
        'Robotics Innovator'
      ];
    }

    // Restart typing animation with new language
    titleIndex = 0;
    charIndex = 0;
    isDeleting = false;
  }

  if (langBtns.length > 0) {
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
  }

  setLanguage(savedLang);

  // ---- Typed text effect ----
  const typedEl = document.getElementById('typedText');
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  function typeEffect() {
    if (!typedEl) return;

    const current = window.titles[titleIndex];

    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % window.titles.length;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // ---- Mobile navigation ----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      if (navMenu) navMenu.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle) navToggle.classList.remove('active');
      if (navMenu) navMenu.classList.remove('open');
    });
  });

  // ---- Header scroll effect ----
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', highlightNav);
    highlightNav();
  }

  // ---- Scroll reveal animation ----
  const revealElements = document.querySelectorAll(
    '.info-card, .timeline-item, .edu-timeline-item, .skill-category, .project-card, .achievement-section, .pub-category, .contact-form, .contact-item, .about-content, .about-cards'
  );

  if (revealElements.length > 0) {
    revealElements.forEach(el => {
      if (el.classList.contains('slide-in-left') || el.classList.contains('slide-in-right') || el.classList.contains('scale-in') || el.classList.contains('rotate-in')) {
        // Keep existing animation class
      } else {
        el.classList.add('fade-in');
      }
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
  }

  // ---- Contact form ----
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      if (nameInput && emailInput && subjectInput && messageInput) {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        const mailtoLink = `mailto:baburay214@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        window.location.href = mailtoLink;
      }
    });
  }

  // ---- Smooth scroll for anchor links ----
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
})();
