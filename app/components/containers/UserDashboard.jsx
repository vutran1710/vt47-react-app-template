import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import compose from 'lodash/fp/compose'
import { Actions } from 'jumpstate'
import Button from '../base/Button'
import Container from '../base/Container'
import request from '../../manage/request'

class UserDashboard extends React.Component {
  state = { data: null }

  request = () => {
    Actions.common.setLoading(true)
    request('/api/posts/1', 'GET').then(json => {
      Actions.common.setLoading(false)
      this.setState({ data: JSON.stringify(json) })
    })
  }

  goToInstructionScreen = () => this.props.history.push('/instruction')

  render() {
    const { t, loading } = this.props
    return (
      <Container align="center">
        <h1>{`${t('welcomeUser')} Vu`}</h1>
        <Button title="Get post" onClick={this.request} />
        <Button title="Go to Instruction" onClick={this.goToInstructionScreen} />
        {loading && <h1><i className="fa fa-spin fa-spinner" /></h1>}
        <p>
          {this.state.data}
        </p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.common.loading
})

export default compose(
  connect(mapStateToProps),
  translate(),
  withRouter
)(UserDashboard)
