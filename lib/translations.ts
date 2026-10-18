export const translations = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Réalisations",
      skills: "Technologies",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut, je suis",
      name: "Yosr Joulek",
      title: "Développeuse Full-Stack",
      subtitle: "Je conçois et développe des expériences web modernes — du concept au déploiement.",
      cta: "Voir mes projets",
      available: "Disponible pour de nouvelles opportunités",
    },
    about: {
      label: "À propos de moi",
      title: "Passionnée par le code & l'IA",
      p1: "Développeuse full-stack passionnée par la création de produits web modernes et l’intégration de l’IA. À travers mes stages, missions freelance et projets personnels, j’ai travaillé sur des applications web, des plateformes intelligentes et des solutions métier, du concept au déploiement.",
      p2: "1er Prix national d’innovation éducative par l’IA, avec le projet YnityLearn, également présenté à la conférence internationale ICAISE 2025.",
      stats: [
        { value: "3+", label: "Projets réalisés" },
        { value: "1er", label: "Prix national IA" },
        { value: "5", label: "Stages & missions freelance" },
      ],
    },
    projects: {
      label: "Réalisations",
      title: "Projets récents",
      items: [
        {
          title: "Site Web du Challenge IA & Génie Civil",
          desc: "Conception, développement et déploiement du site officiel de la compétition, avec gestion des rôles, soumission des projets et suivi des évaluations.",
          tags: ["Next.js", "Express.js", "Node.js", "MongoDB"],
          type: "Projet Freelance",
          image: "/ia-gc-challenge.png",
          demoUrl: "https://ia-gc-challenge.tn/",
          codeUrl: "",
        },
        {
          title: "Optylab — Recrutement propulsé par l'IA",
          desc: "Application web de recrutement avec analyse de CV et matching de candidats par IA, du développement au déploiement.",
          tags: ["Next.js", "Node.js", "FastAPI", "MongoDB", "Docker", "Groq API", "LLMs"],
          type: "Stage PFE",
          image: "/optylab.png",
          demoUrl: "https://recrutement.optylab.com/",
          codeUrl: "",
        },
        {
          title: "MTR — Portail client multilingue",
          desc: "Application web multilingue avec portail client sécurisé, gestion de devis, axée performance et SEO.",
          tags: ["Next.js 15", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "SEO"],
          type: "Freelance",
          image: "/mtr.png",
          demoUrl: "https://mtr-ressorts.tn/",
          codeUrl: "",
        },
        {
          title: "SBTF — Refonte ERP",
          desc: "Refonte de l'interface d'une application ERP avec des composants React réutilisables, améliorant l'expérience utilisateur et utilisée exclusivement en interne.",
          tags: ["React.js", "Tailwind CSS"],
          type: "Freelance",
          image: "/sbtf.png",
          demoUrl: "",
          codeUrl: "",
        }



      ],
      viewCode: "Code",
      viewDemo: "Démo",
      noLink: "Lien à venir",
    },
    skills: {
      label: "Technologies",
      title: "Mon stack technique",
      categories: [
        {
          name: "Frontend",
          items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3"]
        },
        {
          name: "Backend",
          items: ["Node.js", "Express.js", "Hono.js", "FastAPI", "Flask", "Spring Boot", "Symfony", ".NET"]
        },
        {
          name: "Databases",
          items: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
          name: "AI & DevOps",
          items: ["LLM APIs", "AI Agents", "Prompt Engineering", "Docker", "Docker Compose", "Git"]
        },
        {
          name: "Testing",
          items: ["Jest", "Cypress", "Vitest", "Pytest"]
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Travaillons ensemble",
      subtitle: "Un projet en tête ? Je serais ravie d'en discuter. Envoyez-moi un message.",
      subtitle2: "La meilleure façon de prédire l'avenir, c'est de le créer.",
      name: "Nom",
      email: "Email",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Décrivez votre projet...",
      send: "Envoyer le message",
      sending: "Envoi...",
      success: "Message envoyé ! Je vous réponds sous 24h.",
      orReach: "Ou retrouvez-moi sur",
    },
    footer: {
      made: "Conçu & développé par",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm",
      name: "Yosr Joulek",
      title: "Full-Stack Developer",
      subtitle: "I design and build modern web experiences — from concept to deployment.",
      cta: "View my work",
      ctaContact: "Get in touch",
      available: "Open to new opportunities",
    },
    about: {
      label: "About me",
      title: "Passionate about code & AI",
      p1: "Full-stack developer passionate about building modern web products and integrating AI. Through internships, freelance projects, and personal projects, I have worked on web applications, intelligent platforms, and business solutions, from concept to deployment.",
      p2: "1st National Prize for AI-powered educational innovation, with the YnityLearn project, also presented at the ICAISE 2025 international conference.",
      stats: [
        { value: "3+", label: "Projects built" },
        { value: "1st", label: "National AI Prize" },
        { value: "5", label: "Internships & freelance gigs" },
      ],
    },
    projects: {
      label: "Work",
      title: "Recent projects",
      items: [
        {
          title: "IA & Civil Engineering Challenge Website",
          desc: "Developed and deployed the official competition website, featuring role-based access, team submissions, and project evaluation workflows.",
          tags: ["Next.js", "Express.js", "Node.js", "MongoDB"],
          type: "Freelance Project",
          image: "/ia-gc-challenge.png",
          demoUrl: "https://ia-gc-challenge.tn/",
          codeUrl: "",
        },

        {
          title: "Optylab — AI-Powered Recruitment",
          desc: "Web application for AI-powered recruitment with CV analysis and candidate matching, built end-to-end from development to deployment.",
          tags: ["Next.js", "Node.js", "FastAPI", "MongoDB", "Docker", "Groq API", "LLMs", "Vitest", "Pytest", "Cypress"],
          type: "Final-year internship",
          image: "/optylab.png",
          demoUrl: "https://recrutement.optylab.com/",
          codeUrl: "",
        },

        {
          title: "MTR — Multilingual Client Portal",
          desc: "Multilingual web app with a secure client portal and quote management, built with a focus on performance and SEO.",
          tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "SEO"],
          type: "Freelance",
          image: "/mtr.png",
          demoUrl: "https://mtr-ressorts.tn/",
          codeUrl: "",
        },
        {
          title: "SBTF — ERP Redesign",
          desc: "Redesigned an ERP web application's interface with reusable React components, improving the overall user experience and used exclusively internally.",
          tags: ["React.js", "Tailwind CSS"],
          type: "Freelance",
          image: "/sbtf.png",
          demoUrl: "",
          codeUrl: "",
        },


      ],
      viewCode: "Code",
      viewDemo: "Demo",
      noLink: "Link coming soon",
    },
    skills: {
      label: "Skills",
      title: "My tech stack",
      categories: [
        {
          name: "Frontend",
          items: ["React.js", "Next.js", "Tailwind CSS", "HTML5 / CSS3"]
        },
        {
          name: "Backend",
          items: ["Node.js", "Express.js", "Hono.js", "FastAPI", "Flask", "Spring Boot", "Symfony", ".NET"]
        },
        {
          name: "Databases",
          items: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
          name: "AI & DevOps",
          items: ["LLM APIs", "AI Agents", "Prompt Engineering", "Docker", "Docker Compose", "Git"]
        },
        {
          name: "Testing",
          items: ["Jest", "Cypress", "Vitest", "Pytest"]
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      subtitle: "Have a project in mind? I'd love to hear about it. Send me a message.",
      subtitle2: "The best way to predict the future is to create it.",

      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Describe your project...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you within 24h.",
      orReach: "Or find me on",
    },
    footer: {
      made: "Designed & built by",
      rights: "All rights reserved.",
    },
  },
};

export type Lang = "fr" | "en";
export type Translations = typeof translations.fr;