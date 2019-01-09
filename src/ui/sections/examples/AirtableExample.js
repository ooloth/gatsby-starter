function AirtableExample(props) {
  return (
    <Section container {...props}>
      <Inner shadow>
        <Heading>Airtable Example</Heading>
      </Inner>
    </Section>
  )
}

const Inner = styled(Box)`
  padding: var(--s9) 0;
  /* box-shadow: var(--shadow5); */
  background-color: var(--pink3);
  text-align: center;
`

import React from 'react'
import styled from 'styled-components'

import { Box, Heading, Section } from '../../elements'

export default AirtableExample
