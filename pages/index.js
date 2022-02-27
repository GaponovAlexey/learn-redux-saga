import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, increment } from '../src/Redux/reducers/counter'

export default function Home() {
  const count = useSelector((state) => state?.myCount?.count || 0)
  const dispatch = useDispatch()
  return (
    <>
      <Head>
        <title>Redux-Saga</title>
        <link rel='icon' href='#' />
      </Head>
      <div>
        <h1>{count}</h1>
        <span onClick={() => dispatch(increment())} style={{ fontSize: 55 }}>
          +
        </span>
        <span onClick={() => dispatch(decrement())} style={{ fontSize: 55 }}>
          -
        </span>
      </div>
    </>
  )
}
