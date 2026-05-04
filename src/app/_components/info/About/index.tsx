import React from 'react'
import styles from './styles.module.css'
import Data from '../../../data.json'

const About = () => {
  return (
    <div className={styles.about} id='about'>

      <h5 className='mb-3'></h5>


      <p>Minha jornada na tecnologia começou com uma transição decisiva para Desenvolvimento de Sistemas. O que começou como uma curiosidade pela programação durante a primeira graduação, transformou-se em uma carreira sólida focada em construir soluções que unem performance e impacto real.</p> 
      <p>Hoje, sou Analista de Sistemas formado e atuo como Desenvolvedor Web Freelancer. Meu histórico inclui o desenvolvimento de diversas aplicações utilizando Javascript, MySQL e PostgreSQL, entregando projetos funcionais e robustos para clientes reais.</p>
      <p>Atualmente, foco minha evolução no ecossistema JavaScript/TypeScript, utilizando React e Next.js para criar interfaces modernas e escaláveis. Além disso, estou cursando uma Especialização em Análise de Dados, o que me permite olhar para o desenvolvimento não apenas como escrita de código, mas como uma forma de estruturar informações e gerar insights valiosos para os usuários.</p>
      <p>No início deste ano (2026) comecei minha especialização em <b>Análise de Dados</b> pelo <a href="https://cesar.school/" target="_blank">Cesar School</a>, o que me permite olhar para o desenvolvimento não apenas como escrita de código, mas como uma forma de estruturar informações e gerar insights valiosos para os usuários.</p>
      <p><b>O que trago para o seu projeto:</b></p>
      <p><span><b>Experiência Full-stack:</b></span> Experiência com bancos de dados relacionais e lógica de backend.</p>
      <p><span><b>Foco em Front-end Moderno:</b></span> Criação de interfaces performáticas com as melhores práticas de mercado.</p>
      <p><span><b>Mentalidade Analítica:</b></span> Capacidade de interpretar dados para melhorar a experiência do usuário e a eficiência do software.</p>
    </div>
    )
}

export default About