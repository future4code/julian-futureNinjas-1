import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import Header from './Header'
import Footer from './Footer'

const BoxGetJobs = styled.div`
    height: 80vh;

`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    
`

const ContainerFiltros = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    background-color: #7fdeff;
    padding: 10%;
`

const OrdenaProdutos = styled.select`
    
`
const SecaoServicos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10%;
    padding: 5%;

`

const ImgServico = styled.img`
    border-radius: 100%;
`

const LabelValorMax = styled.label`
`

const LabelValorMin = styled.label`
`

const InputValorMax = styled.input`
    margin: 5px;
`

const InputValorMin = styled.input`
    margin: 5px;
`

const LabelTitulo = styled.label`
`

const InputTitulo = styled.input`
    margin: 5px;
`

const LabelDescricao = styled.label`
`

const InputDescricao = styled.input`
    margin: 5px;
`

const BotaoFiltrarTitulo = styled.button`
    border-radius: 30px;
    background-color: #DABFFF;
    padding: 5px 15px;
`

const BotaoFiltrarDescricao = styled.button`
    border-radius: 30px;
    background-color:  #DABFFF;
    padding: 5px 5px;
`

class PaginaGetJobs extends React.Component {
    onClickInicio = () => {
        this.setState({ pagina: 'Secoes' })
    }
    render() {
        return (
            <BoxGetJobs>
                <Container>

                    <ContainerFiltros>

                        <h3>Filtros</h3>

                        <p>Ordenar por:</p>

                        <OrdenaProdutos>

                            <option>Ordem Crescente</option>
                            <option>Ordem Decrescente</option>

                        </OrdenaProdutos>

                            <LabelValorMax>Valor Máximo:</LabelValorMax>
                            <InputValorMax type={'number'} value={''} onChange={''} />

                            <LabelValorMin>Valor Mínimo:</LabelValorMin>
                            <InputValorMin type={'number'} value={''} onChange={''} />

                            <LabelTitulo>Título:</LabelTitulo>
                            <InputTitulo type={'text'} value={''} onChange={''} />

                            <BotaoFiltrarTitulo>Filtrar título</BotaoFiltrarTitulo>

                            <LabelDescricao>Descrição:</LabelDescricao>
                            <InputDescricao type={'text'} value={''} onChange={''} />

                            <BotaoFiltrarDescricao>Filtrar descrição</BotaoFiltrarDescricao>

                    </ContainerFiltros>

                    <SecaoServicos>

                        <ImgServico src='https://picsum.photos/110/110?a=1' />
                        <ImgServico src='https://picsum.photos/110/110?a=2' />
                        <ImgServico src='https://picsum.photos/110/110?a=4' />
                        <ImgServico src='https://picsum.photos/110/110?a=6' />
                        <ImgServico src='https://picsum.photos/110/110?a=8' />
                        <ImgServico src='https://picsum.photos/110/110?a=12' />
                        <ImgServico src='https://picsum.photos/110/110?a=14' />
                        <ImgServico src='https://picsum.photos/110/110?a=24' />

                    </SecaoServicos>

                </Container>

                <Footer />

            </BoxGetJobs>
        );
    }
}

export default PaginaGetJobs