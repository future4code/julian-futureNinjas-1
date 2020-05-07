import React from 'react'
import styled from 'styled-components'
import axios from "axios"

const Container = styled.div`
 width: 100%;
 height: 15vh;
 background-color: #DABFFF;
 position: relative;
 bottom: 0;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
const Icones = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
const Img = styled.img`
    width: 40px;
    margin: 0 20px;
`


class Footer extends React.Component {
    render() {
        return (
            <Container>
                <Icones>
                    <a href='https://www.facebook.com/' target="_blank" >
                        <Img src='https://image.flaticon.com/icons/png/512/23/23660.png' alt='Facebook'  />
                    </a>
                    <a href='https://www.instagram.com/' target="_blank" >
                        <Img src='https://image.flaticon.com/icons/svg/87/87390.svg' alt='Instagram' />
                    </a>
                    <a href='https://web.whatsapp.com/' target="_blank" >
                        <Img src='https://img.icons8.com/ios-filled/50/000000/whatsapp.png' alt='Whatsapp' />
                    </a>
                </Icones>
                <h4>O talento certo, no momento certo.</h4>
            </Container>
        )
    }
}

export default Footer