import React, {useState} from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle';
import TelaInicial from './components/TelaInicial';
import TelaMatches from './components/TelaMatches';
import axios from 'axios';

const Aplicativo = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const aluno = 'pedrosouza'

function App(){
  let [tela,setTela] = useState(0)
  let [lista,setMatches] = useState(undefined)
  let [perfil,setPerfil] = useState({})

  const pegarPerfil = async () => {
    try{
        const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
        setPerfil(response.data.profile)
    } catch(error){
        alert(error.response)
    }
  }

  const pegarMatches = async () => {
    try{
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      setMatches(response.data.matches)
      console.log(lista)
  } catch(error){
      alert(error.response)
  }
  }

  const escolherPessoa = async (perfilId,escolha) => {
    try{
      const body = {
        id: perfilId,
        choice: escolha
      }
      const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,body)
      console.log(response.data)
    } catch(error){
        alert(error.response)
    }
    pegarPerfil()
  }

  const limparMatches = async () => {
    try{
      const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
      console.log(response.data.message)
      alert(response.data.message)
  } catch(error){
      alert(error.response)
  }
  }

  const mudaTela = (opcao) => {
    setTela(opcao)
    pegarMatches()
  }

  useEffect(() => {
    pegarPerfil()
    pegarMatches()
  },[])

  // useEffect(() => {
  //   pegarMatches()
  //   console.log(matches)
  // },[perfil])

    return (
      <Aplicativo>
        <GlobalStyle/>
        {tela === 0 ? 
          <TelaInicial
            perfil={perfil}
            escolherPessoa={escolherPessoa}
            mudaTela={mudaTela}
            limpar={limparMatches}
          />:
          <TelaMatches
            matches={lista}
            mudaTela={mudaTela}
            limpar={limparMatches}
          />
        }
      </Aplicativo>
    );
}

export default App;
