/*
 *  Usage: <HyperLink href="..." className="...">
 * 
 *  Props: 
 *    "href" = url, mandatory
 *    "srText" = string, optional (use if link has no visible text, like an icon)
 *    
 */

const HyperLink = ({ href, srText, className, style, children }) => {
  // If link is external, add target and rel attributes
  const isExternal = href.indexOf(`http`) === -1 ? false : true

  return (
    <a
      href={href}
      target={isExternal ? `_blank` : null}
      rel={isExternal ? `noopener nofollow` : null}
      className={className}
      style={style}
    >
      {srText && <span className="sr-only">{srText}</span>}
      {children}
    </a>
  )
}

export default HyperLink

/*
 *
 * Imports
 * 
 */

import React from 'react'
import PropTypes from 'prop-types'
