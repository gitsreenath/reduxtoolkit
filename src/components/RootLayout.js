import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbaar from '../Navbaar'
import { Provider } from 'react-redux'
import store from '../store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>

  <Navbaar/>
  <main>
    <Outlet/>
  </main>
    </Provider>
    </>
  )
}

export default RootLayout