function AirtableExample() {
  return (
    <Section>
      <Inner>
        <Heading>Airtable Example</Heading>
      </Inner>
    </Section>
  )
}

const Section = styled.section`
  ${container}
  padding-top: var(--size11);
  padding-bottom: var(--size11);
`

const Inner = styled.div`
  padding: var(--size9) 0;
  box-shadow: var(--shadow5);
  background-color: var(--pink3);
  text-align: center;
`

const Heading = styled.h2`
  margin-bottom: var(--size5);
`

import React from 'react'
import styled from 'styled-components'
import { container } from '../../styles-sc/shared'

export default AirtableExample
