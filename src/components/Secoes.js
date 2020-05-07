import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'
import { ComponenteInicial } from './ComponenteInicial'
import Header from './Header'
import Footer from './Footer'
import InputLabel from '@material-ui/core/InputLabel';

const SecaoBusca = styled.div`
    background-color: #aba9a4;
    height: 60vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const H3 = styled.h2`
    margin-bottom: 30px;
`
const SecaoTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    border-radius: 100%; 
`
const SecaoConsumidor = styled.div`
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #907AD6;
    padding: 0 10vh;
`
const SecaoFornecedor = styled.div`
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #7FDEFF;
    padding: 0 10vh;
`
const ImgProduto = styled.img`
    border-radius: 100%; 
`
const ImagemProdutos = styled.div`
    width: 60vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const Paragrafo = styled.p`
    margin-bottom: 20px;
`

class Secoes extends React.Component {
    componentDidMount() {
        if (this.props.scroll === 'Fornecedor') {
            window.scrollTo({ top: 800, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: 466, behavior: 'smooth' })
        }
    }

    render() {

        return (
            <div>
                <Header />
                <SecaoBusca>
                    <SecaoTexto>
                        <H3>O jeito mais esperto de contratar um serviço!</H3>
                        <Button variant='contained' color='primary'>Veja Mais</Button>
                    </SecaoTexto>
                    <Img src='https://picsum.photos/300/300?a=1' />
                </SecaoBusca>
                <SecaoConsumidor id='Consumidor'>
                    <SecaoTexto>
                        <H3>Para o consumidor...</H3>
                        <p>bla bla bla bla bla</p>
                    </SecaoTexto>
                    <ImagemProdutos>
                        <ImgProduto src='https://picsum.photos/110/110?a=1' />
                        <ImgProduto src='https://picsum.photos/110/110?a=2' />
                        <ImgProduto src='https://picsum.photos/110/110?a=3' />
                        <ImgProduto src='https://picsum.photos/110/110?a=4' />
                        <ImgProduto src='https://picsum.photos/110/110?a=5' />
                    </ImagemProdutos>
                </SecaoConsumidor>
                <SecaoFornecedor id='Fornecedor'>
                    <ImagemProdutos>
                        <ImgProduto src='https://picsum.photos/110/110?a=6' />
                        <ImgProduto src='https://picsum.photos/110/110?a=7' />
                        <ImgProduto src='https://picsum.photos/110/110?a=8' />
                        <ImgProduto src='https://picsum.photos/110/110?a=9' />
                        <ImgProduto src='https://picsum.photos/110/110?a=10' />
                    </ImagemProdutos>
                    <SecaoTexto>
                        <H3>Para o fornecedor...</H3>
                        <Paragrafo>bla bla bla bla bla</Paragrafo>
                        <Button variant='contained' color='secondary'>Cadastre Seu Serviço</Button>
                    </SecaoTexto>
                </SecaoFornecedor>
                <Footer />
            </div>
        )
    }
}
export default Secoes