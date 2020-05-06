import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #4F518C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Frases = styled.div`
  width: 500px; 
  display: flex;
  justify-content: space-between;
  margin: 10vh 0;
  
`
const Botoes = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`
const H1 = styled.div`
  display: flex;
  font-size: 5vh;
`
const H1Ninjas = styled.h1`
  color: white;
`

export class ComponenteInicial extends Component {
  render() {

    return (
      <Container>
        <H1>
          <h1>LABE</h1>
          <H1Ninjas>NINJAS</H1Ninjas>
        </H1>
        <Frases>
          <h4>O que você precisar</h4>
          <h4>Quando você precisar</h4>
        </Frases>
        <p>Eu sou...</p>
        <Botoes>
          <Button variant='contained'>FORNECEDOR</Button>
          <Button variant='contained'>CONSUMIDOR</Button>
        </Botoes>
      </Container>
    )
  }
}
