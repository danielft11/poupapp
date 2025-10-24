import styles from './app.module.css'

import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import { DailyBudget } from './components/DailyBudget'
import { SavingStatus } from './components/SavingsStatus'
import { Transactions } from './components/Transactions'
import Card from './components/Card'
import { Accounts } from './components/Accounts'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput placeholder="Procure seu dinheiro..." />
          <div>
            <Typography variant="h1">
              Olá, Daniel!
            </Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={250} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira:
              </Card.Header>
              <Card.Body>
                <SavingStatus percent={45} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira:
              </Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas:
              </Card.Header>
              <Card.Body>
                <Accounts />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  )
}

export default App
