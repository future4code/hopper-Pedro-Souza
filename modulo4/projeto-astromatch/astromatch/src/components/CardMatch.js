import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
`

const Imagem = styled.img`
    height: 50px;
`

function CardMatch(props){
    return (
      <Card>
          <Imagem src={props.match.photo} alt={props.match.photo_alt}></Imagem>
          <p>{props.match.name}</p>
      </Card>
    )
}

export default CardMatch;