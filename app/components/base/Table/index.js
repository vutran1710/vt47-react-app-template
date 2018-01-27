import { sortBy as sort, reverse, startCase } from 'lodash/fp'
import style from './table.scss'

const Table = ({ data, sortBy, fields, descending }) => {
  const dataSorted = !descending ? sort(sortBy, data) : reverse(sort(sortBy, data))
  return (
    <table className={style.tbl} border="1">
      <tbody>
        <tr>
          {fields.map(field => <th key={field}>{startCase(field)}</th>)}
        </tr>
        {dataSorted.map(entry => (
          <tr key={entry[fields[0]]}>
            {fields.map((key, idx) => (
              <td key={key} className={idx === 0 ? style.primary : ''}>{entry[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  descending: PropTypes.bool
}

export default Table
