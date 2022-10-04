import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${color => color.theme.colors.base['background']};
    font-family: 'Roboto', sans-serif;
    max-width: 1440px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`