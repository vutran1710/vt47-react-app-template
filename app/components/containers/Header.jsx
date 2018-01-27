import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import Container from '../base/Container'
import LanguageSelector from '../utils/LanguageSelector'

const LanguageSelectorStyle = {
  position: 'fixed',
  top: 20,
  right: 20
}

const Header = ({ t, location }) => (
  <Container align="center" fluid>
    <LanguageSelector style={LanguageSelectorStyle} />
    <a href="/">
      <img src="/banner.png" alt="logo" />
    </a>
    <h1>
      {location.pathname === '/' && t('hello')}
      {location.pathname === '/login' && t('LoginPlease')}
      {location.pathname === '/home' && t('greeting')}
    </h1>
  </Container>
)

export default withRouter(translate()(Header))
