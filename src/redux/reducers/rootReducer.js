// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import users from '../../views/apps/user/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  users
})

export default rootReducer
