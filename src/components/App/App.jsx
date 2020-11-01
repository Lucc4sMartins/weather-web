import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { AppStore } from '@/store/AppStore'
import GlobalStyle from '@/styles/Global'

const App = () => (
  <ReduxProvider store={AppStore}>
    <GlobalStyle />
  </ReduxProvider>
)

export { App }
