import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import {ComponenteInicial} from './ComponenteInicial'
import Header from './Header'
import Footer from './Footer'
import React from 'react'

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

`

export class ServicoCadastrado extends React.Component {
    render() {
  
      return (
        <div>
            <Header/>
               <ContainerServicos>
                    <LadoEsquerdo>
                        <h1>Serviço </h1>
                        <p> Quisque faucibus, tellus eget dapibus efficitur, orci magna volutpat magna, ac faucibus metus purus ut purus. Cras non tellus quis urna fringilla efficitur in sollicitudin tortor. In congue, arcu at maximus tempor, dolor nisl fringilla nulla, et rutrum ante massa vel turpis. Phasellus mollis mauris sed velit porta, vitae facilisis nulla auctor. Suspendisse dolor metus, rutrum ac maximus sit amet, ultrices hendrerit tellus. Sed sed sollicitudin velit. Aliquam ac quam vitae libero varius elementum. Sed sed eleifend tortor. Praesent iaculis pharetra molestie. Integer eu nisl a turpis porttitor tempor in non justo. Maecenas fringilla eleifend metus vel posuere. </p>
                        
                    </LadoEsquerdo>
                    <LadoDireito>Direito</LadoDireito>
               </ContainerServicos>
            <Footer/>
        </div>
      )
    }
  }