// TODO: add props for styling variants (e.g. 'color')
// TODO: set any dedicated custom properties here (like Heading.js)

const Button = styled.button`
  ${p => p.ga && `grid-area: ${p.ga};`}
  padding: var(--s2) var(--s3);
`

import styled from 'styled-components'

export default Button
