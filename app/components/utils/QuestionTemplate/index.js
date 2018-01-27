import { connect } from 'react-redux'

const QuestionTemplate = ({ questions, id }) => (
  <div>
    <h3><b>Hello, this is question number {id}:</b></h3>
    <h4>{questions[id].header}</h4>
    <p>{questions[id].body}</p>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  questions: state.test.reading,
  id: parseInt(ownProps.match.params.id, 10) - 1
})

export default connect(mapStateToProps)(QuestionTemplate)
