
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {ComponenteInicial} from './ComponenteInicial';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContainerServicos = styled.div `
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 80vh;
`

const LadoEsquerdo = styled.div`
    background-color: #7FDEFF;
`

const LadoDireito = styled.div`
    background-color: #907AD6;
    padding: 20px;

`
/*[LADO ESQUERDO]Estilização dos elementos que ficam à esquerda da página*/
const ElementosEsquerda = styled.div`
    display: flex;
    justify-content: space-between;
 
`

const Textuals = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3vh;
`

const FirstPTag = styled.p `
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    width: 50%;
    padding: 1vh;
    height: 60%;
`
const Division = styled.hr`
    border-bottom-style: dotted;
    border-bottom-color: #a39c8b;
    width: 70%;
    margin-top: 3vh;
`

const SecondPTag = styled.p `
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    margin-top: 1vh;
    widtht: 50%;
    height: 40%;  
`

const ContainerProv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2vh;
`

const Fotinho = styled.img`
        width: 5vh;
        height: 5vh;
        border-radius: 100%;
        margin-top: 7vh;
`

const AboutProv = styled.h3 `
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    margin-top: 8vh;
    margin-left: 1vh;
`
const PageHeader = styled.h1`
    margin-bottom: 1vh;
`
/*[LADO ESQUERDO]Estilização dos elementos que ficam à esquerda da página*/

/*[LADO ESQUERDO]Estilização dos elementos que ficam à direita da página*/
const OsBotoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5vh;
    justify-content: space-evenly;
`
/*[LADO ESQUERDO]Estilização dos elementos que ficam à direita da página*/


export class ServicoCadastrado extends React.Component {
    render() {
  
      return (
        <div>
            <Header/>
               <ContainerServicos>
                    <LadoEsquerdo>
                        
                        <ElementosEsquerda>
                            <Textuals>
                                <PageHeader>Serviço </PageHeader>
                                <FirstPTag> Quisque faucibus, tellus eget dapibus efficitur, orci magna volutpat magna, ac faucibus metus purus ut purus. Cras non tellus quis urna fringilla efficitur in sollicitudin tortor. In congue, arcu at maximus tempor, dolor nisl fringilla nulla, et rutrum ante massa vel turpis. Phasellus mollis mauris sed velit porta, vitae facilisis nulla auctor. Suspendisse dolor metus, rutrum ac maximus sit amet, ultrices hendrerit tellus. Sed sed sollicitudin velit. Aliquam ac quam vitae libero varius elementum. Sed sed eleifend tortor. Praesent iaculis pharetra molestie. Integer eu nisl a turpis porttitor tempor in non justo. Maecenas fringilla eleifend metus vel posuere. </FirstPTag>
                                    <Division></Division>
                                    <ContainerProv>
                                        <Fotinho src="https://picsum.photos/110/110?a=23"/>
                                        <AboutProv> Nome do anunciante </AboutProv>
                                    </ContainerProv>
                                <SecondPTag>Quisque faucibus, tellus eget dapibus efficitur, orci magna volutpat magna, ac faucibus metus purus ut purus.</SecondPTag>
                            </Textuals>
                            <OsBotoes>
                                <Button variant="fab" size="medium" color="secondary">Prazo</Button>
                                <Button variant="fab" size="medium" color="secondary">Valor</Button>
                                <Button variant="fab" size="medium" color="secondary">$$$</Button>
                            </OsBotoes>
                        </ElementosEsquerda>
                    </LadoEsquerdo>
                    <LadoDireito>
                    <TextField
                        label="Envie uma mensagem!"
                        multiline
                        rows="10"
                        margin="normal"
                        variant="outlined"
                        />
                    </LadoDireito>
               </ContainerServicos>
            <Footer/>
        </div>
      )
    }
  }
