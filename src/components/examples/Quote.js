const Quote = ({ quote, source, href, className, style }) => (
  <blockquote cite={href ? href : undefined} className={className} style={style}>
    {/* Quotation */}
    <p dangerouslySetInnerHTML={{ __html: quote }} className="quote" />

    {/* Source and link (optional) */}
    {source && href ? (
      <Anchor href={href} className="quote-link">
        <cite className="quote-source">{source}</cite>
      </Anchor>
    ) : source ? (
      <cite className="quote-source">{source}</cite>
    ) : null}
  </blockquote>
)

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

/*
 *
 * Imports & Exports
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Anchor from '../Anchor'

export default Quote

/*

INSTRUCTIONS:
TODO: update this...
<Emoji 
  emoji={emoji, required}
  ariaLabel={string, required}
  className={string, optional}
  style={string || object, optional}
/>

DOCS:

- React Icons: http://gorangajic.github.io/react-icons/fa.html
- React Icons (github): https://github.com/gorangajic/react-icons
- React Inline SVG (github): https://github.com/gilbarbara/react-inlinesvg

*/
