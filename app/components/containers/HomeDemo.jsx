import { Actions } from 'jumpstate'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import compose from 'lodash/fp/compose'
import Container from '../base/Container'
import Button from '../base/Button'
import Input from '../utils/FormInputs'

class HomeDemo extends React.PureComponent {
  state = {
    form: localStorage['casec-token'] ? 'resume' : 'login',
    hasToken: !!localStorage['casec-token']
  }

  submitCredentials = e => this.props.handleSubmit(e).then(json => {
    const { setError, setLoading, authenticate } = Actions.common
    setLoading(false)
    if (json.response && json.response.token) {
      localStorage.setItem('casec-token', json.response.token)
      this.setState({ hasToken: true, form: 'resume' })
      authenticate(true)
    }
    setError(json.message)
  })

  proceed = () => this.props.handleSubmit().then(json => {
    const { setError, setLoading, authenticate } = Actions.common
    setLoading(false)
    if (!json.error) {
      authenticate(true)
      this.props.history.push('/home')
    } else {
      setError(json.message)
      delete localStorage['casec-token']
      this.setState({ form: 'login', hasToken: false })
    }
  })

  renderLoginForm = () => {
    const { t } = this.props
    return (
      <div>
        <form onSubmit={this.submitCredentials}>
          <label htmlFor="user">{t('Login')}</label>
          <Field name="user" component={Input} type="text" placeholder="Username" />
          <Field name="password" component={Input} type="password" placeholder="Password" />
          <Button type="submit" title={t('Submit')} color="blue" />
        </form>
      </div>
    )
  }

  render() {
    const { loading, error, auth } = this.props
    const { form, hasToken } = this.state
    return (
      <Container align="center">
        <h1>
          <i className="fa fa-user-circle" />
          {hasToken && <span>&nbsp;Mr. Vu Tran</span>}
        </h1>
        {form === 'login' && this.renderLoginForm()}
        {form === 'resume' && (
          <Button
            type="submit"
            title={this.props.t('Continue')}
            color="blue"
            onClick={this.proceed}
          />
        )}
        {loading && <h1><i className="fa fa-spin fa-spinner" /></h1>}
        <h5 style={{ color: 'red' }}>
          {error || `You are ${!auth && 'not'} authorized yet!`}
        </h5>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.common.loading,
  error: state.common.error,
  auth: state.common.auth
})

const onSubmit = e => {
  const { setLoading } = Actions.common
  setLoading(true)
  return Actions.login(e)
}

export default compose(
  reduxForm({
    onSubmit,
    form: 'authentication',
    pure: true
  }),
  translate(),
  connect(mapStateToProps),
  withRouter
)(HomeDemo)
