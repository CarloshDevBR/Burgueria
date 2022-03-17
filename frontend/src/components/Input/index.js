import { P, Input } from './style.js'

export const Inputs = ({ Request, Name }) => {
  console.log()
  return <>
    <P>Pedido</P>
    <Input ref={Request} type="text" placeholder="Seu pedido aqui!" />
    <P>Nome do cliente</P>
    <Input ref={Name} type="text" placeholder="Seu nome aqui!" />
</>
}