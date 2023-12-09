import styles from './page.module.css'
import Intro from './_components/intro'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Info from './_components/info';

export default function Home() {
  return (
      <main className={styles.main}>
        <Container fluid="sm">
          <Row className='px-3 px-md-5'>
            <Intro />
            <Info />
          </Row>
        </Container>
      </main>
  )
}