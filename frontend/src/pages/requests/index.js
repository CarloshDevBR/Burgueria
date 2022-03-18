import React, { useState, useEffect } from 'react'
import { Container, Logo } from './styles.js';

import axios from 'axios'

import LogoImg from '../../assets/burger.png'

import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import { List } from '../../components/Ul'

function Home() {
  const [ request, setRequest ] = useState([])
  
  async function deleteRequest(id) {
    await axios.delete(`http://localhost:3001/requests/:${id}`)
    
    const filteredRequests = request.filter( item => {
      return item.id !== id
    })
    
    setRequest(filteredRequests)
  }
  
  useEffect(() => {
    async function loadData() {
    const { data } = await axios.get("http://localhost:3001/requests/")
    
    setRequest(data)
  }
  
  loadData()
  },[])
  
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      
      <Title>Todos os pedidos</Title>
      
      <List request={request} deleteItem={deleteRequest} />
      
      <Button>Back</Button>
    </Container>
  );
}

export default Home;
