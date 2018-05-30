// TODO: use ternary to include/not include anchor
// TODO: use ternary to include/not include react-icons component (instead of SVG file)

const Icon = ({ svg, className = ``, style = {} }) => {
  let Tag
  // react-inlinesvg component?
  if (typeof svg === `string`) Tag = SVG
  // react-icons component?
  else if (typeof svg === `function`) Tag = svg

  return (
    <Tag
      src={Tag === SVG ? svg : undefined}
      aria-hidden={true}
      className={`inline-flex lh-none fill-current ${className}`}
      style={style}
    />
  )
}

Icon.propTypes = {
  // Accept an imported svg file or a react component (e.g. from react-icons):
  svg: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.func.isRequired]),
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
2. Can optionally include a link

DOCS:

- React Icons: http://gorangajic.github.io/react-icons/fa.html
- React Icons (github): https://github.com/gorangajic/react-icons
- React Inline SVG (github): https://github.com/gilbarbara/react-inlinesvg

*/
