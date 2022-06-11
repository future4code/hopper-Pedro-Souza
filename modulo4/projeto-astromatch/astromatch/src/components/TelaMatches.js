import React from 'react';
import styled from 'styled-components'
import CardMatch from './CardMatch';

const Tela = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 380px;
    padding: 10px;
    gap: 5px;
`

function TelaMatches(props){
    const rendLista = props.matches.map((item,index,array) => {
        return <CardMatch match={item}/>
    })
    return (
      <Tela>
          <button onClick={() => props.mudaTela(0)}>Ver Perfis</button>
          {rendLista}
          <button onClick={() => props.limpar()}>Limpar Matches</button>
      </Tela>
    )
}

export default TelaMatches;
