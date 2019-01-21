function Link({ href, srText, children, ...props }) {
  const isExternal = href.match(/http|\/\/|mailto:|tel:|pdf\//)
  const isId = href.match(/^#/)

  return isExternal || isId ? (
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
  ) : (
    <StyledGatsbyLink
      to={href}
      onClick={e => e.stopPropagation()} // avoid firing parent event handlers
      {...props}
    >
      {srText && <SrText>{srText}</SrText>}
      {children}
    </StyledGatsbyLink>
  )
}

Link.propTypes = {
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
const linkStyles = css`
${textStyles}
color: ${p => p.inline && `var(--blue)`};
transition: var(--trans1);

&:hover {
  color: ${p => p.inline && `var(--black)`};
}

`

const StyledAnchor = styled.a`
  ${linkStyles}
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${linkStyles}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import SrText from './SrText'
import { textStyles } from './Text'

export default Link

/*

INSTRUCTIONS:

<Link href="" srText="" className="" style="">Link</Link>

- See: https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
- See: https://stackoverflow.com/questions/37568550/react-prevent-event-trigger-on-parent-from-child

*/
