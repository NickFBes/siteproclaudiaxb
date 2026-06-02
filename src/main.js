import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

const messages = {
  fr: {
    brand: {
      title: 'Claudia XATARA BONNET | Traductrice'
    },

    nav: {
      home: 'Accueil',
      about: 'À propos',
      portuguese: 'Le Portugais',
      services: 'Prestations',
      contact: 'Contact'
    },

    hero: {
      titleLine1: 'Traductions',
      titleLine2: '& Cours de Langues',
      subtitle: 'Portugais ↔ Français',
      intro: 'Claudia XATARA BONNET est traductrice et professeure expérimentée de langues depuis plus de 30 ans. Elle vous accompagne dans vos démarches officielles et votre apprentissage linguistique.',
      highlights: {
        translations: 'Traductions valables en Europe, au Brésil et au Canada',
        courses: 'Cours personnalisés pour tous les niveaux',
        fast: 'Services rapides et devis gratuits'
      },
      button: 'Demander un devis'
    },

    apropos: {
      title: 'À propos',
      imageAlt: 'Photo de Claudia Xatara Bonnet',
      name: 'Claudia XATARA BONNET',
      description: {
        role: 'Traductrice portugais-français / français-portugais',
        professor: 'Professeure de français et de traduction à l’université au Brésil : 1984-2015',
        swornBrazil: 'Traductrice assermentée au Brésil : depuis 2000',
        swornFrance: 'Traductrice agréée auprès de la Cour d’appel de Lyon : depuis 2021',
        certifiedOne: 'Traductrice habilitée à effectuer des traductions certifiées.',
        certifiedTwo: 'Traductions certifiées conformes aux originaux, pour répondre aux exigences légales en France et à l’étranger.'
      }
    },

    lePortugais: {
      title: 'Le Portugais',
      paragraphOne: {
        beforeNumber: 'Le portugais est la langue officielle de plus de',
        number: '260 millions',
        afterNumber: 'de personnes à travers le monde. C’est la',
        internet: '5e langue la plus utilisée sur Internet'
      },
      paragraphTwo: {
        beforeCountries: 'Elle est parlée dans',
        countries: '9 pays membres de l’ONU',
        middle: 'et dans',
        region: '1 région administrative spéciale',
        afterRegion: 'de la République populaire de Chine.'
      },
      imageAlt: 'Carte des pays lusophones',
      countries: {
        angola: 'Angola',
        brazil: 'Brésil',
        capeVerde: 'Cap-Vert',
        equatorialGuinea: 'Guinée équatoriale',
        guineaBissau: 'Guinée-Bissau',
        macao: 'Macao',
        mozambique: 'Mozambique',
        portugal: 'Portugal',
        saoTome: 'São Tomé et Príncipe',
        timor: 'Timor-Leste'
      }
    },

    prestations: {
      title: 'Prestations',

      priceNote: '* Prix susceptibles de modification',

      courses: {
        title: 'Cours de portugais et français',
        levels: 'Tous les niveaux et objectifs',
        duration: 'Durée définie par l’élève',

        individual: {
          label: 'Individuel :',
          price: ' * 30 €/h'
        },

        duo: {
          label: 'Duo :',
          price: ' * 20 €/h par élève'
        },

        trio: {
          label: 'Trio :',
          price: ' * 15 €/h par élève'
        },

        semiIntensive: {
          label: 'Semi-intensif :',
          price: ' 2h/jour ou 10h/semaine, 22 jours : * 440 €/mois'
        },

        intensive: {
          label: 'Intensif :',
          price: ' 3h/jour ou 15h/semaine, 22 jours : * 660 €/mois'
        }
      },

      translations: {
        title: 'Traductions certifiées',

        

        france: {
          label: 'France :',
          price: '1 page = 250 - 350 mots',
          note: 'Cour d’appel de Lyon'
        },

        documentTypesTitle: 'Types de documents :',

        documents: {
          birth: 'Actes de naissance, mariage ou décès',
          identity: 'Passeports, cartes d’identité',
          contracts: 'Contrats, jugements, diplômes',
          notary: 'Documents notariés, médicaux, professionnels',
          residence: 'Demandes de carte de séjour, naturalisation, regroupement familial',
          legal: 'Textes juridiques, scientifiques, littéraires',
          driving: 'Échange de permis de conduire'
        }
      },

      services: {
        title: 'Services complémentaires',
        signature: 'Légalisation de signature',

        audio: 'Transcription audio',
        
      }
    },

    contact: {
      title: 'Contact & Demande de Devis',

      form: {
        fullname: 'Nom et Prénom',
        email: 'Adresse e-mail',
        phone: 'Téléphone',
        deadline: 'Délai souhaité ou date butoir',
        subject: 'Sujet',
        choose: 'Choisir...',
        message: 'Message – détaillez votre besoin et les documents à traduire',
        submit: 'Envoyer la demande',
        sending: 'Envoi en cours...',

        options: {
          certifiedTranslation: 'Traduction certifiée',
          courseRequest: 'Demande de cours',
          linguisticAssistance: 'Assistance linguistique',
          other: 'Autre'
        }
      },

      messages: {
        success: 'Merci {name}, votre demande a été envoyée !',
        error: 'Une erreur est survenue. Veuillez réessayer ou envoyer votre demande par e-mail.'
      }
    }
  },

  pt: {
    brand: {
      title: 'Claudia XATARA BONNET | Tradutora'
    },

    nav: {
      home: 'Início',
      about: 'Sobre',
      portuguese: 'O Português',
      services: 'Serviços',
      contact: 'Contato'
    },

    hero: {
      titleLine1: 'Traduções',
      titleLine2: '& Aulas de Línguas',
      subtitle: 'Português ↔ Francês',
      intro: 'Claudia XATARA BONNET é tradutora e professora experiente de línguas há mais de 30 anos. Ela acompanha você em seus trâmites oficiais e no seu aprendizado linguístico.',
      highlights: {
        translations: 'Traduções válidas na Europa, no Brasil e no Canadá',
        courses: 'Aulas personalizadas para todos os níveis',
        fast: 'Serviços rápidos e orçamentos gratuitos'
      },
      button: 'Solicitar orçamento'
    },

    apropos: {
      title: 'Sobre',
      imageAlt: 'Foto de Claudia Xatara Bonnet',
      name: 'Claudia XATARA BONNET',
      description: {
        role: 'Tradutora português-francês / francês-português',
        professor: 'Professora de francês e de tradução na universidade no Brasil: 1984-2015',
        swornBrazil: 'Tradutora juramentada no Brasil: desde 2000',
        swornFrance: 'Tradutora juramentada e perita judicial junto ao Tribunal de Recursos / Tribunal de Apelação de Lyon: desde 2021',
        certifiedOne: 'Tradutora habilitada a realizar traduções certificadas.',
        certifiedTwo: 'Traduções certificadas conformes aos originais, para atender às exigências legais na França e no exterior.'
      }
    },

    lePortugais: {
      title: 'O Português',
      paragraphOne: {
        beforeNumber: 'O português é a língua oficial de mais de',
        number: '260 milhões',
        afterNumber: 'de pessoas ao redor do mundo. É a',
        internet: '5ª língua mais utilizada na Internet'
      },
      paragraphTwo: {
        beforeCountries: 'Ela é falada em',
        countries: '9 países membros da ONU',
        middle: 'e em',
        region: '1 região administrativa especial',
        afterRegion: 'da República Popular da China.'
      },
      imageAlt: 'Mapa dos países lusófonos',
      countries: {
        angola: 'Angola',
        brazil: 'Brasil',
        capeVerde: 'Cabo Verde',
        equatorialGuinea: 'Guiné Equatorial',
        guineaBissau: 'Guiné-Bissau',
        macao: 'Macau',
        mozambique: 'Moçambique',
        portugal: 'Portugal',
        saoTome: 'São Tomé e Príncipe',
        timor: 'Timor-Leste'
      }
    },

    prestations: {
      title: 'Serviços',

      priceNote: '* Preços sujeitos a alteração',

      courses: {
        title: 'Aulas de português e francês',
        levels: 'Todos os níveis e objetivos',
        duration: 'Duração definida pelo aluno',

        individual: {
          label: 'Individual:',
          price: ' * 30 €/h'
        },

        duo: {
          label: 'Dupla:',
          price: ' * 20 €/h por aluno'
        },

        trio: {
          label: 'Trio:',
          price: ' * 15 €/h por aluno'
        },

        semiIntensive: {
          label: 'Semi-intensivo:',
          price: ' 2h/dia ou 10h/semana, 22 dias: * 440 €/mês'
        },

        intensive: {
          label: 'Intensivo:',
          price: ' 3h/dia ou 15h/semana, 22 dias: * 660 €/mês'
        }
      },

      translations: {
        title: 'Traduções certificadas',

        france: {
          label: 'Brasil:',
          price: '1 lauda = 1000 caracteres',
          note: 'JUCESP – São Paulo'
        },

        

        documentTypesTitle: 'Tipos de documentos:',

        documents: {
          birth: 'Certidões de nascimento, casamento ou óbito',
          identity: 'Passaportes, documentos de identidade',
          contracts: 'Contratos, sentenças, diplomas',
          notary: 'Documentos notariais, médicos e profissionais',
          residence: 'Pedidos de residência, naturalização e reagrupamento familiar',
          legal: 'Textos jurídicos, científicos e literários',
          driving: 'Troca de carteira de habilitação'
        }
      },

      services: {
        title: 'Serviços complementares',
        signature: 'Legalização de assinatura',
        audio: 'Transcrição de áudio',
        
      }
    },

    contact: {
      title: 'Contato & Solicitação de Orçamento',

      form: {
        fullname: 'Nome e Sobrenome',
        email: 'Endereço de e-mail',
        phone: 'Telefone',
        deadline: 'Prazo desejado ou data limite',
        subject: 'Assunto',
        choose: 'Escolher...',
        message: 'Mensagem – detalhe sua necessidade e os documentos a traduzir',
        submit: 'Enviar solicitação',
        sending: 'Enviando...',

        options: {
          certifiedTranslation: 'Tradução certificada',
          courseRequest: 'Pedido de aula',
          linguisticAssistance: 'Assistência linguística',
          other: 'Outro'
        }
      },

      messages: {
        success: 'Obrigado(a) {name}, sua solicitação foi enviada!',
        error: 'Ocorreu um erro. Tente novamente ou envie sua solicitação por e-mail.'
      }
    }
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(MotionPlugin)

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  offset: 300
})