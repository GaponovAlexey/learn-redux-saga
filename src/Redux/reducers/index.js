import { combineReducers } from 'redux'
import myCount from './counter'

const test = (state = {}, action) => {
  return state
}

const reducer = combineReducers({
  test,
  myCount,
})


export default reducer
