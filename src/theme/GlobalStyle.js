import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        word-wrap: break-word;
      }

      html {
        font-size: 62.5%;
        line-height: 1.6;
        /* Footer support */
        position: relative;
        min-height: 100%;
      }

      body {
          font: 'Helvetica' 
          font-color: ${({ theme }) => theme.colors.light};
          font-size: 1.6rem;
          background-color: ${({ theme }) => theme.colors.light};
      }

      button { 
          cursor: pointer;
      }
`;

export default GlobalStyle;