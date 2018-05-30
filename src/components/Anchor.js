class Anchor extends Component {
  // Prevent link clicks from triggering click event handlers on parent components
  // See: https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli
  // See: https://stackoverflow.com/questions/37568550/react-prevent-event-trigger-on-parent-from-child
  handleClick = e => e.stopPropagation()

  render() {
    const { href, srText, className, style, children } = this.props
    const isExternal = href.indexOf(`http`) === -1 ? false : true

    return (
      <a
        href={href}
        onClick={this.handleClick}
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
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  srText: PropTypes.string, // if anchor has no visible text
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default Anchor

/*

INSTRUCTIONS:

<Anchor href="" srText="" className="" style="">Link</Anchor>

*/
