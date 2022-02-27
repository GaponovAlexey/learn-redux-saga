import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../src/Redux/Store'

export default function Home() {
  console.log(store);
  return (
    <Provider store={store}>
      <Head>
        <title>Redux-Saga</title>
        <link rel='icon' href='#' />
      </Head>
      <div>you</div>
    </Provider>
  )
}
