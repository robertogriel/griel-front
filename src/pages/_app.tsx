import '../assets/sass/main.scss'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CryptProvider } from '../hooks/useEncrypt'
import { SnackbarProvider } from 'notistack'
import { AuthProvider } from '../hooks/useAuth'

const Container = styled.main`
  flex-direction: column;
  border: 1px solid var(--blue-1);
  border-radius: var(--space);
  height: 96vh;
  margin: 10px;
  overflow: hidden;
`

function GrielDev({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider autoHideDuration={5000}>
        <CryptProvider>
          <AuthProvider>
            <Container>
              <Header />

              <Component {...pageProps} />

              <Footer />
            </Container>
          </AuthProvider>
        </CryptProvider>
      </SnackbarProvider>
    </>
  )
}

export default GrielDev
