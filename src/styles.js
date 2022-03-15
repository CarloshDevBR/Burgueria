import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #0A0A10;
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img `
  width: 280px;
  height: 280px;
  align-self: center;
`

export const H1 = styled.h1 `
  color: white;
  font-size: 16pt;
  align-self: center;
  margin: 20px 0 50px 0;
`

export const P = styled.p `
  align-self: flex-start;
  color: white;
  margin: 0 0 5px 60px;
`

export const Input = styled.input `
  width: 280px;
  height: 45px;
  align-self: center;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 14px;
  border: none;
  background: rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
`

export const Button = styled.button `
  width: 290px;
  height: 45px;
  background: rgba(217, 56, 86, 1);
  border: none;
  align-self: center;
  margin-top: 40px;
`

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
  height: 65px;
  width: 290px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.25);
  padding: 0 0 0 15px;
  color: #FFFFFF;
  filter: drop-shadow( 0 4px 4px rgba(0, 0, 0.25));
`

export const BoxP = styled.div `
  display: flex;
  flex-direction: column;
  gap: 15px;
`