import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Private from './components/utils/Private'

import Main from './components/containers/Main'
import Header from './components/containers/Header'

import HomeDemo from './components/containers/HomeDemo'
import UserDashboard from './components/containers/UserDashboard'
import InstructionScreen from './components/containers/InstructionScreen'

import ReadingTest from './components/containers/testscreens/ReadingTest'
/*
import ListeningTest from './components/containers/testscreens/ListeningTest'
import WritingTest from './components/containers/testscreens/WritingTest'
import SpeakingTest from './components/containers/testscreens/SpeakingTest'
 */

const App = () => (
  <Router>
    <div>
      <Header />
      <hr />
      <Route exact path="/" component={Main} />
      <Switch>
        <Route path="/login" component={HomeDemo} />
        <Private path="/home" component={UserDashboard} />
        <Private path="/instruction" component={InstructionScreen} />
        <Private path="/reading" component={ReadingTest} />
      </Switch>
    </div>
  </Router>
)

export default App
