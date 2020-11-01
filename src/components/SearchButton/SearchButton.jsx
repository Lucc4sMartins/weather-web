import React from 'react'
import * as Styled from './styles'

const SearchButton = () => {
  const onSubmit = e => {
    e && e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <Styled.Button type='submit'>
        Search
      </Styled.Button>
    </form>
  )
}

export { SearchButton }