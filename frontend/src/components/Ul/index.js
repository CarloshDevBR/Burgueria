import { Ul, Li, BoxP, Img, P } from './styles.js'
import Trash from '../../assets/trash.svg'

export const List = ({ request, deleteItem }) => {
  return <Ul>
          { request.map(item => {
             return <Li key={item.id}>
                      <BoxP>
                        <P color={true}>{item.order}</P>
                        <P>{item.name}</P>
                      </BoxP>
                      <Img src={Trash} alt="trash" onClick={() => deleteItem(item.id)}/>
                 </Li>
             })}
        </Ul>
}