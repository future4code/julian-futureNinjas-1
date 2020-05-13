import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'
import {ComponenteInicial} from './ComponenteInicial'
import { CadastroServicos }  from './CadastroServicos'
import { ServicoCadastrado }  from './ServicoCadastrado'
import PaginaGetJobs from './PaginaGetJobs'

export class AppContainer extends Component {
  render() {

    return (
      <div>
        <ComponenteInicial />
      </div>
    )
  }
}
