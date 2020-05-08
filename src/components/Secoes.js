import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'
import { ComponenteInicial } from './ComponenteInicial'
import Header from './Header'
import Footer from './Footer'
import InputLabel from '@material-ui/core/InputLabel';
import PaginaGetJobs from './PaginaGetJobs'
import { CadastroServicos } from './CadastroServicos'

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
const Produto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
`

class Secoes extends React.Component {
    state = {
        pagina: 'Secoes'
    }

    componentDidMount() {
        if (this.props.scroll === 'Fornecedor') {
            window.scrollTo({ top: 800, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: 466, behavior: 'smooth' })
        }
    }

    onClickGetJobs = () => {
        this.setState({ pagina: 'GetJobs' })
    }

    onClickCadastro = () => {
        this.setState({ pagina: 'Cadastro' })
    }

    onClickInicio = () => {
        this.setState({ pagina: 'Secoes' })
    }

    render() {
        switch (this.state.pagina) {
            case 'Secoes':
                return (
                    <div>
                        <Header onClickBotao={this.onClickInicio} />
                        <SecaoBusca>
                            <SecaoTexto>
                                <H3>O jeito mais esperto de contratar um serviço!</H3>
                                <Button onClick={this.onClickGetJobs} variant='contained' color='primary'>Veja Mais</Button>
                            </SecaoTexto>
                            <Img src='https://picsum.photos/300/300?a=1' />
                        </SecaoBusca>
                        <SecaoConsumidor id='Consumidor'>
                            <SecaoTexto>
                                <H3>Para o consumidor...</H3>
                                <p>Temos os melhores serviços e os melhores profissionais disponíveis para o que precisar!</p>
                            </SecaoTexto>
                            <ImagemProdutos>
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=1' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=2' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=3' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=4' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=5' />
                                    <p>Título</p>
                                </Produto> 
                            </ImagemProdutos>
                        </SecaoConsumidor>
                        <SecaoFornecedor id='Fornecedor'>
                            <ImagemProdutos>
                            <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=6' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=7' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=8' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=9' />
                                    <p>Título</p>
                                </Produto> 
                                <Produto>
                                    <ImgProduto src='https://picsum.photos/110/110?a=10' />
                                    <p>Título</p>
                                </Produto> 
                            </ImagemProdutos>
                            <SecaoTexto>
                                <H3>Para o fornecedor...</H3>
                                <Paragrafo>É um especialista no assunto? Basta se cadastrar para ter os seus serviços divulgados para um amplo número de pessoas!</Paragrafo>
                                <Button onClick={this.onClickCadastro} variant='contained' color='secondary'>Cadastre Seu Serviço</Button>
                            </SecaoTexto>
                        </SecaoFornecedor>
                        <Footer />
                    </div>
                )
            case 'GetJobs':
                return (<div>
                    <Header onClickBotao={this.onClickInicio} />
                    <PaginaGetJobs />
                </div>)
            case 'Cadastro':
                return (<div>
                    <Header onClickBotao={this.onClickInicio} />
                    <CadastroServicos />
                </div>)
        }
    }
}
export default Secoes