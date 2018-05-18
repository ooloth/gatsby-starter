const Img = props => {
  // Construct font-family declaration for object-fit-images
  const objFit = props.objFit ? props.objFit : `cover`
  const objPos = props.objPosition ? props.objPosition : `50% 50%`
  const fontFamily = `"object-fit: ${objFit}; object-position: ${objPos}"`

  // Construct polyfill style declarations to add to imgStyle
  const polyfillStyles = {
    objectFit: objFit,
    objectPosition: objPos,
    fontFamily: fontFamily
  }

  return (
    <Image
      sizes={props.sizes}
      resolutions={props.resolutions}
      alt={props.alt}
      className={props.className}
      style={props.style}
      outerWrapperClassName={props.outerWrapperClassName}
      imgStyle={{ ...props.imgStyle, ...polyfillStyles }}
      position={props.position || `relative`}
      backgroundColor={props.backgroundColor || `transparent`}
      Tag={props.Tag || `div`}
    />
  )
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Image from 'gatsby-image'

export default Img

/*

USAGE:

A wrapper around gatsby-image that includes an object-fit and object-position polyfill (enabled by adding a font-family declaration).

Example:

<Img
  sizes={sizes}
  resolutions={props.resolutions}
  alt={alt}
  objFit="cover" (optional; default: cover)
  objPosition="50% 0%" (optional; default: 50% 50%)
  className="..." (optional; goes to .gatsby-image-wrapper)
  style="..." (optional; goes to .gatsby-image-wrapper)
  outerWrapperClassName="..." (optional; goes to .gatsby-image-outer-wrapper)
  imgStyle="..." (optional; goes to the actual img element)
  position="absolute" (optional; default: "relative")
  backgroundColor="pink" (optional; default: false)
  Tag="figure" (optional; default: "div"; tag for wrapping elements)
/>

DOCS: https://www.gatsbyjs.org/packages/gatsby-image/#gatsby-image-props
DOCS: https://github.com/researchgate/react-intersection-observer
DOCS: https://github.com/bfred-it/object-fit-images/#usage
Issue: https://github.com/gatsbyjs/gatsby/issues/4021#issuecomment-389276173

*/
