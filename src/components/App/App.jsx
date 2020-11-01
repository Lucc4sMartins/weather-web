import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { AppStore } from '@/store/AppStore'
import GlobalStyle from '@/styles/Global'
import { Map } from '@/components/Map'
import { Header } from '@/components/Header'

const App = () => (
  <ReduxProvider store={AppStore}>
    <GlobalStyle />
    <Header />
    <Map />
  </ReduxProvider>
)

export { App }
