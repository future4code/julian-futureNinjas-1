import React from 'react'
import styled from 'styled-components'
import axios from "axios"
import Button from '@material-ui/core/Button'

const Head = styled.div`
 width: 100wv;
 height: 10vh;
 background-color: #2c2a4a;
 display: flex;
 justify-content: flex-end;
 align-items: center;
`
const Img = styled.img`
 height: 9vh;
`

class Header extends React.Component {
    render() {
        return (
            <Head>
                <Button onClick={this.props.onClickBotao}>
                <Img src="https://lh3.googleusercontent.com/-f40IlPbHJ-c/XrHoVVmRupI/AAAAAAAAA2w/1rsRXEUjW_gmDA6Qek0dnNyist4Y-ixOwCK8BGAsYHg/s0/Future%2BNinjas.png" />
                </Button>
            </Head>
        )
    }
}

export default Header