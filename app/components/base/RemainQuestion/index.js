import style from './remainquestion.scss'

const RemainQuestion = ({ text, position }) => (
  <div
    className={style.bar}
    position={position}
  >
    {text}
  </div>
)

RemainQuestion.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string
}

export default RemainQuestion
