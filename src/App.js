import React, { useState, useRef } from 'react'
import { Container, Logo, H1, P, Input, Button, Ul, Li, BoxP} from './styles.js';
import LogoImg from './assets/logo.png'

function App() {
  const [ request, setRequest] = useState([])
  const Request = useRef()
  const Nome = useState()
  
  function addNewRequest() {
    const newRequest = { id: Math.random(), request: Pedido.current.value, name: Nome.current.value}
    
    setRequest([...request, newRequest])
  }
  
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      
      <H1>Faça seu pedido!</H1>
      
      <P>Pedido</P>
      <Input ref={Pedido} type="text" />
      
      <P>Nome do cliente</P>
      <Input ref={Nome} type="text" />
      
      <Button onClick={addNewRequest}>Novo pedido</Button>
      
      <Ul>
        { request.map(item => {
          return <Li key={item.id}>
                      <BoxP>
                        <p>{item.request}</p>
                        <p>{item.name}</p>
                      </BoxP>
                 </Li>
        })}
      </Ul>
    </Container>
  );
}

export default App;
