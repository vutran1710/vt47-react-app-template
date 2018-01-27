import { combineReducers } from 'redux'
import { State } from 'jumpstate'
import i18next from 'i18next'
import { reducer as formReducer } from 'redux-form'
import { state as initial, test as initTest } from './state'
import './effects'

const common = State('common', {
  initial,
  nextScreen: state => ({ ...state, screenIndex: state.screenIndex + 1 }),
  setLoading: (state, loading) => ({ ...state, loading }),
  authenticate: (state, auth) => ({ ...state, auth }),
  getCredentials: (state, user) => ({ ...state, user }),
  setText: (state, e) => {
    e.persist()
    return { ...state, formText: e.target.value }
  },
  changeLanguage: (state, e) => {
    e.persist()
    i18next.changeLanguage(e.target.value)
    return { ...state, locales: e.target.value }
  },
  setError: (state, error) => ({ ...state, error })
})

const test = State('test', {
  initial: initTest
})

export default combineReducers({
  common,
  test,
  form: formReducer
})
