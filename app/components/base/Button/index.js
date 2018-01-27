import style from './button.scss'

const Button = ({ onClick, title, color, outline, textUpper, symbol, disabled }) => (
  <button
    onClick={onClick}
    className={style.btn}
    color={color}
    outline={outline}
    text-upper={(!!textUpper).toString()}
    symbol={(!!symbol).toString()}
    disabled={!!disabled}
  >
    {title || 'Title'}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.string,
  textUpper: PropTypes.bool,
  symbol: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Button
