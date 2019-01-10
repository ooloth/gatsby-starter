// TODO: add props for styling variants (e.g. 'bg')
// TODO: set any dedicated custom properties here (like Heading.js)

const Image = styled(Img)`
  ${boxStyles}
`

///////////////////////////////////////////////////////////////////////////////////

import styled from 'styled-components'
import Img from 'gatsby-image'

import { boxStyles } from './Box'

export default Image

// See: https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props
