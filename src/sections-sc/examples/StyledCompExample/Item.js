function Item(props) {
  return (
    <Wrapper>
      <Link {...props}>Link</Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  background-color: pink;
`

const Link = styled(Anchor)`
  color: ${p => p.white && `white`};
  transition: var(--trans1);
  &:hover {
    letter-spacing: var(--ls3);
    color: var(--gray9);
  }
`

import React from 'react'
import styled from 'styled-components'
import Anchor from '../../../components-sc/Anchor'

export default Item
