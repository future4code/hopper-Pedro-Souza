import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 10,
    comentando: false,
    numeroComentarios: 5
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    if(this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    // "curtido" altera a imagem iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    // "comentando" aciona o componente SecaoComentario abaixo do footer
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    // A SecaoComentario recebe uma props chamada aoEnviar

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
        /* Esses valores fazem parte da intera????o do usu??rio com as imagens
            - Ao clicar no "iconeCurtida o usu??rio manda uma props com a msg de curtida"
            - numeroCurtidas ?? um estado iniciado com valor 0, ainda n??o ?? poss??vel alter??-lo
            - valorContador est?? relacionado ao numeroCurtidas pela fun????o onClickCurtida
            */
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        
        <IconeComContador
        /* Continuando...
          - Ao Clicar no "iconeComentario" o usu??rio acessa a barra de input
          - "numeroComentarios" ?? um outro estado iniciado com valor 0, alter??vel
           atrav??s da fun????o "onClickComentario"
        */ 
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        {/* Todas as props s??o enviadas ao componente IconeComContador */}
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post