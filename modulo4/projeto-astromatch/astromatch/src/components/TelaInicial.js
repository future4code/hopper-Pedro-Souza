import React from 'react';
import styled from 'styled-components'

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 380px;
    padding: 10px;
    gap: 5px;
`

const Reacoes = styled.div`
    display: flex;
    justify-content: space-between;
`

function TelaInicial(props){
    console.log(props.perfil)
    return (
      <Tela>
          <button onClick={() => props.mudaTela(1)}>Ver Matches</button>
            <img src={props.perfil.photo} alt={props.perfil.photo_alt}/>
            <p>{props.perfil.name}, {props.perfil.age} anos</p>
            <p>{props.perfil.bio}</p>
          <Reacoes>
              <button onClick={() => props.escolherPessoa(props.perfil.id,false)}>Não Gostei</button>
              <button onClick={() => props.escolherPessoa(props.perfil.id,true)}>MATCH!</button>
          </Reacoes>
          <button onClick={() => props.limpar()}>Limpar Matches</button>
      </Tela>
    );
}

export default TelaInicial;
