import styled from 'styled-components'

const Button = styled.button`
  font-family: "Lexend Deca", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  min-height: 35px;
  background-color: ${({ theme }) => theme.darkerColor};
  color: ${({ theme }) => theme.lightColor};
  border: none;
`

export {
  Button
}