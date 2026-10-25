import type { Dict } from './ar';

/**
 * English dictionary and page content. Structure must match `ar` exactly (enforced by the Dict type).
 * Initial translation for review by the community team.
 */
export const en: Dict = {
  code: 'en',
  dir: 'ltr',
  ogLocale: 'en_US',
  arrow: '→',

  meta: {
    siteName: 'Syrian AI Community',
    home: {
      title: 'Syrian AI Community · مجتمع الذكاء الاصطناعي السوري',
      description:
        'The Syrian AI Community (SAIC) is a youth-led initiative that brings students, developers and trainers together to learn artificial intelligence, apply it, and build real projects. Get to know us and follow us on social media.',
    },
    about: {
      title: 'About · Syrian AI Community',
      description:
        'Our origin story, vision and mission, seven goals, work tracks, values, and the team: founders, trainers and volunteers of the Syrian AI Community.',
    },
    camp: {
      title: 'AI Engineering Camp · Syrian AI Community',
      description:
        'An advanced hands-on camp of ten sessions and thirty hours: from understanding AI models to shipping demo-ready AI products, with a team capstone project and hiring referrals.',
    },
    notFound: {
      title: 'Page not found · Syrian AI Community',
      description: 'The page you are looking for does not exist.',
    },
  },

  nav: {
    skip: 'Skip to content',
    brandAria: 'Syrian AI Community, home page',
    items: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about/' },
      { label: 'The Camp', path: '/programs/ai-engineering-camp/' },
      { label: 'Follow us', path: '/#follow' },
    ],
    switchLabel: 'العربية',
    switchAria: 'التبديل إلى النسخة العربية',
  },

  hero: {
    logoAlt: 'Syrian AI Community logo - مجتمع الذكاء الاصطناعي السوري',
    title: 'Syrian AI Community',
    tag: 'SYRIAN AI COMMUNITY · PROFILE 2026',
    lead: 'We believe knowledge grows when it is shared, and that opportunities are created when a passion for learning meets the spirit of initiative.',
    motto: 'Learn together · Share experience · Build opportunities',
    ctaFollow: 'Follow us',
    ctaAbout: 'About us',
  },

  home: {
    about: {
      num: '01',
      kicker: 'Who we are',
      title: 'A youth-led initiative driven by a passion for knowledge',
      sub: 'A collaborative space that brings students, developers and AI enthusiasts together with experienced practitioners and trainers.',
      p1: 'The Syrian AI Community brings students, developers and AI enthusiasts together with experienced practitioners and trainers in a collaborative space that encourages learning, exchanging experiences, developing skills, and working on practical applications and projects.',
      p2: 'We want to make learning AI closer and more accessible to Syrian youth, turning interest in this fast-moving field into clear learning paths and hands-on experiences.',
      chipsTitle: 'One space that brings together',
      chips: ['Students and graduates', 'Developers', 'AI enthusiasts', 'Experts and trainers'],
      more: 'Read our story, vision and goals',
    },
    offer: {
      num: '02',
      kicker: 'How we work',
      title: 'Five tracks that carry knowledge from the classroom into practice',
      sub: 'Workshops, camps, shared experience, project building, and connections that cross borders.',
      more: 'Details of our work tracks',
    },
    program: {
      num: '03',
      kicker: 'A sample of our activities',
      title: 'AI Engineering Camp',
      tag: 'HANDS-ON · 10 SESSIONS · 30 HOURS',
      sub: 'From understanding AI models to building demo-ready, deployable AI products.',
      body: 'An advanced, hands-on training camp for final-year students and graduates of technical majors. It combines model building, AI systems engineering, teamwork, and the development of a final project.',
      cta: 'Full camp details',
    },
    invite: {
      title: 'An invitation to take part',
      body: 'The Syrian AI Community has room for you to learn, contribute and leave a mark, whether you are a student starting out, a developer deepening your expertise, a trainer with an experience worth sharing, or a volunteer who believes in the value of education and collaboration.',
      cta: 'Join us',
    },
  },

  about: {
    intro: {
      num: '01',
      kicker: 'Who we are',
      title: 'Who are we?',
      sub: 'A youth-led initiative driven by a passion for knowledge and a desire to make a real difference.',
      p1: 'The Syrian AI Community brings students, developers and AI enthusiasts together with experienced practitioners and trainers in a collaborative space that encourages learning, exchanging experiences, developing skills, and working on practical applications and projects.',
      p2: 'We want to make learning AI closer and more accessible to Syrian youth, turning interest in this fast-moving field into clear learning paths and hands-on experiences that help participants build their abilities and confidence in their skills.',
      calloutTitle: 'A space that learns and teaches',
      calloutBody:
        'We do not see the community as merely a provider of workshops or training camps. It is an environment that learns and teaches at the same time, where learners find room to grow and trainers find a space to share knowledge and experience and make an impact that reaches beyond the training room.',
      chipsTitle: 'One space that brings together',
      chips: ['Students and graduates', 'Developers', 'AI enthusiasts', 'Experts and trainers'],
    },
    story: {
      num: '02',
      kicker: 'Origin story',
      title: 'A community born out of need',
      sub: 'The idea grew out of a tangible need felt by a wide segment of Syrian youth.',
      cards: [
        { n: 'On one side', title: 'A growing passion for modern technology', body: 'Wide interest among young people in artificial intelligence and its ever-evolving tools.' },
        { n: 'On the other', title: 'Unequal access to', body: 'Hands-on training · mentoring · exposure to the professional experience a fast-moving job market demands.' },
      ],
      p1Html:
        'Given the gap between the opportunities and resources available locally and the requirements and practices of the job market outside Syria, a conviction took shape: <strong>closing this gap starts with building people and empowering them with knowledge, skill and experience.</strong>',
      p2Html:
        'That is where the Syrian AI Community comes from: an initiative <strong>started by young people, working for young people</strong>, that builds bridges of knowledge and experience and connects what students learn at university with what they need to build real projects and take part in professional work environments.',
      calloutTitle: 'Our core idea',
      calloutBody:
        'Geography and limited opportunities should never stand in the way of young people’s ambition. We bring knowledge and practical experience closer to everyone with the desire and readiness to learn and to give.',
    },
    vision: {
      num: '03',
      kicker: 'Vision and mission',
      title: 'Where we are heading, and how',
      visionLabel: 'Our vision',
      visionBody:
        'To be an active Syrian community that empowers a generation of learners, developers and trainers who can keep pace with AI, contribute valuable solutions, and compete with their skills in the local and global job market.',
      missionLabel: 'Our mission',
      missionBody: 'To provide a motivating, inclusive community environment for exchanging knowledge and experience in artificial intelligence, through:',
      missionChips: ['Workshops', 'Training camps', 'Hands-on activities', 'Peer collaboration'],
      helpsTitle: 'So that we can',
      helps: [
        { n: '1', title: 'Develop technical and professional skills' },
        { n: '2', title: 'Support trainers who want to share their experience' },
        { n: '3', title: 'Gradually narrow the gap between education and job-market needs' },
      ],
    },
    goals: {
      num: '04',
      kicker: 'Our goals',
      title: 'Seven goals that guide everything we do',
      items: [
        { n: '1', title: 'Empower youth with knowledge and skills', body: 'Help students and developers understand modern AI techniques and apply them with confidence and competence.' },
        { n: '2', title: 'Narrow the gap between learning and the job market', body: 'Focus on skills that are needed in practice, engineering ways of working, and projects that can be extended and presented.' },
        { n: '3', title: 'Provide hands-on learning opportunities', body: 'Organize workshops, camps and activities that move participants from theory to practice and problem solving.' },
        { n: '4', title: 'Welcome trainers and shared experience', body: 'Open a space for people with knowledge and experience who want to pass it on, and support a culture of peer teaching and knowledge volunteering.' },
        { n: '5', title: 'Build a professional and community network', body: 'Connect students with developers, trainers and experts, and encourage collaboration and the exchange of opportunities and experience.' },
        { n: '6', title: 'Encourage innovation and initiative', body: 'Motivate participants to develop ideas and projects that address real needs and create value for society.' },
        { n: '7', title: 'Promote lifelong learning', body: 'Build a culture that keeps up with the rapid pace of AI and sees learning as a shared journey that does not end when a course does.' },
      ],
    },
    how: {
      num: '05',
      kicker: 'How we reach our goals',
      title: 'Five work tracks that carry knowledge from the classroom into practice',
      tracks: [
        { n: '01', title: 'Technical workshops', body: 'Focused training sessions to discover new concepts and tools, discuss them and try them hands-on, with room for dialogue, questions, and learning from different experiences.' },
        { n: '02', title: 'Hands-on training camps', body: 'More structured and in-depth learning paths that combine theoretical foundations, practical application and projects, building skills step by step.' },
        { n: '03', title: 'Sharing experience', body: 'A platform for specialists, trainers and practitioners to pass on their practical experience, including challenges, mistakes and lessons learned, bringing knowledge closer to professional reality.' },
        { n: '04', title: 'Collaborative learning and project building', body: 'Working in teams, reviewing solutions, exchanging feedback, and developing models and applications that can be presented and counted as tangible experience.' },
      ],
      fifth: {
        n: '05',
        title: 'Connecting and building bridges',
        body: 'Strengthening ties between people interested in AI inside and outside Syria, and drawing on diverse experience to widen learners’ horizons and bring them closer to broader professional practices and standards.',
      },
    },
    who: {
      num: '06',
      kicker: 'Who we serve',
      title: 'Who do we work for?',
      sub: 'The groups we serve and the value we aim to bring to each of them.',
      colA: 'Group',
      colB: 'The value we aim to deliver',
      rows: [
        { a: 'Students and graduates', b: 'Learning and practice paths that support the move from study to professional practice.' },
        { a: 'Developers and tech enthusiasts', b: 'Opportunities to grow skills and explore the fields and applications of AI.' },
        { a: 'Trainers and experts', b: 'A community platform to share knowledge, grow as a trainer, and make a tangible impact.' },
        { a: 'Volunteers and contributors', b: 'A space for initiative, teamwork, and contributing to the community.' },
        { a: 'Partner organizations and initiatives', b: 'Opportunities to collaborate on educational activities and capacity-building projects.' },
      ],
      noteHtml:
        'We welcome different backgrounds and experiences and see their diversity as a source of richness and innovation. There is room in the community for everyone with <strong>the desire and readiness to learn and to give</strong>.',
    },
    values: {
      num: '07',
      kicker: 'Our values',
      title: 'The principles that shape how we work',
      items: [
        { title: 'Open access to knowledge', body: 'The chance to learn and grow should be wider and closer to everyone.' },
        { title: 'Community spirit', body: 'We move forward by helping one another, and we celebrate individual success as a shared success.' },
        { title: 'Practice over theory alone', body: 'We tie what we learn to real problems, projects and experiences.' },
        { title: 'Sharing and giving', body: 'We value the time and expertise of trainers and volunteers, and encourage passing knowledge on.' },
        { title: 'Quality and responsibility', body: 'We care about accurate content, clear expectations, and the conscious, responsible use of technology.' },
        { title: 'Diversity and collaboration', body: 'We welcome different backgrounds and experiences and see them as a source of richness and innovation.' },
        { title: 'Lifelong learning', body: 'We treat technological change as an ongoing opportunity to experiment and renew.' },
      ],
    },
    team: {
      num: '08',
      kicker: 'The team',
      title: 'The people behind the community',
      sub: 'Founders, trainers and volunteers working together to bring knowledge and experience closer to Syrian youth.',
      trainers: {
        title: 'Trainers',
        sub: 'Eight engineers and experts working at local and international companies.',
        items: [
          { initial: 'I', name: 'Eng. Ibrahim Alobaid', bio: 'AI engineer, AI team lead and project manager at Cardiac Rhythm in the United States. Has worked with local and international companies.', url: 'https://linkedin.com/in/ibrahimalobaid44', handle: 'linkedin.com/in/ibrahimalobaid44' },
          { initial: 'O', name: 'Eng. Osama Abou Hajar', bio: 'Software engineer at Microsoft; previously worked on 5G network software at Ericsson. Holds a master’s degree in AI and founded the GitSyria initiative.', url: 'https://linkedin.com/in/oabouhajar', handle: 'linkedin.com/in/oabouhajar' },
          { initial: 'Z', name: 'Eng. Mohammad Zayn Mahrouseh', bio: 'AI engineer and AI team lead at DAWMT in Bahrain, with three years of experience at international companies.', url: 'https://linkedin.com/in/zayn-mahrouseh', handle: 'linkedin.com/in/zayn-mahrouseh' },
          { initial: 'G', name: 'Eng. Mohammad Ghazal Kassas', bio: 'AI engineer at Amani AI, specializing in natural language processing, intelligent systems and AI agents.', url: 'https://linkedin.com/in/mohammad-ghazal-kassas-b65b57292', handle: 'linkedin.com/in/mohammad-ghazal-kassas' },
          { initial: 'Y', name: 'Eng. Yassin Abdulmahdi', bio: 'Lead AI Engineer at BeSmart.ai and lecturer at Al-Sham Private University (ASPU).', url: 'https://linkedin.com/in/yassin-abdulmahdi', handle: 'linkedin.com/in/yassin-abdulmahdi' },
          { initial: 'S', name: 'Eng. Saad Shahrour', bio: 'Founder of Pactonic AI, CTO of Karriya AI in Sweden, and Head of AI at Capital Zone in Portugal.', url: 'https://linkedin.com/in/saad-shahrour', handle: 'linkedin.com/in/saad-shahrour' },
          { initial: 'S', name: 'Eng. Saad Shayah', bio: 'Software engineer at Basira Foundation, specializing in version control systems and software product management.', url: 'https://linkedin.com/in/saad-shayah', handle: 'linkedin.com/in/saad-shayah' },
          { initial: 'H', name: 'Eng. Hussain Saoud', bio: 'Software and AI engineer and technical mentor at FICEP ME, combining data-driven innovation with enabling technical teams to build advanced software solutions.', url: 'https://linkedin.com/in/hussain-saoud', handle: 'linkedin.com/in/hussain-saoud' },
        ],
      },
      soon: 'The founders and the volunteer teams (logistics, media and relations) will be added in the next phase.',
    },
    impact: {
      num: '09',
      kicker: 'Impact and invitation',
      title: 'The impact we aim for',
      sub: 'We measure success by more than the number of sessions or attendees. Real impact shows when:',
      chain: ['Learning', 'becomes a skill', 'becomes a project', 'becomes an opportunity to grow and contribute'],
      aspireTitle: 'We hope the community’s work leads to',
      aspire: [
        'Young people with greater confidence in their technical and practical abilities.',
        'Projects and experiences that reflect applicable learning.',
        'Trainers who find a space to develop their message and pass on their experience.',
        'Lasting collaboration between learners and experts.',
        'A gradual convergence between learning outcomes and the demands of AI work.',
      ],
      invite: {
        title: 'An invitation to take part',
        lead: 'The Syrian AI Community has room for you to learn, contribute and leave a mark, whether you are:',
        chips: ['A student starting out', 'A developer deepening your expertise', 'A trainer with an experience worth sharing', 'A volunteer who believes in education and collaboration'],
        body: 'We believe a better future for technology in Syria does not begin with a single individual step, but with a community that shares knowledge, creates opportunities, and opens the way for those who come next.',
        cta: 'Join us',
      },
    },
  },

  camp: {
    num: '08',
    kicker: 'A sample of our activities',
    title: 'AI Engineering Camp',
    tag: 'HANDS-ON · 10 SESSIONS · 30 HOURS',
    sub: 'From understanding AI models to building demo-ready, deployable AI products.',
    stats: [
      { v: '10', l: 'training sessions', wide: false },
      { v: '30', l: 'hours of training', wide: false },
      { v: '8', l: 'expert trainers', wide: false },
      { v: 'Capstone', l: 'team graduation project', wide: true },
    ],
    introHtml:
      'An advanced, hands-on training camp for final-year students and graduates of technical majors. It combines model building, AI systems engineering, teamwork, and the development of a final project. Its goal is to take participants from academic knowledge and isolated experiments in Jupyter Notebooks to <strong>building complete solutions with practical value</strong>, using ways of working close to real product development environments.',
    method: { title: 'Camp methodology', steps: ['Understand', 'Apply', 'Build the project'] },
    prereq: {
      title: 'Prerequisites',
      body: 'The camp is not for complete beginners. Familiarity with Python, programming basics and machine learning concepts is recommended, along with the ability to learn and practice independently between sessions.',
    },
    audience: {
      title: 'Who it is for',
      items: [
        'Final-year students in informatics engineering, telecommunications engineering and related majors.',
        'Graduates aiming to work in AI engineering.',
        'Developers who know Python and ML/DL basics and want to move on to building practical systems and products.',
      ],
    },
    path: {
      title: 'Learning path',
      sub: 'Four progressive stages · ten sessions · thirty hours',
      phases: [
        { n: '1', name: 'Foundations', when: 'Session 1', body: 'Engineering tools, collaboration and code management.' },
        { n: '2', name: 'Models', when: 'Sessions 2–5', body: 'Machine learning, deep learning, computer vision, natural language processing.' },
        { n: '3', name: 'Systems', when: 'Sessions 6–9', body: 'LLM engineering, AI-assisted coding, agents, voice and multimodal systems.' },
        { n: '4', name: 'Product', when: 'Session 10', body: 'Deployment, evaluation and the final demo.' },
      ],
    },
    sessions: {
      title: 'The ten sessions',
      cols: { n: '#', s: 'Session', o: 'Key practical outcomes' },
      rows: [
        { n: '01', s: 'Git, GitHub & AI Engineer Workflow', o: 'Set up the environment, manage branches, open a first Pull Request and resolve a merge conflict.' },
        { n: '02', s: 'Machine Learning: Fundamentals → Product', o: 'An end-to-end prediction model with FastAPI, Streamlit and Docker.' },
        { n: '03', s: 'Deep Learning: From Scratch → PyTorch', o: 'A neural network from scratch, then a PyTorch application with training curves and performance analysis.' },
        { n: '04', s: 'Computer Vision: Classical → Detection & Tracking', o: 'An image classification model and a hands-on object detection and video tracking exercise.' },
        { n: '05', s: 'NLP & Transformers', o: 'Fine-tune a BERT model for named entity recognition (NER) and evaluate it.' },
        { n: '06', s: 'LLM Engineering: APIs, Prompting & RAG', o: 'A RAG assistant over the camp’s documents with a user interface.' },
        { n: '07', s: 'AI-Assisted Coding: Copilot, Claude Code & Codex', o: 'Develop a feature with an agent and submit a PR with review and tests.' },
        { n: '08', s: 'Agentic AI: Tools, MCP & Multi-Agent Systems', o: 'An agent that uses tools and an MCP server, with traces of successes and failures.' },
        { n: '09', s: 'Voice & Multimodal Agents with Pipecat', o: 'An interactive voice assistant, with visual input where possible.' },
        { n: '10', s: 'Production, Evaluation & Demo Day', o: 'CI/CD, deployment and monitoring basics, then the final project demos.' },
      ],
    },
    capstone: {
      title: 'Capstone Project',
      ideaTitle: 'The core idea',
      ideaHtml: 'Participants work in teams to build <strong>a runnable, demo-ready AI product</strong> that addresses a clear problem and demonstrates design, implementation, evaluation and documentation skills.',
      examplesTitle: 'Suggested project ideas',
      examples: ['A source-cited research assistant', 'A RAG-based study assistant', 'A data extraction system for Arabic documents', 'A voice-based English learning assistant', 'A computer vision application'],
      principleTitle: 'Design principle',
      principle: 'RAG, agents or voice AI are not required in every project. The architecture must start from the needs of the problem, not from a wish to stack as many technologies as possible.',
      milestonesTitle: 'Project milestones',
      milestones: [
        { when: 'End of session 06', what: 'Form teams, pick a problem, and submit a short proposal.' },
        { when: 'Session 07', what: 'Design the solution and start development with AI coding tools.' },
        { when: 'Session 08', what: 'Integrate AI capabilities, tools or agents where needed.' },
        { when: 'Session 09', what: 'Finish integration and experiments; add voice or multimodal input if it suits the project.' },
        { when: 'Session 10 · Demo Day', what: 'Testing, the final demo, and a discussion of the engineering decisions.' },
      ],
    },
    training: {
      title: 'Training and evaluation',
      sub: 'Learning by building and reviewing, as in real work environments.',
      methods: [
        { title: 'Focused explanation', body: 'The essential concepts and engineering decisions.' },
        { title: 'Live Coding', body: 'Building a core part of the project in front of participants.' },
        { title: 'Pair Lab', body: 'Group practice to solve a problem or complete a feature.' },
        { title: 'Homework', body: 'Assignments submitted as Pull Requests to the camp repository.' },
        { title: 'Code Review', body: 'Practical feedback on the quality of the implementation.' },
        { title: 'Demo Day', body: 'The final project is evaluated on idea, implementation, quality of results, documentation and presentation.' },
      ],
      timelineTitle: 'Typical structure of a 3-hour session',
      timelineNote: 'The rhythm is adjusted for shorter sessions.',
      timelineAria: 'Session breakdown: 15 minutes review, 45 minutes concepts, 10 minutes break, 60 minutes live build, 30 minutes pair lab, 10 minutes wrap-up and assignment',
      segments: [
        { label: '15 min · Review', pct: 8.8, color: '#2d6a7c' },
        { label: '45 min · Concepts', pct: 26.5, color: '#1da4b8' },
        { label: '10 min · Break', pct: 5.9, color: 'rgba(255,255,255,.22)' },
        { label: '60 min · Live build', pct: 35.3, color: '#5bc8da' },
        { label: '30 min · Pair lab', pct: 17.6, color: '#135264' },
        { label: '10 min · Wrap-up & assignment', pct: 5.9, color: '#cfe8eb' },
      ],
      criteriaTitle: 'Final project evaluation criteria',
      criteria: ['Idea', 'Implementation', 'Quality of results', 'Documentation', 'Presentation'],
    },
    outcomes: {
      title: 'Outcomes and hiring',
      abilitiesTitle: 'By the end of the camp, participants are expected to be able to',
      abilities: [
        'Choose the right model or technical approach for a problem, then train and evaluate it.',
        'Turn models into services and applications using APIs and user interfaces.',
        'Build applications based on LLMs, RAG and AI agents.',
        'Use AI-assisted coding tools effectively and responsibly, with code review and testing.',
        'Collaborate using Git, GitHub and Pull Requests.',
        'Apply the basics of deployment, monitoring, evaluation and security.',
        'Deliver a documented, runnable technical project that strengthens their professional profile.',
      ],
      outputsTitle: 'Expected deliverables',
      outputs: [
        'A GitHub repository with the assignments and practical applications.',
        'Hands-on experience building models and turning them into services.',
        'Practical applications in RAG, agents and voice AI.',
        'Experience writing requirements, using coding agents, and reviewing their output.',
        'A documented capstone project with setup instructions, evaluation results and a demo.',
        'Technical material to showcase in a GitHub portfolio and on LinkedIn.',
      ],
      hiringTitle: 'Referrals to companies with a personal recommendation',
      hiringBody: 'We have coordinated with a number of companies to refer camp graduates for employment.',
    },
    trainers: {
      title: 'Trainers',
      body: 'The camp is led by eight engineers and experts working at local and international companies. Meet them on the team page.',
      cta: 'Meet the trainers',
    },
  },

  follow: {
    kicker: 'Follow us',
    title: 'Join our community',
    sub: 'Follow our activities, workshops and camps, and share your experience on social media.',
    links: [
      { icon: 'linkedin', name: 'LinkedIn', platform: '', handle: 'syrian-ai-community', href: 'https://www.linkedin.com/company/syrian-ai-community/' },
      { icon: 'facebook', name: 'Facebook', platform: '', handle: 'facebook.com/saic.syria', href: 'https://www.facebook.com/saic.syria' },
      { icon: 'instagram', name: 'Instagram', platform: '', handle: '@syrianaicommunity', href: 'https://www.instagram.com/syrianaicommunity' },
      { icon: 'youtube', name: 'YouTube', platform: '', handle: '@syaic', href: 'https://www.youtube.com/@syaic' },
    ],
    contactTitle: 'Contact and partnerships',
    email: 'syrianaicommunity@gmail.com',
    linkedinText: 'linkedin.com/company/syrian-ai-community',
    linkedinHref: 'https://www.linkedin.com/company/syrian-ai-community/',
    siteText: 'syrianai.org',
  },

  footer: {
    motto: 'Learn together · Share experience · Build opportunities',
    tag: 'CONNECTING SYRIAN MINDS · BUILDING THE FUTURE OF AI',
    copy: '© 2026 Syrian AI Community (SAIC)',
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    body: 'The link may have changed or the page was removed. You can go back to the home page.',
    cta: 'Home page',
  },
};
