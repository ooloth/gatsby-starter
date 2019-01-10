function Bottom({ navLinks, socialLinks }) {
  return (
    <Footer>
      <Heading as="h1">Site Title</Heading>
      <FinePrint />
    </Footer>
  )
}

///////////////////////////////////////////////////////////////////////////////////

function FinePrint() {
  return (
    <Text>
      &copy; {new Date().getFullYear()} Insert Site Name.
      All&nbsp;rights&nbsp;reserved. Brewed&nbsp;by&nbsp;
      <Anchor href="http://coffeeshopcreative.ca">Coffeeshop&nbsp;Creative</Anchor>.
    </Text>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import { Anchor, Footer, Heading, Text } from '../elements'

export default Bottom
