import { Effect } from 'jumpstate'
import request from './request'

const asyncAction1 = Effect('login', values => request('/auth', 'POST', values))

export default { asyncAction1 }
