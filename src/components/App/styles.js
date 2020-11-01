import styled from 'styled-components'

const Main = styled.main`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`

const InformationWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    max-height: calc(100vh - 50px);
    overflow-y: scroll;
  }
`

export {
  Main,
  InformationWrapper
}