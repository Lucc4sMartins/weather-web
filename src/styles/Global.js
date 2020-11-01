import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0!important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif !important;
  }
`

export default GlobalStyle
