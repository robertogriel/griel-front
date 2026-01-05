import type { NextPage } from 'next'
import styled from 'styled-components'
import About from '../components/About'
import { HtmlHead } from '../components/Html/Head'
import Typewritter from '../components/Typewritter'

const Home: NextPage = () => {
  return (
    <>
      <HtmlHead title="Griel Developer" metaDescription="Transformo sua ideia em uma aplicação incrível" />

      <Wrapper>
        <Hero>
          <p>Olá, eu sou</p>
          <h1>Roberto Griel Filho</h1>
          <Typewritter />

          <About />
        </Hero>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-image: url('/images/png/background.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: -20px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
  @media only screen and (orientation: landscape) {
    flex-direction: row;
  }
`

const Hero = styled.section`
  width: 100%;
  height: 100%;
  min-height: 130px;
  flex-direction: column;
  padding: var(--space);
  p,
  h1 {
    color: var(--white);
    font-weight: 600;
    font-size: 30px;
    margin: 0;
  }
  h1 {
    font-family: 'FiraCode', serif;
    font-size: 23px;
  }
  @media only screen and (orientation: landscape) {
    flex: 1;
  }
`
const AboutCode = styled.section`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    padding: 20px;
    picture {
      justify-content: flex-end;
      width: 465px;
    }
  }
`

export default Home
