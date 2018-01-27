import style from './textarea.scss'

const countWord = value => value.trim() ? value.trim().split(/\s+/).length : 0

const handleChange = (onChange, limit) => e =>
  countWord(e.target.value) <= limit && onChange(e.target.value)

const TextArea = ({ input: { value, onChange }, rows = 10, limit }) => (
  <div>
    <textarea
      className={style.textarea}
      value={value}
      onChange={handleChange(onChange, limit)}
      rows={rows}
    />
    <div className={style.status}>
      Input words {countWord(value)} / {limit}
    </div>
  </div>
)

TextArea.propTypes = {
  limit: PropTypes.number.isRequired,
  rows: PropTypes.number,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  })
}

export default TextArea
