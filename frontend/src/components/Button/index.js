import { StyleButton } from './styles.js'

export const Button = ({children, ...props}) => {
  return <StyleButton {...props}>{children}</StyleButton>
}