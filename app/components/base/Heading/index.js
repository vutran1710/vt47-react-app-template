import style from './heading.scss'

const Heading = ({ src, alt }) => (
  <div className={style.heading}>
    <img src={src} alt={alt} />
  </div>
)

export default Heading
