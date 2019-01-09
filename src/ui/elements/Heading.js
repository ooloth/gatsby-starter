const Heading = styled.h2`
  /* Set custom properties */
  --largeHeading: var(--f7);
  --heading: var(--f6);
  --smallHeading: var(--f5);
  --body: var(--f3);

  ${media.md`
    --largeHeading: var(--f8);
    --heading: var(--f7);
    --smallHeading: var(--f6);
  `}

  /* Use custom properties */
  ${p => p.ga && `grid-area: ${p.ga};`}
  line-height: var(--lh1);
  font-size: ${p => {
    if (p.size === `large`) return `var(--largeHeading)`
    if (p.size === `small`) return `var(--smallHeading)`
    else return `var(--heading)`
  }};
`

import styled from 'styled-components'
import { media } from '../../styles/shared'

export default Heading
