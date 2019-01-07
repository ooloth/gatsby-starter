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
  padding-top: var(--s11);
  padding-bottom: var(--s11);
`

const Inner = styled.div`
  padding: var(--s9) 0;
  box-shadow: var(--shadow5);
  background-color: var(--pink3);
  text-align: center;
`

const Heading = styled.h2`
  margin-bottom: var(--s5);
`

import React from 'react'
import styled from 'styled-components'
import { container } from '../../styles-sc/shared'

export default AirtableExample
