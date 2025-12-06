import styled from 'styled-components'

type StackItem = string | Record<string, string[]>

type AboutData = {
  name: string
  age: number | string
  local: string
  stacks: StackItem[]
}

function getCurrentAge() {
  const birthDateString = process.env.BIRTH_DATE
  if (!birthDateString) return 'N/A'
  const birthDate = new Date(birthDateString)
  const currentYear = new Date().getFullYear()
  return currentYear - birthDate.getFullYear()
}

const simpleKeys: (keyof AboutData)[] = ['name', 'age', 'local']

function renderPrimitive(value: string | number) {
  if (typeof value === 'number') {
    return <NumberValue>{value}</NumberValue>
  }

  return <StringValue>'{value}'</StringValue>
}

function renderStackItem(item: StackItem, indent: number, isLast: boolean, index: number) {
  if (typeof item === 'string') {
    return (
      <Line indent={indent} key={index}>
        <StringValue>'{item}'</StringValue>
        {!isLast && <Comma>,</Comma>}
      </Line>
    )
  }

  const [stackName, tools] = Object.entries(item)[0]

  return (
    <>
      <Line indent={indent} key={`${index}-open`}>
        <StringValue>'{stackName}'</StringValue>: <Brace>{'{'}</Brace>
      </Line>

      {tools.map((tool, toolIndex) => (
        <Line indent={indent + 1} key={`${index}-tool-${toolIndex}`}>
          <StringValue>'{tool}'</StringValue>
          {toolIndex < tools.length - 1 && <Comma>,</Comma>}
        </Line>
      ))}

      <Line indent={indent} key={`${index}-close`}>
        <Brace>{'}'}</Brace>
        {!isLast && <Comma>,</Comma>}
      </Line>
    </>
  )
}

export function AboutCodeBlock() {
  const aboutData: AboutData = {
    name: 'Roberto Griel Filho',
    age: getCurrentAge(),
    local: 'Nova Serrana, Minas Gerais',
    stacks: [
      'HTML5',
      { CSS3: ['Sass'] },
      { JavaScript: ['TypeScript'] },
      { PHP: ['Laravel', 'Unit Tests'] },
      { React: ['NextJS', 'React Native'] },
      { NodeJS: ['NestJS'] },
      'MySQL'
    ]
  }

  return (
    <Window>
      <Header>
        <Dot color="#ff5f56" />
        <Dot color="#ffbd2e" />
        <Dot color="#27c93f" />
      </Header>

      <CodeArea>
        <Line>
          <Keyword>const </Keyword> <Variable>about</Variable> <Operator> = </Operator> <Brace>{'{'}</Brace>
        </Line>

        {simpleKeys.map(key => (
          <Line indent={1} key={key}>
            <Property>{key}</Property>: {renderPrimitive(aboutData[key] as string | number)}
            <Comma>,</Comma>
          </Line>
        ))}

        <Line indent={1}>
          <Property>stacks</Property>: <Brace>[</Brace>
        </Line>

        {aboutData.stacks.map((item, index) => renderStackItem(item, 2, index === aboutData.stacks.length - 1, index))}

        <Line indent={1}>
          <Brace>]</Brace>
        </Line>

        <Line>
          <Brace>{'}'}</Brace>
        </Line>
      </CodeArea>
    </Window>
  )
}

const Window = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 28px 32px 32px;
  max-width: 720px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  position: relative;

  flex-direction: column;
  align-items: stretch;
`

const Header = styled.div`
  position: absolute;
  top: 14px;
  left: 18px;

  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const Dot = styled.span<{ color: string }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ color }) => color};
`

const CodeArea = styled.div`
  margin-top: 18px;
  font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 16px;
  line-height: 1.7;
  color: #e5e5e5;
  white-space: pre;

  flex-direction: column;
  align-items: flex-start;
`

interface LineProps {
  indent?: number
}

const Line = styled.div<LineProps>`
  flex-direction: row;
  align-items: baseline;

  padding-left: ${({ indent = 0 }) => 8 + indent * 24}px;
`

const Keyword = styled.span`
  color: #ffcb6b;
`

const Variable = styled.span`
  color: #e5e5e5;
`

const Operator = styled.span`
  color: #ffcb6b;
`

const Brace = styled.span`
  color: #e5e5e5;
`

const Property = styled.span`
  color: #c792ea;
`

const StringValue = styled.span`
  color: #82aaff;
`

const NumberValue = styled.span`
  color: #ff5370;
`

const Comma = styled.span`
  color: #e5e5e5;
`
