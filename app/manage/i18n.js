import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    lng: 'jp',
    fallbackLng: 'en',
    ns: 'translation',
    debug: process.env.NODE_ENV === 'development',
    react: {
      wait: true
    }
  })

export default i18n
