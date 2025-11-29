import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        expertise: "Expertise",
        experience: "Career",
        projects: "Projects",
        contact: "Contact"
      },
      main: {
        job_title: "Software Engineer",
        social_github: "GitHub",
        social_linkedin: "LinkedIn"
      },
      expertise: {
        title: "My Expertise",
        desc: "I have built a diverse set of skills..."
      },
      history: {
        title: "Career History",
        desc: "My professional journey."
      },
      projects: {
        title: "My Projects",
        desc: "Some of the things I've built."
      },
      contact: {
        title: "Contact Me",
        desc: "Got a project? Let's talk.",
        name_label: "Your Name",
        name_placeholder: "What's your name?",
        email_label: "Email / Phone",
        email_placeholder: "How can I reach you?",
        message_label: "Message",
        message_placeholder: "Send me your questions",
        send: "Send",
        success: "Message sent successfully!",
        fail: "Failed to send message."
      },
      footer: {
        text: "A portfolio designed & built by"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        expertise: "Compétences",
        experience: "Carrière",
        projects: "Projets",
        contact: "Contact"
      },
      main: {
        job_title: "Ingénieur Logiciel",
        social_github: "GitHub",
        social_linkedin: "LinkedIn"
      },
      expertise: {
        title: "Mes Compétences",
        desc: "J'ai acquis diverses compétences..."
      },
      history: {
        title: "Mon Parcours",
        desc: "Mon expérience professionnelle."
      },
      projects: {
        title: "Mes Projets",
        desc: "Quelques-unes de mes réalisations."
      },
      contact: {
        title: "Contactez-moi",
        desc: "Vous avez un projet ? Discutons-en.",
        name_label: "Votre Nom",
        name_placeholder: "Quel est votre nom ?",
        email_label: "Email / Téléphone",
        email_placeholder: "Comment puis-je vous joindre ?",
        message_label: "Message",
        message_placeholder: "Envoyez-moi vos questions",
        send: "Envoyer",
        success: "Message envoyé avec succès !",
        fail: "Échec de l'envoi du message."
      },
      footer: {
        text: "Un portfolio conçu et construit par"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        expertise: "المهارات",
        experience: "الخبرة",
        projects: "المشاريع",
        contact: "تواصل"
      },
      main: {
        job_title: "مهندس برمجيات",
        social_github: "جيت هب",
        social_linkedin: "لينكد إن"
      },
      expertise: {
        title: "مهاراتي",
        desc: "لقد قمت ببناء مجموعة متنوعة من المهارات..."
      },
      history: {
        title: "الخبرة المهنية",
        desc: "مسيرتي المهنية."
      },
      projects: {
        title: "مشاريعي",
        desc: "بعض الأشياء التي قمت ببنائها."
      },
      contact: {
        title: "تواصل معي",
        desc: "لديك مشروع؟ لنناقشه معاً.",
        name_label: "الاسم",
        name_placeholder: "ما هو اسمك؟",
        email_label: "البريد الإلكتروني / الهاتف",
        email_placeholder: "كيف يمكنني الاتصال بك؟",
        message_label: "الرسالة",
        message_placeholder: "أرسل لي استفساراتك",
        send: "إرسال",
        success: "تم إرسال الرسالة بنجاح!",
        fail: "فشل إرسال الرسالة."
      },
      footer: {
        text: "تم تصميم وبناء هذا المعرض بواسطة"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, 
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;
