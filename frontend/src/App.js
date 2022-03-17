import React, { useState, useRef, useEffect } from 'react'

import { Container, Logo, H1, P, Input, Button, Ul, Li, BoxP, Img } from './styles.js';
import axios from 'axios'

import LogoImg from './assets/logo.png'
import Trash from './assets/trash.svg'

function App() {
  const [ request, setRequest] = useState([])
  const Request = useRef()
  const Name = useState()
  
  async function addNewRequest() {
    const { data: newRequest } = await axios.post("http://localhost:3001/requests", { id: Math.random(), order: Request.current.value, name: Name.current.value })
    
    setRequest([...request, newRequest])
  }
  
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
      
      <H1>Faça seu pedido!</H1>
      
      <P>Pedido</P>
      <Input ref={Request} type="text" placeholder="Seu pedido aqui!" />
      
      <P>Nome do cliente</P>
      <Input ref={Name} type="text" placeholder="Seu nome aqui!" />
      
      <Button onClick={addNewRequest}>Novo pedido</Button>
      
      <Ul>
        { request.map(item => {
          return <Li key={item.id}>
                      <BoxP>
                        <p>{item.request}</p>
                        <p>{item.name}</p>
                      </BoxP>
                      <Img src={Trash} alt="trash" onClick={() => deleteRequest(item.id)}/>
                 </Li>
        })}
      </Ul>
    </Container>
  );
}

export default App;
