import TextArea from './Textarea'

const Input = ({ meta: { touched, error }, input, ...rest }) => (
  <input
    {...input}
    {...rest}
    className="input-text"
  />
)

// eslint-disable-next-line
export { Input, TextArea }
