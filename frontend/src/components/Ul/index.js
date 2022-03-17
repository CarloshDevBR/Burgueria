import { Ul, Li, BoxP, Img } from './styles.js'
import Trash from '../../assets/trash.svg'

export const List = ({ request, deleteItem }) => {
  return <Ul>
          { request.map(item => {
             return <Li key={item.id}>
                      <BoxP>
                        <p>{item.order}</p>
                        <p>{item.name}</p>
                      </BoxP>
                      <Img src={Trash} alt="trash" onClick={() => deleteItem(item.id)}/>
                 </Li>
             })}
        </Ul>
}