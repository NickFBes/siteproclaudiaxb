import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      portuguese: 'Le portugais',
      services: 'Prestations',
      contact: 'Contact'
    },
    hero: {
      title: 'Traductrice portugais-français / français-portugais',
      cta: 'Demander un devis'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      portuguese: 'O português',
      services: 'Serviços',
      contact: 'Contato'
    },
    hero: {
      title: 'Tradutora português-francês / francês-português',
      cta: 'Solicitar orçamento'
    }
  }
}

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})