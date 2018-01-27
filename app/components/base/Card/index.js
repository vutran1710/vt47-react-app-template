import { translate } from 'react-i18next'
import style from './card.scss'

const Card = ({ t, content }) => (
  <div className={style.card}>
    <p>
      {t(content)}
    </p>
  </div>
)

export default translate()(Card)
