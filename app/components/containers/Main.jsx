import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import compose from 'lodash/fp/compose'
import Container from '../base/Container'
import Button from '../base/Button'
import Divider from '../base/Divider'

const Main = ({ t, history }) => (
  <div>
    <Container align="center" fluid>
      <Divider />
      <Button
        title={t('nextScreen')}
        color="red"
        onClick={() => history.push('/home')}
      />
    </Container>
  </div>
)

export default compose(
  translate(),
  withRouter
)(Main)
