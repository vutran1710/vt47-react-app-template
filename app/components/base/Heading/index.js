import style from './heading.scss'

const Heading = ({ src, alt, title }) => (
  <div className={style.heading}>
    <img src={src} alt={alt} />
    <div>{title}</div>
  </div>
)

export default Heading
