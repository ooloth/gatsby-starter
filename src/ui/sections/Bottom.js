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
      <Link href="http://coffeeshopcreative.ca">Coffeeshop&nbsp;Creative</Link>.
    </Text>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import { Link, Footer, Heading, Text } from '../elements'

export default Bottom
