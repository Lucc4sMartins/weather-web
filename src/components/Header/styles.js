import styled from 'styled-components'

const HeaderContainer = styled.header`
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