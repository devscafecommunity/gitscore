import { Global } from '@emotion/react'

/*
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
*/

const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
          font-family: 'JetBrains Mono';
          font-style: normal;
          font-weight: 100 800;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/jetbrainsmono/v1/1cXwaULfTPtpyp6H6m4ZP5Kc.woff2) format('woff2');
        }
        `}
  />
)

export default Fonts