import styles from './page.module.css'
import Intro from './_components/intro'
import Info from './_components/info';
import ModeSwitch from './_components/modeSwitch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Home() {
  return (
      <main className={styles.main}>

        <Container fluid="sm" style={{position: 'relative'}}>

          <ModeSwitch></ModeSwitch>

          <Row className='px-3 px-md-5'>
            <Intro />
            <Info />
          </Row>
        </Container>
      </main>
  )
}