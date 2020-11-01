import styled from 'styled-components'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightColor};
  min-height: 50px;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.darkerColor};
`

export {
  HeaderContainer,
  Title
}