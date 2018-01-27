import style from './divider.scss'

const Divider = ({ visible }) => (
  <hr
    className={style.divider}
    visible={(!!visible).toString()}
  />
)

export default Divider
