import style from './style.scss'

const Input = ({ meta: { touched, error }, input, ...rest }) => (
  <div className={style.input}>
    <input {...input} {...rest} className="input-text" />
    {touched && error && <small>Invalid value</small>}
  </div>
)

export default Input
