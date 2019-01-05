function StyledCompExample() {
  return (
    <Section>
      <Inner>
        <Heading>Styled Components Example</Heading>
        <List>
          <Item href="https://google.ca" white />
          <Item href="https://google.ca" />
        </List>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  ${container}
  padding-top: var(--size10);
`

const Inner = styled.div`
  background-color: var(--purple3);
  padding: var(--size9) var(--size6);
  box-shadow: var(--shadow5);
  text-align: center;
`

const Heading = styled.h2`
  margin-bottom: var(--size6);
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: var(--size6);
`

import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { container } from '../../../sc-styles/shared'

export default StyledCompExample
