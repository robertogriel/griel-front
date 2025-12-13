import { useState } from 'react'
import { HtmlHead } from '../components/Html/Head'
import Main from '../components/Html/Main'
import { MdCancel, MdCheckCircle, MdSearch } from 'react-icons/md'
import Loading from '../components/Loading'
import styled from 'styled-components'

const Dominios: React.FC = () => {
  const [domainInput, setDomainInput] = useState<string>('')
  const [domainTrim, setDomainTrim] = useState<string>('')
  const [domainResult, setDomainResult] = useState<boolean>(false)
  const [domainDotCom, setDomainDotCom] = useState<string | null>(null)
  const [domainDotComBr, setDomainDotComBr] = useState<string | null>(null)
  const [errorHandler, setErrorHandler] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const checkDomain = async () => {
    if (!domainInput) return

    setDomainDotCom(null)
    setDomainDotComBr(null)
    setDomainResult(false)
    setErrorHandler(null)
    setLoading(true)

    let newDomain = ''

    const domainSplit = domainInput.split('.')
    if (domainSplit.length < 1) return

    if (/www/i.test(domainSplit[0])) {
      newDomain = domainSplit[1]
    } else {
      newDomain = domainSplit[0]
    }

    setDomainTrim(newDomain)

    try {
      await fetch(`api/domains?q=${newDomain}.com`)
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            setErrorHandler(data.message)
          } else {
            switch (data.res) {
              case 'ok':
                setDomainDotCom('Disponível')
                break
              case 'nok':
                setDomainDotCom('Indisponível')
            }
            setLoading(false)
            setDomainResult(true)
          }
        })

      await fetch(`api/domains?q=${newDomain}.com.br`)
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            setErrorHandler(data.message)
          } else {
            switch (data.res) {
              case 'ok':
                setDomainDotComBr('Disponível')
                break
              case 'nok':
                setDomainDotComBr('Indisponível')
            }
            setLoading(false)
            setDomainResult(true)
          }
        })
    } catch (error: any) {
      setLoading(false)
      setErrorHandler(error.message)
    }
  }

  return (
    <Main>
      <HtmlHead
        title="<Domínios /> ● Griel Developer"
        metaDescription="Consulte aqui a disponibilidade de um domínio."
      />

      <Header>
        <h1>Domínios</h1>
        <p>Consulte aqui a disponibilidade de um domínio.</p>
      </Header>
      <DomainForm>
        <div>
          <input
            type="text"
            placeholder="Ex.: www.dominio.com.br"
            name="domain"
            defaultValue={domainInput}
            onChange={e => setDomainInput(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onKeyUp={e => {
              if (e.key === 'Enter') {
                checkDomain()
              }
            }}
          />
          <button onClick={checkDomain}>
            <MdSearch fontSize={25} />
          </button>
        </div>
      </DomainForm>
      {loading && <Loading height="100px" width="100px" />}
      {errorHandler && (
        <div>
          <p>{errorHandler}</p>
        </div>
      )}
      {domainResult && (
        <DomainResults>
          <DomainResult>
            <DomainResultIcon>
              {domainDotCom === 'Disponível' ? (
                <MdCheckCircle fontSize={50} color="var(--success)" />
              ) : (
                <MdCancel fontSize={50} color="var(--fail)" />
              )}
            </DomainResultIcon>
            <DomainResultText>
              <h2>{domainTrim}.com</h2>
              <p>{domainDotCom}</p>
            </DomainResultText>
          </DomainResult>
          <DomainResult>
            <DomainResultIcon>
              {domainDotComBr === 'Disponível' ? (
                <MdCheckCircle fontSize={50} color="var(--success)" />
              ) : (
                <MdCancel fontSize={50} color="var(--fail)" />
              )}
            </DomainResultIcon>
            <DomainResultText>
              <h2>{domainTrim}.com.br</h2>
              <p>{domainDotComBr}</p>
            </DomainResultText>
          </DomainResult>
        </DomainResults>
      )}
    </Main>
  )
}

const Header = styled.header`
  margin-top: calc(var(--space) * 2);
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  h1 {
    color: var(--white);
    font-size: 2rem;
    text-transform: uppercase;
  }
  p {
    color: var(--white);
    font-size: 1.5rem;
    text-align: center;
  }
`
const DomainForm = styled.section`
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 40rem;
  width: 100%;
  div {
    border: 2px solid var(--blue-2);
    border-radius: var(--space);
    height: 3.5em;
    width: 100%;
    background-color: var(--white);
    padding-left: var(--space);
    justify-content: space-between;
    input {
      border: none;
      font-size: 1em;
      flex: 1 1;
      outline: none;
    }
    button {
      border: none;
      outline: none;
      margin: 3px;
      justify-content: center;
      align-items: center;
      width: 4em;
      background-color: var(--white);
      cursor: pointer;
    }
  }
`
const DomainResults = styled.section`
  flex-direction: column;
  margin-top: calc(var(--space) * 2);
  align-self: center;
  max-width: 40rem;
  width: 100%;
`
const DomainResult = styled.div`
  margin: var(--space) 0;
`
const DomainResultIcon = styled.div`
  margin-right: var(--space);
`
const DomainResultText = styled.div`
  flex-direction: column;
  h2,
  p {
    margin: 0;
    color: var(--white);
  }
`

export default Dominios
