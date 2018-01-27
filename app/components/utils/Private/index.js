import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const Private = ({ path, component: Component, auth }) => (
  <Route
    path={path}
    render={() => auth ? <Component /> : <Redirect to="/login" />}
  />
)

const mapStateToProps = state => ({
  auth: state.common.auth
})

export default connect(mapStateToProps)(Private)
