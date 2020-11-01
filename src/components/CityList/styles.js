import styled from 'styled-components'

const List = styled.ul`
`

const ListItem = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.lightColor};
`

const HeadInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img`
  max-width: 40px;
`

const Label = styled.span`
  color: ${({ theme }) => theme.darkerColor};
`

const CurrentTempWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const MoreInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export {
  List,
  ListItem,
  Icon,
  Label,
  CurrentTempWrapper,
  HeadInformation,
  MoreInfoWrapper
}