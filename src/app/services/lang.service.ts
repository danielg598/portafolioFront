import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

export interface Translations {
  navAbout: string; navServices: string; navProjects: string; navContact: string;
  langLabel: string;
  heroGreeting: string; heroRole: string; heroTagline: string;
  heroCta: string; heroCtaSecondary: string;
  photoPlaceholder: string;
  sectionAbout: string; aboutLine1: string; aboutLine2: string;
  aboutText1: string; aboutText2: string;
  statYears: string; statTech: string; statLearning: string; statCommit: string;
  sectionStack: string; stackHeading: string; stackSubtitle: string;
  sectionServices: string; servicesHeading: string; servicesSubtitle: string;
  service1Title: string; service1Desc: string;
  service2Title: string; service2Desc: string;
  service3Title: string; service3Desc: string;
  service4Title: string; service4Desc: string;
  sectionProjects: string; projectsHeading: string; projectsSubtitle: string;
  projectsComingSoon: string;
  projectPlaceholder1: string; projectPlaceholder2: string; projectPlaceholder3: string;
  sectionContact: string; contactHeading: string; contactText: string;
  contactCta: string; contactEmail: string;
  footerCopy: string;
}

const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    navAbout: 'Sobre Mí', navServices: 'Servicios', navProjects: 'Proyectos', navContact: 'Contacto',
    langLabel: 'EN',
    heroGreeting: 'Hola, soy',
    heroRole: 'Desarrollador de Software',
    heroTagline: 'No solo escribo código; construyo soluciones que transforman problemas en oportunidades.',
    heroCta: 'Hablemos por WhatsApp',
    heroCtaSecondary: 'Ver Servicios',
    photoPlaceholder: 'Foto de perfil',
    sectionAbout: '// SOBRE MÍ',
    aboutLine1: 'Código con propósito.',
    aboutLine2: 'Experiencia con impacto.',
    aboutText1: 'Con más de 5 años de experiencia en Angular y Java Spring Boot, construyo aplicaciones web robustas, escalables y bien estructuradas. Me apasiona la arquitectura limpia y las soluciones que realmente funcionan.',
    aboutText2: 'Actualmente me capacito en Inteligencia Artificial, Machine Learning y AWS, convencido de que el futuro de la tecnología pasa por dominar estas herramientas.',
    statYears: 'Años de experiencia', statTech: 'Tecnologías dominadas',
    statLearning: 'Aprendizaje continuo', statCommit: 'Dedicación total',
    sectionStack: '// TECNOLOGÍAS', stackHeading: 'Mi Stack Tecnológico',
    stackSubtitle: '→  herramientas con las que construyo soluciones reales',
    sectionServices: '// SERVICIOS', servicesHeading: 'Lo que puedo hacer por ti',
    servicesSubtitle: '→  soluciones digitales a medida para personas y empresas',
    service1Title: 'Desarrollo Web',
    service1Desc: 'Sitios y aplicaciones web modernas, rápidas y optimizadas para empresas y profesionales que quieren presencia digital de calidad.',
    service2Title: 'Apps Móviles',
    service2Desc: 'Aplicaciones móviles multiplataforma para iOS y Android, conectadas a backends robustos y escalables con Spring Boot.',
    service3Title: 'Integraciones & APIs',
    service3Desc: 'Conectamos tus sistemas, CRMs, ERPs o servicios externos mediante integraciones personalizadas, seguras y bien documentadas.',
    service4Title: 'Consultoría Tech',
    service4Desc: 'Asesoría técnica para elegir la arquitectura correcta, escalar tu plataforma o mejorar tu producto digital existente.',
    sectionProjects: '// PROYECTOS', projectsHeading: 'Proyectos en Desarrollo',
    projectsSubtitle: '→  nuevos casos de éxito en construcción — pronto aquí',
    projectsComingSoon: 'Próximamente',
    projectPlaceholder1: 'app web / Angular + SpringBoot',
    projectPlaceholder2: 'app móvil / React Native',
    projectPlaceholder3: 'integración / APIs + Docker',
    sectionContact: '// CONTACTO', contactHeading: '¿Hablamos?',
    contactText: 'Tienes una idea para tu negocio o quieres saber más sobre mis servicios. Escríbeme directamente por WhatsApp y te respondo pronto.',
    contactCta: 'Abrir WhatsApp', contactEmail: 'Enviar Email',
    footerCopy: 'Diseñado y desarrollado por Daniel Alzate',
  },
  en: {
    navAbout: 'About', navServices: 'Services', navProjects: 'Projects', navContact: 'Contact',
    langLabel: 'ES',
    heroGreeting: "Hi, I'm",
    heroRole: 'Software Developer',
    heroTagline: 'Discipline and passion for technology define me. I want to help build the future.',
    heroCta: "Let's talk on WhatsApp",
    heroCtaSecondary: 'View Services',
    photoPlaceholder: 'Profile photo',
    sectionAbout: '// ABOUT ME',
    aboutLine1: 'Code with purpose.',
    aboutLine2: 'Experience with impact.',
    aboutText1: "With over 5 years of experience in Angular and Java Spring Boot, I build robust, scalable, and well-structured web applications. I'm passionate about clean architecture and solutions that truly work.",
    aboutText2: "I'm currently training in Artificial Intelligence, Machine Learning, and AWS — confident that mastering these tools is essential for building what's next.",
    statYears: 'Years of experience', statTech: 'Technologies mastered',
    statLearning: 'Continuous learning', statCommit: 'Total dedication',
    sectionStack: '// TECH STACK', stackHeading: 'My Tech Stack',
    stackSubtitle: '→  tools I use to build real solutions',
    sectionServices: '// SERVICES', servicesHeading: 'What I can do for you',
    servicesSubtitle: '→  tailored digital solutions for people and companies',
    service1Title: 'Web Development',
    service1Desc: 'Modern, fast, and optimized websites and web applications for businesses and professionals seeking quality digital presence.',
    service2Title: 'Mobile Apps',
    service2Desc: 'Cross-platform mobile applications for iOS and Android, connected to robust and scalable Spring Boot backends.',
    service3Title: 'Integrations & APIs',
    service3Desc: 'Connect your systems, CRMs, ERPs, or external services through custom, secure, and well-documented integrations.',
    service4Title: 'Tech Consulting',
    service4Desc: 'Technical guidance for choosing the right architecture, scaling your platform, or improving your existing digital product.',
    sectionProjects: '// PROJECTS', projectsHeading: 'Projects in Development',
    projectsSubtitle: '→  new success stories in progress — coming soon',
    projectsComingSoon: 'Coming Soon',
    projectPlaceholder1: 'web app / Angular + SpringBoot',
    projectPlaceholder2: 'mobile app / React Native',
    projectPlaceholder3: 'integration / APIs + Docker',
    sectionContact: '// CONTACT', contactHeading: "Let's talk?",
    contactText: "Have an idea for your business or want to know more about my services? Write to me directly on WhatsApp and I'll get back to you soon.",
    contactCta: 'Open WhatsApp', contactEmail: 'Send Email',
    footerCopy: 'Designed and developed by Daniel Alzate',
  }
};

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<Lang>('es');

  t(): Translations {
    return TRANSLATIONS[this.lang()];
  }

  toggle() {
    this.lang.update(l => l === 'es' ? 'en' : 'es');
  }
}
