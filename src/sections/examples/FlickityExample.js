const FlickityExample = ({ data }) => (
  <section className="mv6 pv5 bg-light-green">
    <h2 className="mb1">Flickity Example</h2>
    <p className="mb4 b">(for sliding carousels)</p>

    <div className="container">
      <FlickitySlider data={data} layout={Slide} options={flickityOptions} />
    </div>
  </section>
)

const Slide = ({ slide }) => (
  <FlickitySlide className="flex flex-column justify-center bg-pink w-100">
    <Img sizes={slide.node.image.childImageSharp.sizes} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} className="ph5" />
  </FlickitySlide>
)

const flickityOptions = {
  draggable: true,
  wrapAround: true
}

/*
 *
 * Import & Exports
 *
 */

import React from 'react'

import FlickitySlider from '../../components/examples/FlickitySlider'
import FlickitySlide from '../../components/examples/FlickitySlide'
import Img from '../../components/Img'

export default FlickityExample
