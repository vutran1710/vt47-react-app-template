import { Accordion as Group, AccordionItem } from 'react-sanfona'
import style from './accordion.scss'

const Accordion = ({ data }) => (
  <Group
    className={style.panel}
  >
    {data.map(item => (
      <AccordionItem
        title={item.heading}
        key={item.id}
        expanded={item === 1}
        titleClassName={style.heading}
        className={style.item}
      >
        <div className={style.body}>
          {item.body}
        </div>
      </AccordionItem>
    ))}
  </Group>
)

Accordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Accordion
