import Layout from 'containers/layout'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import theme from '../styles/theme'
import { CommerceProvider } from '@framework'
import { useRouter } from 'next/router'
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  const { locale = 'en-US' } = useRouter()
  return (
    <>
      <Head>
        <title>Transcend</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CommerceProvider locale={locale}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CommerceProvider>
    </>
  )
}
