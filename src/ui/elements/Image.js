// TODO: add props for styling variants (e.g. 'bg')
// TODO: set any dedicated custom properties here (like Heading.js)

const Image = styled(Img)`
  ${p => p.ga && `grid-area: ${p.ga};`}
`

import styled from 'styled-components'
import Img from 'gatsby-image'

export default Image

// See: https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props
