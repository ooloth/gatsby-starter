/*

A wrapper around gatsby-image that includes:

1. Lazy loading using react-waypoint (when image is within 200% of it's height of the viewport)
2. Object-fit and object-position polyfill (enabled by adding a font-family declaration)

Use like this:

<Img
  sizes={sizes}
  alt={alt}
  fit="cover" (optional; default: cover)
  position="50% 0%" (optional; default: 50% 50%)
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

*/

class Img extends React.Component {
  state = { revealed: this.props.critical || false, repeat: true }

  handleWaypointEnter = () => {
    console.log(`Entered waypoint!`)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      console.log('Image revealed.')
    }
  }

  render() {
    // Construction font-family declaration for object-fit-images
    const fit = this.props.fit ? this.props.fit : `cover`
    const position = this.props.position ? this.props.position : `50% 50%`
    const imgStyle = `font-family: 'object-fit: ${fit}; object-position: ${position}';`

    return (
      <Waypoint
        ref={el => (this.box = el)}
        onEnter={this.handleWaypointEnter}
        topOffset="200%"
        bottomOffset="200%"
      >
        <figure data-critical={this.props.critical}>
          {this.state.revealed && (
            <Image
              sizes={this.props.sizes}
              alt={this.props.alt}
              className={this.props.className}
              style={this.props.style}
              outerWrapperClassName={this.props.outerWrapperClassName}
              imgStyle={this.props.imgStyle}
              position={this.props.position}
              backgroundColor={this.props.backgroundColor}
              Tag={this.props.Tag}
            />
          )}
        </figure>
      </Waypoint>
    )
  }
}

export default Img

/*
 *
 * Imports
 * 
 */

import React from 'react'
import Image from 'gatsby-image'
import Waypoint from 'react-waypoint'
