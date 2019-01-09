// TODO: add props for styling variants (e.g. 'align')

const Text = styled.p`
  ${p => p.ga && `grid-area: ${p.ga};`}
  line-height: var(--lh2);
`

import styled from 'styled-components'

export default Text
