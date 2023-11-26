import Image from 'next/image'
import styles from './page.module.css'
import Intro from './_components/intro'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Intro />
          <Col>
            <div className={styles.info}>Teste 2</div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
