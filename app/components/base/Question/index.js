import style from './question.scss'

const Question = ({ text }) => (
  <div className={style.question}>
    <div className={style.icon}>Q</div>
    <div className={style.text}>{text}</div>
  </div>
)

Question.propTypes = {
  text: PropTypes.string
}

export default Question
