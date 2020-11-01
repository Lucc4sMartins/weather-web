import styled from 'styled-components'

const Button = styled.button`
  font-family: "Lexend Deca", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.darkerColor};
  color: ${({ theme }) => theme.lightColor};
  border: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
`

export {
  Button
}