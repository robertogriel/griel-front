import styled from 'styled-components'
import { HtmlHead } from '../components/Html/Head'
import Main from '../components/Html/Main'
import { Button, Table, TableBody, TableHead } from '@mui/material'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp'
import RadioButtonUncheckedSharpIcon from '@mui/icons-material/RadioButtonUncheckedSharp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const LojaVirtual: React.FC = () => {
  const list = [
    {
      title: 'Venda 24 horas por dia, 7 dias por semana',
      description: `<p>Sua loja virtual funciona 24 horas, incluindo os feriados, e de forma automatizada,
      verifica seus pagamentos, dá baixa no estoque de produtos vendidos e com uma boa descrição em seus produtos,
      responde a todas as dúvidas de seus clientes.</p>`
    },
    {
      title: 'Gerencie o seu estoque',
      description: `<p>Cadastre o produto em sua loja virtual apenas uma vez, e tenha acesso em tempo real e de qualquer
      lugar como está seu estoque. Cada venda realizada online atualiza a quantidade disponível de forma automática.</p>
            <p>Use a sua própria loja virtual para gerenciar também suas vendas em loja física,
            mantendo seu estoque organizado e atualizado.</p>`
    },
    {
      title: 'Sua loja nos principais buscadores',
      description: `<p>A sua loja já vai estar preparada para que os buscadores possam indexar seus produtos,
      e exibi-los nas melhores posições.</p>
            <p>Também é gerado de forma automática um mapa da loja, contendo as categorias, marcas e produtos,
            que é integrado aos buscadores.</p>`
    },
    {
      title: 'Saiba como estão suas visitas',
      description: `<p>Sua loja estará integrada ao Google Analytics, uma poderosa e gratuita ferramenta, que mostra de
      onde seus visitantes estão vindo, e também oferece em tempo real um relatório de acesso, mostrando a página,
      origem e duração da visita.</p>`
    },
    {
      title: 'Fretes mais baratos e com rastreamento',
      description: `<p>A sua loja é integrada com o sistema MelhorEnvio, que oferece diversas opções de envios
      além dos Correios, e com valor de frete muito mais barato do que na agência.</p>
            <p>Além disso, todo o processo de rastreio é feito de forma automática, da sua loja para seu cliente,
            informando o ato da postagem, transporte e quaisquer ocorrências.</p>`
    },
    {
      title: 'Receba por Cartão de Crédito e Boleto Bancário',
      description: `<p>Com a integração com o sistema do PagSeguro, seu comprador pode pagar com
      segurança e comodidade dentro de sua própria loja. Além de contar com a menor taxa do mercado.</p>
            <p>Todas as atualizações referente ao pagamento são atualizadas de forma automática, seja por cartão de
            crédito ou boleto bancário.</p>
            <p>Você ainda pode oferecer parcelamento sem juros e/ou desconto para quem pagar no boleto bancário.</p>`
    },
    {
      title: 'Receba por por PIX',
      description: `<p>Receba seus pegamentos via PIX com aprovação automática, através do sistema PagHiper.</p>
      <p>Não se preocupe com comprovantes e confirmações manuais, se o cliente efetuar o pagamento,
      o pedido é aprovado automaticamente.</p>`
    },
    {
      title: 'Carrinho abandonado',
      description: `<p>Seu cliente abandonou a compra momentos antes de finalizar? Com o recurso de carrinho abandonado
      a sua loja irá lembrar seu comprador para finalizar a compra, podendo inclusive oferecer cupons de descontos
      para aumentar a chance de conversão.</p>`
    },
    {
      title: 'Grupos de Clientes',
      description: `<p>Anuncie o mesmo produto com preços diferentes para cada grupo de cliente, podendo limitar a
      compra a uma quantidade de itens no carrinho por exemplo.</p>
            <p>Com esse recurso, você pode criar grupos para atacado e varejo, oferecendo preços e condições específicas
            para cada grupo.</p>`
    },
    {
      title: 'Filtros avançados',
      description: `<p>Com um poderoso filtro, seus compradores poderão escolher exatamente o que estão procurando, por
      exemplo, cores, tamanhos, tipos, marcas e preços.</p>`
    },
    {
      title: 'Variações dos produtos',
      description: `<p>Com este importante recurso, você pode exibir na página do produto todas as variações daquele
      modelo, por exemplo suas cores.</p>`
    },
    {
      title: 'Lembretes e cancelamento automáticos',
      description: `<p>Se houver compras não paga, a loja irá, de forma automática, enviar lembretes de pagamento e/ou
      até cancelar o pedido após um prazo definido por você.</p>
            <p>E quando o pedido é cancelado, o produto retorna ao
            estoque para ficar disponível para outros compradores.</p>`
    },
    {
      title: 'Suas próprias formas de envio',
      description: `<p>Crie formas de envio distintas e com valores personalizados. Você pode criar formas de envio
      baseado na cidade, forma de pagamento, produto escolhido, dentre muito mais opções.</p>`
    },
    {
      title: 'Formas de pagamento personalizadas',
      description: `<p>Você pode informar suas contas bancárias para depósito ou transferência, aceitar pagamento na
      retirada, dentre outras formas de pagamento, também baseando-se na cidade, produto ou outras opções.</p>`
    },
    {
      title: 'Cancelamento do pedido pelo próprio cliente',
      description: `<p>Se seu cliente, por algum motivo, desejar cancelar uma compra que ainda não tenha sido paga, você
      pode habilitar esta opção em sua loja, definindo um período máximo para que o pedido seja cancelado.</p>
      <p>Ao cancelar o pedido, o produto irá retornar ao estoque para ficar disponível para outros compradores.</p>`
    },
    {
      title: 'Avise-me quando disponível',
      description: `<p>Deixe que seu cliente seja lembrado quando um produto desejado for reposto em sua loja.</p>
            <p>Se um produto ou opção de um produto esgotar-se,
            o seu comprador poderá solicitar o aviso, informando o e-mail.</p>`
    },
    {
      title: 'Checkout em uma página',
      description: `<p>Aumente as chances de conversão com uma página de finalização de pedido simples e com menos
      distrações, onde seu cliente está a poucos cliques para finalizar o pedido.</p>`
    }
  ]

  const resources = [
    {
      title: 'Tudo que sua loja precisa para começar a vender online',
      basic: true,
      complete: true
    },
    {
      title: 'Gerenciamento de estoque',
      basic: true,
      complete: true
    },
    {
      title: 'Gerenciamento de clientes',
      basic: true,
      complete: true
    },
    {
      title: 'Produtos com SEO automático',
      basic: true,
      complete: true
    },
    {
      title: 'Estatísticas com Google Analytics',
      basic: true,
      complete: true
    },
    {
      title: 'Frete mais barato com o MelhorEnvio',
      basic: true,
      complete: true
    },
    {
      title: 'Rastreamento de entregas',
      basic: true,
      complete: true
    },
    {
      title: 'Recuperação de carrinho abandonado',
      basic: true,
      complete: true
    },
    {
      title: 'Grupos de clientes com condições separadas',
      basic: true,
      complete: true
    },
    {
      title: 'Filtros de busca avançado',
      basic: true,
      complete: true
    },
    {
      title: 'Variações dos produtos',
      basic: true,
      complete: true
    },
    {
      title: 'Receba pagamentos via PIX',
      basic: true,
      complete: true
    },
    {
      title: 'Integração com PagSeguro para cartão de crédito, boleto e PIX',
      basic: false,
      complete: true
    },
    {
      title: 'Lembrete e cancelamento de pedido automático',
      basic: false,
      complete: true
    },
    {
      title: 'Formas de envio personalizadas',
      basic: false,
      complete: true
    },
    {
      title: 'Formas de pagamento personalizadas',
      basic: false,
      complete: true
    },
    {
      title: 'Deixar o cliente cancelar o próprio pedido',
      basic: false,
      complete: true
    },
    {
      title: 'Avisar quando disponível',
      basic: false,
      complete: true
    },
    {
      title: 'Checkout de uma página',
      basic: false,
      complete: true
    },
    {
      title: 'Treinamento presencial ou remoto',
      basic: true,
      complete: true
    },
    {
      title: 'Suporte para tirar suas dúvidas',
      basic: true,
      complete: true
    },
    {
      title: 'Backup de arquivos e banco de dados frequentemente',
      basic: true,
      complete: true
    }
  ]

  function openWhatsApp() {
    window.open(
      'https://api.whatsapp.com/send?phone=5537991848312&text=Eu%20quero%20ter%20minha%20loja%20virtual',
      '_blank'
    )
  }

  return (
    <Main>
      <HtmlHead title="<Lojas Virtuais /> ● Griel Developer" metaDescription="." />
      <Header>
        <h1>Lojas Virtuais</h1>
        <h2>Tenha sua própria loja virtual e venda muito mais!</h2>
        <p>
          Possuindo uma loja virtual, você terá controle total de seu estoque, gerenciamento de clientes, gerenciamento
          de vendas, e muito mais! Tudo isso sem taxa de comissão, sem limites de produtos e sem pagar nada a mais por
          venda.
        </p>
      </Header>
      <Resources>
        <article>
          {list.map((item, index) => (
            <div className="item" key={index}>
              <h3>{item.title}</h3>
              <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
            </div>
          ))}
        </article>
      </Resources>
      <ResourcesDifferences>
        <header>
          <h2>Diferenças de recursos entre as lojas</h2>
          <p>São duas opções de loja virtual, a Loja Básica e a Loja Completa.</p>
          <p>
            A <b>Loja Básica</b> oferece todos os recursos necessários para você começar a vender e definir a sua
            presença online. A <b>Loja Completa</b> oferece todos os recursos da Loja Básica e diversos outros recursos
            de automatização e personalização.
          </p>
          <br />
          <h2>Confira na tabela abaixo a diferença entre as lojas:</h2>
        </header>
        <div style={{ overflowX: 'auto' }}>
          <ResourcesTable border={1}>
            <TableHead>
              <tr>
                <th>Recurso</th>
                <th>Loja Básica</th>
                <th>Loja Completa</th>
              </tr>
            </TableHead>
            <TableBody>
              {resources.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.basic ? <CheckCircleSharpIcon /> : <RadioButtonUncheckedSharpIcon />}</td>
                  <td>{item.complete ? <CheckCircleSharpIcon /> : <RadioButtonUncheckedSharpIcon />}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <strong>R$ 2.999,00</strong>
                  <br />
                  <span>ou 12x de R$310,17</span>
                </td>
                <td>
                  <strong>R$ 3.499,00</strong>
                  <br />
                  <span>ou 12x de R$361,88</span>
                </td>
              </tr>
            </TableBody>
          </ResourcesTable>
        </div>
      </ResourcesDifferences>
      <Hosting>
        <header>
          <h2>Hospedagem</h2>
          <p>A hospedagem é onde ficam armazenados os conteúdos de sua loja.</p>
          <p>
            Sua loja ficará em um VPS (Virtual Private Server ou Servidor Privado Virtual) de alta performance e
            disponibilidade.
          </p>
          <p>
            A hospedagem é renovada todos os meses e tem o custo de <b>R$95,00</b>/mês.
          </p>
          <small>Valores válidos até o dia 31/12/2026.</small>
        </header>
        <div></div>
      </Hosting>
      <Contact>
        <header>
          <h2>Quer ter a sua própria loja virtual?</h2>
          <p>Entre em contato agora mesmo através do WhatsApp (37) 9.9184-8312</p>
        </header>
        <Button variant="contained" color="primary" onClick={openWhatsApp}>
          <WhatsAppIcon /> Entrar em contato
        </Button>
      </Contact>
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
  h2 {
    color: var(--white);
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem;
  }
  p {
    color: var(--white);
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.5rem;
  }
`
const Resources = styled.section`
  flex-direction: column;
  align-self: center;
  margin-top: 2rem;
  border: 1px solid var(--blue-1);
  padding: 2rem;
  margin: 1rem;
  border-radius: var(--space);
  background-color: var(--blue-4);
  max-width: 70rem;
  width: 100%;
  article {
    grid-gap: 40px;
    display: grid;
    @media (min-width: 469px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .item {
      flex-direction: column;
      h3 {
        font-weight: 600;
        justify-content: flex-start;
        font-size: calc(1.3rem + 0.6vw);
      }
      p {
        font-weight: 300;
      }
      h3,
      p {
        color: var(--white);
      }
    }
  }
`
const ResourcesDifferences = styled.section`
  flex-direction: column;
  margin-top: 2rem;
  border: 1px solid var(--blue-1);
  padding: 2rem;
  margin: 1rem;
  border-radius: var(--space);
  background-color: var(--blue-4);
  max-width: 70rem;
  width: 100%;
  align-self: center;
  header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--space) * 2);
    h2 {
      font-size: 2rem;
    }
    h2,
    p {
      color: var(--white);
      text-align: center;
    }
  }
`
const ResourcesTable = styled(Table)`
  background-color: #1b546d;
  border-radius: var(--space);
  overflow: hidden;
  border-collapse: collapse;
  border-color: var(--blue-4);
  color: var(--white);
  text-align: center;
  thead {
    tr {
      th {
        padding: 1rem;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 0.5rem;
        svg {
          font-size: 1.5rem;
          color: #b0ffb3;
        }
      }
    }
    tr:nth-child(odd) {
      background-color: #1b546d;
    }
    tr:nth-child(even) {
      background-color: #1b546d;
    }
    tr:last-child {
      background-color: #1b546d;
    }
  }
`
const Hosting = styled.section`
  flex-direction: column;
  margin-top: 2rem;
  border: 1px solid var(--blue-1);
  padding: 2rem;
  margin: 1rem;
  border-radius: var(--space);
  background-color: var(--blue-4);
  max-width: 70rem;
  width: 100%;
  align-self: center;
  header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--space) * 2);
    h2 {
      font-size: 2rem;
    }
    h2,
    p,
    small {
      color: var(--white);
      text-align: center;
    }
  }
`
const Contact = styled.section`
  flex-direction: column;
  margin-top: 2rem;
  border: 1px solid var(--blue-1);
  padding: 2rem;
  margin: 1rem;
  border-radius: var(--space);
  background-color: var(--blue-4);
  max-width: 70rem;
  width: 100%;
  align-self: center;
  header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--space) * 2);
    h2 {
      font-size: 2rem;
    }
    h2,
    p,
    small {
      color: var(--white);
      text-align: center;
    }
  }
  button {
    justify-content: center;
    align-self: center;
    max-width: 20rem;
  }
`

export default LojaVirtual
