const Input = ({ meta: { touched, error }, input, ...rest }) => (
  <input
    {...input}
    {...rest}
    className="input-text"
  />
)
export default Input
