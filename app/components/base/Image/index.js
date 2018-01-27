import style from './image.scss'

const Image = ({ src, alt, content }) => (
  <div>
    <p>
      <b>Situation:</b> {content}
    </p>
    <img className={style.image} src={src} alt={alt} />
  </div>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  content: PropTypes.string
}


export default Image
