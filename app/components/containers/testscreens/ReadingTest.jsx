import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Button from '../../base/Button'
import Container from '../../base/Container'
import QuestionTemplate from '../../utils/QuestionTemplate'

const ReadingTest = ({ history }) => (
  <Container>
    <h2>READING TEST</h2>
    <Button color="green" title="Submit" onClick={() => history.push('/reading/2')} />
    <hr />
    <Switch>
      <Route exact path="/reading" render={() => <Redirect to="/reading/1" />} />
      <Route path="/reading/:id" component={QuestionTemplate} />
    </Switch>
  </Container>
)


export default withRouter(ReadingTest)
