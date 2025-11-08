"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Disponível para Colaboração",
    "hero.title1": "Eu destruo bugs",
    "hero.title2": "e construo",
    "hero.title3": "soluções",
    "hero.title4": "",
    "hero.description": "Analista de QA na",
    "hero.description2": "• Transformando caos em qualidade através de testes automatizados, mentoria e liderança técnica",
    "hero.cta1": "Vamos Construir Qualidade Juntos",
    "hero.cta2": "Ver Meu Trabalho",

    // About
    "about.title": "Sobre",
    "about.titleHighlight": "Mim",
    "about.subtitle": "Transformando qualidade de software através de automação, inovação e colaboração",
    "about.heading": "Minha Jornada em Quality Assurance",
    "about.p1": "Sou um",
    "about.p1Role": "Analista de Quality Assurance",
    "about.p1Company": "atualmente trabalhando na",
    "about.p1Rest": "onde faço parte da equipe de suporte, validando relatórios de bugs de produção e aprovando correções. Com uma sólida formação em Ciência da Computação pela UFMG e treinamento especializado em Gestão da Qualidade de Software, construí uma carreira focada em garantir excelência em software.",
    "about.p2": "Minha paixão vai além de apenas encontrar bugs—é sobre",
    "about.p2Highlight": "entregar produtos impecáveis",
    "about.p2Rest": "que excedem expectativas. Combino expertise técnica com profundo entendimento da experiência do usuário e necessidades de negócio.",
    "about.p3": "De",
    "about.p3Highlight1": "testes de API com Postman e Swagger",
    "about.p3To": "a",
    "about.p3Highlight2": "automação com Selenide e Rest Assured",
    "about.p3Rest": "trabalhei com frameworks BDD e colaborei estreitamente com equipes de desenvolvimento usando uma abordagem de testes shift-left.",
    
    "about.highlight1.title": "Excelência Técnica",
    "about.highlight1.desc": "Expertise em testes de API, E2E e mobile usando ferramentas de automação de ponta",
    "about.highlight2.title": "Mentoria & Liderança",
    "about.highlight2.desc": "Apaixonado por compartilhar conhecimento através de mentoria, palestras e conteúdo educacional",
    "about.highlight3.title": "Mentalidade Quality-First",
    "about.highlight3.desc": "Graduado em Ciência da Computação pela UFMG com pós-graduação em Gestão da Qualidade de Software",
    "about.highlight4.title": "Aprendizado Contínuo",
    "about.highlight4.desc": "Sempre explorando novos frameworks de teste e melhores práticas em garantia de qualidade",
    
    "about.stat1": "Anos de Experiência",
    "about.stat2": "Projetos Entregues",
    "about.stat3": "Tecnologias Dominadas",
    "about.stat4": "Compromisso com Qualidade",

    // Experience
    "exp.title": "Jornada",
    "exp.titleHighlight": "Profissional",
    "exp.subtitle": "Uma linha do tempo de crescimento, aprendizado e impacto em garantia de qualidade",
    "exp.current": "Cargo Atual",
    
    "exp.job1.company": "Zig. The Global Funtech",
    "exp.job1.role": "Analista de Quality Assurance",
    "exp.job1.period": "Abr 2025 - Presente",
    "exp.job1.location": "Remoto",
    "exp.job1.desc": "Parte da equipe de suporte, validando relatórios de bugs de produção e aprovando correções",
    "exp.job1.item1": "Realização de testes manuais, automatizados, mobile (Appium) e de API",
    "exp.job1.item2": "Desenvolvimento de testes automatizados usando TypeScript, Pactum e Mocha",
    "exp.job1.item3": "Coleta de evidências de teste e geração de relatórios usando Allure",
    "exp.job1.item4": "Revisão e refatoração de código de teste automatizado escrito por outros membros da equipe",
    "exp.job1.item5": "Utilização de ferramentas como ClickUp, Postman e outras soluções para suportar validação e organização de tarefas",

    "exp.job2.company": "Base2 Tecnologia",
    "exp.job2.role": "Analista de Automação de Testes",
    "exp.job2.period": "Out 2023 - Abr 2025",
    "exp.job2.location": "Belo Horizonte, MG",
    "exp.job2.desc": "Liderando iniciativas de automação de qualidade para aplicações bancárias",
    "exp.job2.item1": "Ponto focal para demandas relacionadas a Cheque, implementando automação com Rest Assured",
    "exp.job2.item2": "Liderando automação de testes frontend usando Selenide",
    "exp.job2.item3": "Monitoramento diário de testes de regressão, identificando problemas de ambiente e melhorias de performance",
    "exp.job2.item4": "Colaborando com equipes multifuncionais para implementar práticas de testes shift-left",

    "exp.job3.company": "OPUS Software",
    "exp.job3.role": "Engenheiro de Quality Assurance III",
    "exp.job3.period": "Jun 2023 - Out 2023",
    "exp.job3.location": "Remoto",
    "exp.job3.desc": "Focado em demandas regulatórias para Open Finance e Open Insurance",
    "exp.job3.item1": "Planejamento e execução de testes abrangentes de API usando Postman e Swagger",
    "exp.job3.item2": "Criação de cenários de teste automatizados usando framework Gherkin/BDD",
    "exp.job3.item3": "Participação ativa em sessões de planejamento com equipes de desenvolvimento",

    "exp.job4.company": "OPUS Software",
    "exp.job4.role": "Engenheiro de Quality Assurance II",
    "exp.job4.period": "Nov 2022 - Jun 2023",
    "exp.job4.location": "Remoto",
    "exp.job4.desc": "Continuação do trabalho em projetos de Open Finance e Open Insurance",
    "exp.job4.item1": "Criação de relatórios detalhados de teste e documentação",
    "exp.job4.item2": "Implementação de práticas de testes BDD com sintaxe Gherkin",
    "exp.job4.item3": "Mentoria de engenheiros de QA juniores sobre melhores práticas de teste",

    "exp.job5.company": "OPUS Software",
    "exp.job5.role": "Engenheiro de Quality Assurance I",
    "exp.job5.period": "Fev 2022 - Nov 2022",
    "exp.job5.location": "Remoto",
    "exp.job5.desc": "Trabalho em projetos para BRK Ambiental e PagBem",
    "exp.job5.item1": "Realização de testes de API, E2E e mobile usando metodologias Ágeis",
    "exp.job5.item2": "Manutenção de framework de automação de testes usando Appium",
    "exp.job5.item3": "Utilização de Jira e Zephyr para documentação de testes",

    "exp.job6.company": "Synergia",
    "exp.job6.role": "Analista de Desenvolvimento Júnior",
    "exp.job6.period": "Out 2021 - Jan 2022",
    "exp.job6.location": "Belo Horizonte, MG",
    "exp.job6.desc": "Desenvolvimento para o Portal de Compras do Estado de Minas Gerais",
    "exp.job6.item1": "Desenvolvimento de funcionalidades para o sistema de leilões",
    "exp.job6.item2": "Trabalho com Java, React, Spring e Hibernate",

    "exp.edu1.title": "Especialização em Pós-Graduação",
    "exp.edu1.course": "Gestão da Qualidade de Software",
    "exp.edu1.institution": "Faculdade UniBF • Mai 2022 - Set 2022",
    "exp.edu2.title": "Bacharelado em Ciência da Computação",
    "exp.edu2.course": "Universidade Federal de Minas Gerais (UFMG)",
    "exp.edu2.institution": "2016 - 2021",

    // Skills
    "skills.title": "Arsenal",
    "skills.titleHighlight": "Técnico",
    "skills.subtitle": "Um kit de ferramentas abrangente para garantir qualidade e confiabilidade de software",
    "skills.cat1": "Automação de Testes",
    "skills.cat2": "Linguagens de Programação",
    "skills.cat3": "Testes de API",
    "skills.cat4": "BDD & Frameworks",
    "skills.cat5": "Testes Mobile",
    "skills.cat6": "CI/CD & DevOps",
    "skills.cat7": "Ferramentas & Plataformas",
    "skills.cat8": "Metodologias",
    "skills.cert.title": "Certificações & Cursos",
    "skills.lang.english": "Inglês",
    "skills.lang.englishLevel": "Proficiência Profissional",
    "skills.lang.portuguese": "Português",
    "skills.lang.portugueseLevel": "Nativo",

    // Projects
    "projects.title": "Projetos em",
    "projects.titleHighlight": "Destaque",
    "projects.subtitle": "Frameworks de automação e soluções de teste do mundo real",
    "projects.cta": "Quer ver mais? Confira meu GitHub para projetos adicionais e contribuições.",
    "projects.viewGithub": "Ver Perfil do GitHub",

    // Contact
    "contact.title": "Vamos",
    "contact.titleHighlight": "Conectar",
    "contact.subtitle": "Tem um projeto em mente ou quer discutir garantia de qualidade? Adoraria ouvir você!",
    "contact.getInTouch": "Entre em Contato",
    "contact.intro": "Estou sempre aberto para discutir novas oportunidades, colaborações, ou apenas ter uma conversa sobre garantia de qualidade e automação de testes. Se você tem uma pergunta ou apenas quer dizer oi, entrarei em contato o mais rápido possível!",
    "contact.location": "Localização",
    "contact.locationValue": "Belo Horizonte, Minas Gerais, Brasil",
    "contact.email": "Email",
    "contact.phone": "Telefone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.ctaTitle": "Pronto para Colaborar?",
    "contact.ctaDesc": "Vamos trabalhar juntos para construir software de qualidade que faça a diferença. Estou disponível para projetos freelance, consultoria ou oportunidades em tempo integral.",
    "contact.ctaButton": "Enviar Email",
    "contact.formName": "Seu Nome",
    "contact.formEmail": "Seu Email",
    "contact.formSubject": "Assunto",
    "contact.formMessage": "Sua Mensagem",
    "contact.formSubmit": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.successMessage": "✨ Mensagem enviada com sucesso! Entrarei em contato em breve.",
    "contact.errorMessage": "❌ Erro ao enviar mensagem. Por favor, tente novamente ou me contate diretamente por email.",
    "contact.connectWith": "Conecte-se Comigo",

    // Footer
    "footer.brand": "Analista de Automação de Testes dedicado a construir software de qualidade através de soluções de teste inovadoras e melhoria contínua.",
    "footer.quickLinks": "Links Rápidos",
    "footer.aboutMe": "Sobre Mim",
    "footer.connect": "Conecte-se Comigo",
    "footer.openTo": "Aberto para oportunidades freelance e colaborações.",
    "footer.rights": "© 2025 Enok Rocha. Todos os direitos reservados.",
    "footer.builtWith": "Construído com",
    "footer.using": "usando Next.js, React & Tailwind CSS",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Available for Collaboration",
    "hero.title1": "I destroy bugs",
    "hero.title2": "and build",
    "hero.title3": "solutions",
    "hero.title4": "",
    "hero.description": "Quality Assurance Analyst at",
    "hero.description2": "• Transforming chaos into quality through automated testing, mentorship, and technical leadership",
    "hero.cta1": "Let's Build Quality Together",
    "hero.cta2": "View My Work",

    // About
    "about.title": "About",
    "about.titleHighlight": "Me",
    "about.subtitle": "Transforming software quality through automation, innovation, and collaboration",
    "about.heading": "My Journey in Quality Assurance",
    "about.p1": "I'm a",
    "about.p1Role": "Quality Assurance Analyst",
    "about.p1Company": "currently working at",
    "about.p1Rest": "where I'm part of the support team, validating production bug reports and approving fixes. With a solid foundation in Computer Science from UFMG and specialized training in Software Quality Management, I've built a career focused on ensuring software excellence.",
    "about.p2": "My passion goes beyond just finding bugs—it's about",
    "about.p2Highlight": "delivering seamless products",
    "about.p2Rest": "that exceed expectations. I combine technical expertise with a deep understanding of user experience and business needs.",
    "about.p3": "From",
    "about.p3Highlight1": "API testing with Postman and Swagger",
    "about.p3To": "to",
    "about.p3Highlight2": "automation with Selenide and Rest Assured",
    "about.p3Rest": "I've worked with BDD frameworks and collaborated closely with development teams using a shift-left testing approach.",
    
    "about.highlight1.title": "Technical Excellence",
    "about.highlight1.desc": "Expertise in API, E2E, and mobile testing using cutting-edge automation tools",
    "about.highlight2.title": "Mentorship & Leadership",
    "about.highlight2.desc": "Passionate about sharing knowledge through mentoring, talks, and educational content",
    "about.highlight3.title": "Quality-First Mindset",
    "about.highlight3.desc": "Computer Science graduate from UFMG with post-grad in Software Quality Management",
    "about.highlight4.title": "Continuous Learning",
    "about.highlight4.desc": "Always exploring new testing frameworks and best practices in quality assurance",
    
    "about.stat1": "Years Experience",
    "about.stat2": "Projects Delivered",
    "about.stat3": "Technologies Mastered",
    "about.stat4": "Commitment to Quality",

    // Experience
    "exp.title": "Professional",
    "exp.titleHighlight": "Journey",
    "exp.subtitle": "A timeline of growth, learning, and impact in quality assurance",
    "exp.current": "Current Role",
    
    "exp.job1.company": "Zig. The Global Funtech",
    "exp.job1.role": "Quality Assurance Analyst",
    "exp.job1.period": "Apr 2025 - Present",
    "exp.job1.location": "Remote",
    "exp.job1.desc": "Part of the support team, validating production bug reports and approving fixes",
    "exp.job1.item1": "Performed manual, automated, mobile (Appium), and API testing",
    "exp.job1.item2": "Developed automated tests using TypeScript, Pactum, and Mocha",
    "exp.job1.item3": "Collected test evidence and generated reports using Allure",
    "exp.job1.item4": "Reviewed and refactored automated test code written by other team members",
    "exp.job1.item5": "Utilized tools such as ClickUp, Postman, and other solutions to support validation and task organization",

    "exp.job2.company": "Base2 Tecnologia",
    "exp.job2.role": "Test Automation Analyst",
    "exp.job2.period": "Oct 2023 - Apr 2025",
    "exp.job2.location": "Belo Horizonte, MG",
    "exp.job2.desc": "Leading quality automation initiatives for banking applications",
    "exp.job2.item1": "Focal point for Cheque-related demands, implementing automation with Rest Assured",
    "exp.job2.item2": "Leading frontend test automation using Selenide",
    "exp.job2.item3": "Daily monitoring of regression tests, identifying environment issues and performance improvements",
    "exp.job2.item4": "Collaborating with cross-functional teams to implement shift-left testing practices",

    "exp.job3.company": "OPUS Software",
    "exp.job3.role": "Quality Assurance Engineer III",
    "exp.job3.period": "Jun 2023 - Oct 2023",
    "exp.job3.location": "Remote",
    "exp.job3.desc": "Focused on regulatory demands for Open Finance and Open Insurance",
    "exp.job3.item1": "Planned and executed comprehensive API tests using Postman and Swagger",
    "exp.job3.item2": "Created automated test scenarios using Gherkin/BDD framework",
    "exp.job3.item3": "Actively participated in planning sessions with development teams",

    "exp.job4.company": "OPUS Software",
    "exp.job4.role": "Quality Assurance Engineer II",
    "exp.job4.period": "Nov 2022 - Jun 2023",
    "exp.job4.location": "Remote",
    "exp.job4.desc": "Continued work on Open Finance and Open Insurance projects",
    "exp.job4.item1": "Created detailed test reports and documentation",
    "exp.job4.item2": "Implemented BDD testing practices with Gherkin syntax",
    "exp.job4.item3": "Mentored junior QA engineers on testing best practices",

    "exp.job5.company": "OPUS Software",
    "exp.job5.role": "Quality Assurance Engineer I",
    "exp.job5.period": "Feb 2022 - Nov 2022",
    "exp.job5.location": "Remote",
    "exp.job5.desc": "Worked on projects for BRK Ambiental and PagBem",
    "exp.job5.item1": "Conducted API, E2E, and mobile testing using Agile methodologies",
    "exp.job5.item2": "Maintained test automation framework using Appium",
    "exp.job5.item3": "Used Jira and Zephyr for test documentation",

    "exp.job6.company": "Synergia",
    "exp.job6.role": "Junior Development Analyst",
    "exp.job6.period": "Oct 2021 - Jan 2022",
    "exp.job6.location": "Belo Horizonte, MG",
    "exp.job6.desc": "Development for the State of Minas Gerais Procurement Portal",
    "exp.job6.item1": "Developed features for the auction system",
    "exp.job6.item2": "Worked with Java, React, Spring, and Hibernate",

    "exp.edu1.title": "Post-Graduate Specialization",
    "exp.edu1.course": "Software Quality Management",
    "exp.edu1.institution": "Faculdade UniBF • May 2022 - Sep 2022",
    "exp.edu2.title": "BSc Computer Science",
    "exp.edu2.course": "Federal University of Minas Gerais (UFMG)",
    "exp.edu2.institution": "2016 - 2021",

    // Skills
    "skills.title": "Technical",
    "skills.titleHighlight": "Arsenal",
    "skills.subtitle": "A comprehensive toolkit for ensuring software quality and reliability",
    "skills.cat1": "Test Automation",
    "skills.cat2": "Programming Languages",
    "skills.cat3": "API Testing",
    "skills.cat4": "BDD & Frameworks",
    "skills.cat5": "Mobile Testing",
    "skills.cat6": "CI/CD & DevOps",
    "skills.cat7": "Tools & Platforms",
    "skills.cat8": "Methodologies",
    "skills.cert.title": "Certifications & Courses",
    "skills.lang.english": "English",
    "skills.lang.englishLevel": "Professional Working Proficiency",
    "skills.lang.portuguese": "Portuguese",
    "skills.lang.portugueseLevel": "Native Speaker",

    // Projects
    "projects.title": "Featured",
    "projects.titleHighlight": "Projects",
    "projects.subtitle": "Real-world automation frameworks and testing solutions",
    "projects.cta": "Want to see more? Check out my GitHub for additional projects and contributions.",
    "projects.viewGithub": "View GitHub Profile",

    // Contact
    "contact.title": "Let's",
    "contact.titleHighlight": "Connect",
    "contact.subtitle": "Have a project in mind or want to discuss quality assurance? I'd love to hear from you!",
    "contact.getInTouch": "Get in Touch",
    "contact.intro": "I'm always open to discussing new opportunities, collaborations, or just having a conversation about quality assurance and testing automation. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!",
    "contact.location": "Location",
    "contact.locationValue": "Belo Horizonte, Minas Gerais, Brazil",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.ctaTitle": "Ready to Collaborate?",
    "contact.ctaDesc": "Let's work together to build quality software that makes a difference. I'm available for freelance projects, consulting, or full-time opportunities.",
    "contact.ctaButton": "Send Email",
    "contact.formName": "Your Name",
    "contact.formEmail": "Your Email",
    "contact.formSubject": "Subject",
    "contact.formMessage": "Your Message",
    "contact.formSubmit": "Send Message",
    "contact.sending": "Sending...",
    "contact.successMessage": "✨ Message sent successfully! I'll get back to you soon.",
    "contact.errorMessage": "❌ Error sending message. Please try again or contact me directly via email.",
    "contact.connectWith": "Connect with me",

    // Footer
    "footer.brand": "Test Automation Analyst dedicated to building quality software through innovative testing solutions and continuous improvement.",
    "footer.quickLinks": "Quick Links",
    "footer.aboutMe": "About Me",
    "footer.connect": "Connect With Me",
    "footer.openTo": "Open to freelance opportunities and collaborations.",
    "footer.rights": "© 2025 Enok Rocha. All rights reserved.",
    "footer.builtWith": "Built with",
    "footer.using": "using Next.js, React & Tailwind CSS",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

