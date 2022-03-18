import React, { useState, useRef } from 'react'
import { Container, Logo } from './styles.js';

import axios from 'axios'

import LogoImg from '../../assets/logo.png'

import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { Inputs } from '../../components/Input'

function Home() {
  const [ request, setRequest ] = useState([])
  const Request = useRef()
  const Name = useRef()
  
  async function addNewRequest() {
    const { data: newRequest } = await axios.post("http://localhost:3001/requests", { id: Math.random(), order: Request.current.value, name: Name.current.value })
    
    setRequest([...request, newRequest])
  }
  
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      
      <Title>Faça seu pedido!</Title>
      
      <Inputs Request={Request} Name={Name} />
      
      <Button add={addNewRequest}>Pedir agora</Button>
    </Container>
  );
}

export default Home;
