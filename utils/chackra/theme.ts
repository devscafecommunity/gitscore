// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style

// 3. extend the theme
const theme = extendTheme({ 
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'JetBrains Mono',
    body: 'JetBrains Mono',
  },
  // styles: {
  //   global: {
  //     body: {
  //       bg: 'gray.100',
  //       color: 'gray.800',
  //     },
  //   },
  // },
})

export default theme