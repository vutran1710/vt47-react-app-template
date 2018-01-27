import { Link } from 'react-router-dom'
import Container from '../base/Container'

const InstructionScreen = () => (
  <Container align="center">
    <h2>This is the test instruction</h2>
    <Link to="/reading" href="/reading">
      Go to the firs reading test
    </Link>
    <div>
      <h4>Exam</h4>
      <h5>Listening comprehension</h5>
      <p>
        <strong>
          Listen to the text and complete the&nbsp;
          two worksheets below. Maximum score: 20 points
        </strong>
      </p>
      <p>
        <strong>
          Attention! The exam can only be successful if the&nbsp;
          candidate achieves at least 40% at each component.
        </strong>
      </p>
      <p>
        <strong>
          Only the answers written in ink&nbsp;
          will be accepted as final answers.
        </strong>
      </p>
      <p>
        <strong>
          Please think carefully before you answer,&nbsp;
          as any answer-changing will make your response invalid.
        </strong>
      </p>
    </div>
  </Container>
)

export default InstructionScreen
