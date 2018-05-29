class FlickitySlider extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    layout: PropTypes.func.isRequired,
    options: PropTypes.object
  }

  static defaultProps = {
    options: defaultOptions
  }

  componentDidMount = () => this.makeCellsEqualHeight()

  // See: https://github.com/metafizzy/flickity/issues/534
  // See: https://codepen.io/desandro/pen/ZXEGVq
  makeCellsEqualHeight = () => {
    const resize = this.flkty.resize
    this.flkty.resize = () => {
      this.flkty.element.classList.remove(`flickity-resize`)
      resize.call(this.flkty)
      this.flkty.element.classList.add(`flickity-resize`)
    }
  }

  render() {
    const { data, layout, options } = this.props

    return (
      <Flickity
        flickityRef={c => (this.flkty = c)}
        options={options}
        reloadOnUpdate={true}
      >
        {data.map(slide => {
          return <Fragment key={shortid.generate()}>{layout({ slide })}</Fragment>
        })}
      </Flickity>
    )
  }
}

const defaultOptions = {
  draggable: true,
  wrapAround: true
}

/*
 *
 * Import & Exports
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import shortid from 'shortid'

export default FlickitySlider

/*

INSTRUCTIONS:

1. Use this for sliding carousels (for fading carousels, use SlickSlider)
2. Call like this: <FlickitySlider data={data} layout={Slide} options={flickityOptions} />
3. "Slide" should be a react component that takes a "slide" prop and uses FlickitySlide as is wrapping component:

const Slide = ({ slide }) => (
  <FlickitySlide className="pa3 w-100">
    <Img sizes={slide.node.image.childImageSharp.sizes} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} />
  </FlickitySlide>
)

*/
