import styled from 'styled-components'
import { AboutCodeBlock } from './components/CodeBlock'

export default function About() {
  return (
    <AboutTag>
      <AboutMe>
        <picture>
          <source srcSet="/images/webp/about.webp" type="image/webp" />
          <img loading="lazy" src="/images/png/about.png" alt="Roberto Griel Filho" />
        </picture>
        <Paragraph>
          Sempre fui apaixonado por tecnologia, desenvolvimento e por essa mágica de transformar linhas de código em
          aplicações incríveis.
        </Paragraph>
      </AboutMe>

      <AboutCodeBlock />
    </AboutTag>
  )
}

const AboutTag = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--space);
  height: 100%;
  picture {
    img {
      width: 40vw;
      height: auto;
      max-width: 200px;
      justify-content: center;
    }
  }
  @media (min-width: 1070px) {
    flex-direction: row;
    max-width: 70vw;
    align-self: center;
    align-items: flex-start;
    gap: 11rem;
  }
`
const AboutMe = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Paragraph = styled.h2`
  color: var(--white);
  font-size: 20px;
  margin: 2rem;
  text-align: center;
`
