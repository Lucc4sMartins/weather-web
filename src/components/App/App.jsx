import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import { AppStore } from '@/store/AppStore'
import GlobalStyle from '@/styles/Global'
import StyledTheme from '@/styles/Theme'
import { Map } from '@/components/Map'
import { Header } from '@/components/Header'
import { SearchButton } from '@/components/SearchButton'
import { CityList } from '@/components/CityList';

const App = () => (
  <ReduxProvider store={AppStore}>
    <StyledProvider theme={StyledTheme}>
      <ToastContainer />
      <GlobalStyle />
      <Header />
      <main>
        <Map />
        <SearchButton />
        <CityList />
      </main>
    </StyledProvider>
  </ReduxProvider>
)

export { App }
