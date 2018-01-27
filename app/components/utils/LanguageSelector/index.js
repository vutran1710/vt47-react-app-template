import { translate } from 'react-i18next'
import { connect } from 'react-redux'
import { Actions } from 'jumpstate'
import compose from 'lodash/fp/compose'

const LanguageSelector = ({ t, locales, style }) => (
  <div style={style}>
    <label className="label label-enhanced" htmlFor="locales" >
      {t('changeLanguage')}
    </label>
    <select value={locales} onChange={Actions.common.changeLanguage} id="locales">
      <option value="en">EN</option>
      <option value="jp">JP</option>
    </select>
  </div>
)

const mapStateToProps = state => ({
  locales: state.common.locales
})

export default compose(
  connect(mapStateToProps),
  translate()
)(LanguageSelector)
