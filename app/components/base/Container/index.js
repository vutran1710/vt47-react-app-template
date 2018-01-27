import style from './container.scss'

const Container = ({ fluid, children, align }) => (
  <div className={style.ctn} fluid={(!!fluid).toString()} align={align}>
    {children}
  </div>
)

export default Container
