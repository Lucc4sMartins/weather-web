import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
