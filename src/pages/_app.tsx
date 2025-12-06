import '../assets/sass/main.scss'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
      <Container>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </Container>
    </>
  )
}

export default GrielDev
