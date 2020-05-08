import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const BoxGetJobs = styled.div`
    // display: flex;
    // flex-direction: column;

    height: auto;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    min-height: calc(100vh - 10vh - 15vh);
`

const ContainerFiltros = styled.div`
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
    height: 10px;
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

const BotaoFiltrar = styled.button`
    border-radius: 30px;
    background-color:  #DABFFF;
    padding: 5px 5px;
`

const CardServico = styled(Card)`
    height: 100%;
`
const DivFooter = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
`

class PaginaGetJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            valorInputOrdem: '',
            valorInputMax: '',
            valorInputMin: '',
            valorInputTitulo: '',
            valorInputDescricao: '',
        }
    }

    componentDidMount() {
        const listaDeServicos = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs');

        listaDeServicos.then(response => {
            this.setState({
                jobs: response.data.jobs
            });
        }).catch(error => {
            console.log(error)
        })
    }

    getDados = async () => {
        const dados = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs');
        return dados.data.jobs;
    }

    onChangeInputOrdem = (event) => {
        this.setState({
            valorInputOrdem: event.target.value
        });

    }

    onChangeInputMax = (event) => {
        this.setState({
            valorInputMax: event.target.value
        });
    }

    onChangeInputMin = (event) => {
        this.setState({
            valorInputMin: event.target.value
        });
    }

    onChangeInputTitulo = (event) => {
        this.setState({
            valorInputTitulo: event.target.value
        });
    }

    onChangeInputDescricao = (event) => {
        this.setState({
            valorInputDescricao: event.target.value
        });
    }

    filtrarServicos = () => {
        const listaMin = this.state.jobs.filter(job => {
            if (this.state.valorInputMin === "") {
                return true;
            } else {
                return job.value >= this.state.valorInputMin;
            }
        });

        const listaMax = this.state.jobs.filter(job => {
            if (this.state.valorInputMax === "") {
                return true;
            } else {
                return job.value <= this.state.valorInputMax;
            }
        });

        const listaTitulo = this.state.jobs.filter(job => {
            return job.title.toLowerCase().indexOf(this.state.valorInputTitulo.toLowerCase()) !== -1;
        });

        const listaDescricao = this.state.jobs.filter(job => {
            return job.description.toLowerCase().indexOf(this.state.valorInputDescricao.toLowerCase()) !== -1;
        });

        const listaDeServicosFiltrados = listaDescricao.filter(job => {
            return (listaMin.indexOf(job) !== -1) && (listaMax.indexOf(job) !== -1) && (listaTitulo.indexOf(job) !== -1);
        });

        return listaDeServicosFiltrados;
    }

    onClickInicio = () => {
        this.setState({ pagina: 'Secoes' })
    }

    onClickVaiPraServicoCadastrado = () => {
        this.setState({ pagina: 'ServicoCadastrado' })
    }



    render() {
        const servicosFiltrados = this.filtrarServicos();
        const listaFinal = this.state.valorInputOrdem === 'OrdemCrescente' ? servicosFiltrados.sort(function (a, b) {
            return a.value - b.value
        }) :
            servicosFiltrados.sort(function (a, b) {
                return b.value - a.value
            })

        const listaDeServicos = listaFinal.map((job, index) => {

            return (

                <CardServico>
                    <CardActionArea onClick={this.vaiPraServicoCadastrado}>
                        <CardMedia
                            component={'img'}
                            alt={job.title}
                            height={'140'}
                            image={`https://picsum.photos/110/110?a=${index + 1}`}
                            title={job.title}
                        />
                        <CardContent>
                            <Typography variant={"h5"} component={"h2"}>
                                {job.title}
                            </Typography>
                            <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                                {job.description}
                            </Typography>
                            <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                                {`R$ ${job.value}`}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CardServico>
            );
        })

        return (
            <BoxGetJobs>

                <Container>

                    <ContainerFiltros>

                        <h3>Filtros</h3>

                        <p>Ordenar por:</p>

                        <OrdenaProdutos value={this.state.valorInputOrdem} onChange={this.onChangeInputOrdem}>

                            <option value={'OrdemCrescente'}>Ordem Crescente</option>
                            <option value={'OrdemDecrescente'}>Ordem Decrescente</option>

                        </OrdenaProdutos>

                        <LabelValorMax>Valor Máximo:</LabelValorMax>
                        <InputValorMax
                            type={'number'}
                            value={this.state.valorInputMax}
                            onChange={this.onChangeInputMax}
                        />

                        <LabelValorMin>Valor Mínimo:</LabelValorMin>
                        <InputValorMin
                            type={'number'}
                            value={this.state.valorInputMin}
                            onChange={this.onChangeInputMin}
                        />

                        <LabelTitulo>Título:</LabelTitulo>
                        <InputTitulo
                            type={'text'}
                            value={this.state.valorInputTitulo}
                            onChange={this.onChangeInputTitulo}
                        />

                        <LabelDescricao>Descrição:</LabelDescricao>
                        <InputDescricao
                            type={'text'}
                            value={this.state.valorInputDescricao}
                            onChange={this.onChangeInputDescricao}
                        />

                    </ContainerFiltros>

                    <SecaoServicos>

                        {listaDeServicos}

                    </SecaoServicos>
                </Container>

                <DivFooter>
                    <Footer />
                </DivFooter>
                
                
            </BoxGetJobs>
        );
    }
}

export default PaginaGetJobs