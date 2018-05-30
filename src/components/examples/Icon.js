const Icon = ({ svg, ariaLabel, className = ``, style }) => {
  let Tag
  // react-inlinesvg component?
  if (typeof svg === `string`) Tag = SVG
  // react-icons component?
  else if (typeof svg === `function`) Tag = svg

  return (
    <Tag
      src={Tag === SVG ? svg : undefined}
      aria-label={ariaLabel}
      className={`inline-flex fill-current ${className}`}
      style={style}
    />
  )
}

Icon.propTypes = {
  // Accept an imported svg file or a react-icons component:
  svg: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]),
  ariaLabel: PropTypes.string.isRequired,
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
import SVG from 'react-inlinesvg'

export default Icon

/*

INSTRUCTIONS:

<Icon 
  svg={imported svg file || imported react-icons component}
  className={string, optional}
  style={string || object, optional}
/>

1. Can use with an imported SVG file or with a react-icons component

DOCS:

- React Icons: http://gorangajic.github.io/react-icons/fa.html
- React Icons (github): https://github.com/gorangajic/react-icons
- React Inline SVG (github): https://github.com/gilbarbara/react-inlinesvg

*/
