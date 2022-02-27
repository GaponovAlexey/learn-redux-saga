import { call, select, takeLeading , takeEvery, takeLatest } from 'redux-saga/effects'
import { decrement, increment } from '../reducers/counter'

const deley = (time) =>
  new Promise((res, rej) => {
    setTimeout(res, time * 1000)
  })

export function* workerSaga() {
  const count = yield select(({ myCount }) => myCount.count)
  yield deley(2)
  console.log(`request ${count}`)
}
export function* wotcherClickSaga() {
  yield takeLatest(increment, workerSaga)
  yield takeLeading(increment, workerSaga)

  yield takeEvery(decrement, () => console.log('decrement'))
}
export default function* rootSaga() {
  yield wotcherClickSaga()
}
