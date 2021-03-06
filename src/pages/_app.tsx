import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material'
import { Header } from '../ui/components/Header'
import theme from '../ui/themes/theme'

import '../ui/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (

    <ThemeProvider theme={ theme }>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  
  )

}

export default MyApp
