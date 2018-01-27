const Note = ({ content, color }) => (
  <div>
    <p>
      <font color={color}>
        {content}
      </font>
    </p>
  </div>
)

Note.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Note
