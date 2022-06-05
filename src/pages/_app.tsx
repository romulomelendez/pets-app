import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material'

import '../ui/styles/globals.css'

import { Header } from '../ui/components/header'

import theme from '../ui/themes/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (

    <ThemeProvider theme={ theme }>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}

export default MyApp
