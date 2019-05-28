function Link({ href, srText, children, ...props }) {
  const isExternal = href.match(/http|\/\/|mailto:|tel:|pdf\//)
  const isId = href.match(/^#/)

  return isExternal || isId ? (
    <a
      href={href}
      onClick={e => e.stopPropagation()} // avoid firing parent event handlers
      target={isExternal ? `_blank` : null}
      rel={isExternal ? `noopener noreferrer` : null}
      {...props}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      to={href}
      onClick={e => e.stopPropagation()} // avoid firing parent event handlers
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

export default Link

/*

INSTRUCTIONS:

const StyledLink = styled(Link)``

<StyledLink href="" srText="">Link Text</StyledLink>

- See: https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
- See: https://stackoverflow.com/questions/37568550/react-prevent-event-trigger-on-parent-from-child

*/
