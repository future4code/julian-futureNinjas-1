import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import {ComponenteInicial} from './ComponenteInicial'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import Inputs from '@material-ui/core/Input'
import InputDate from '@material-ui/core/InputBase'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5%;
    
`

const DivCadastro = styled.div`
    display: flex;
    background-color: #7FDEFF;
    width: 100vh; 
    flex-direction: column;
    justify-self: center;
    margin-top: 3%;
    padding: 2px;
`

const Labels = styled.label `
    display: flex;
    flex-direction: flex-start
`

const Inputsy = styled(Inputs) `
    width: 25vh;
    display: flex;
    align-self: center;
`
const InputData = styled(InputDate)`
    width: 22vh;
    display: flex;
    align-self: center;
`
const Botaozito = styled(Button) `
    width: 22vh;
    margin-top: 1vh;
    display: flex;
    justify-content: center;
`
const DivInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
`
const DivSoPraEle = styled.div`
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    padding: 3px;
`
export class CadastroServicos extends React.Component {
  render() {

    return (
      <div>
          <Header/>

          <Container> 
                <h2>Cadastre o seu serviço</h2>
                    <DivCadastro>
                        <DivInputs>
                        <label for="titulo">Titulo</label>
                        <Inputsy type="text" id="titulo"></Inputsy>
                        </DivInputs>
                        <DivInputs>
                        <label for="descript">Descrição</label>
                        <Inputsy type="text" id="descript"></Inputsy>
                        </DivInputs>
                        <DivInputs>
                        <label for="remuneracao">valor da remuneração</label>
                        <Inputsy type="text" id="remuneracao"></Inputsy>
                        </DivInputs>
                        <DivInputs>
                        <label for="pagamento">Método(s) de pagamento</label>
                        <Inputsy type="text" id="pagamento"></Inputsy>
                        </DivInputs>
                        <DivInputs>
                        <label for="prazo">Prazo</label>
                        <InputData type="date" id="prazo"></InputData>
                        </DivInputs>
                       <DivSoPraEle>
                        <Botaozito size="small" variant="contained" color="secondary">Cadastrar</Botaozito>
                        </DivSoPraEle>
                    </DivCadastro>
          </Container>

          <Footer/>
      </div>
    )
  }
}
