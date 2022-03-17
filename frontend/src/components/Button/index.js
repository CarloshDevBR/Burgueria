import { StyleButton } from './styles.js'

export const Button = ({add, children}) => {
  return <StyleButton onClick={add}>{children}</StyleButton>
}