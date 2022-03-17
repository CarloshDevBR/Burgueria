import styled from 'styled-components'

export const Ul = styled.ul `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export const Li = styled.li `
  display: flex;
  justify-content: space-between;
  width: 290px;
  padding: 20px 10px 20px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
  filter: drop-shadow( 0 4px 4px rgba(0, 0, 0.25));
`

export const BoxP = styled.div `
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Img = styled.img `
  width: 20px;
`