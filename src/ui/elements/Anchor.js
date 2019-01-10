function Anchor({ href, srText, children, ...props }) {
  const isExternal = href.match(/http|\/\/|mailto:|tel:|pdf\//)

  return (
    <StyledAnchor
      href={href}
      onClick={e => e.stopPropagation()} // avoid firing parent event handlers
      target={isExternal ? `_blank` : null}
      rel={isExternal ? `noopener` : null}
      {...props}
    >
      {srText && <SrText>{srText}</SrText>}
      {children}
    </StyledAnchor>
  )
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  srText: PropTypes.string, // if anchor has no visible text
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
    PropTypes.array
  ])
}

///////////////////////////////////////////////////////////////////////////////////

// TODO: create more variants

const StyledAnchor = styled.a`
  ${textStyles}
  color: ${p => p.inline && `var(--blue)`};
  transition: var(--trans1);

  &:hover {
    color: ${p => p.inline && `var(--black)`};
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SrText from './SrText'
import { textStyles } from './Text'

export default Anchor

/*

INSTRUCTIONS:

<Anchor href="" srText="" className="" style="">Link</Anchor>

- See: https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
- See: https://stackoverflow.com/questions/37568550/react-prevent-event-trigger-on-parent-from-child

*/
