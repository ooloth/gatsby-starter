const FlickityExample = ({ data }) => (
  <section className="mv6 pv5 bg-light-green">
    <h2 className="mb1">Flickity Example</h2>
    <p className="mb4 b">(for sliding carousels)</p>

    <div className="container">
      <FlickitySlider
        slideData={data}
        slideLayout={slide => <Slide slide={slide} />}
        flickityOptions={options}
      />
    </div>
  </section>
)

// class FlickitySlider extends Component {
//   static propTypes = {
//     slideData: PropTypes.array.isRequired,
//     slideLayout: PropTypes.func.isRequired,
//     flickityOptions: PropTypes.object
//   }

//   // static defaultProps = {
//   //   flickityOptions: defaultOptions
//   // }

//   state = { Flickity: null }

//   // TODO: replace this with loadjs call?
//   componentDidMount = () => {
//     if (typeof window !== `undefined`) {
//       const Flickity = require(`react-flickity-component`)
//       this.setState({ Flickity: Flickity })
//     }
//   }

//   // See: https://github.com/metafizzy/flickity/issues/534
//   // See: https://codepen.io/desandro/pen/ZXEGVq
//   makeCellsEqualHeight = () => {
//     const resize = this.flkty.resize
//     this.flkty.resize = () => {
//       this.flkty.element.classList.remove(`flickity-resize`)
//       resize.call(this.flkty)
//       this.flkty.element.classList.add(`flickity-resize`)
//     }
//   }

//   componentDidUpdate = () => this.makeCellsEqualHeight()

//   render() {
//     const { slideData, slideLayout, flickityOptions } = this.props
//     const { Flickity } = this.state

//     return (
//       Flickity && (
//         <Flickity
//           flickityRef={c => (this.flkty = c)}
//           options={flickityOptions}
//           reloadOnUpdate={true}
//         >
//           <div className="w-100">Hi</div>
//           <div className="w-100">Hi</div>
//           <div className="w-100">Hi</div>
//           {/* {slideData.map(slide => {
//           return <Fragment key={shortid.generate()}>{slideLayout(slide)}</Fragment>
//         })} */}
//         </Flickity>
//       )
//     )
//   }
// }

const options = {
  draggable: true,
  wrapAround: true
}

const Slide = ({ slide }) => (
  <FlickitySlide className="flex flex-column justify-center bg-pink w-100">
    <Img sizes={slide.node.image.childImageSharp.sizes} alt={slide.node.alt} />
    <h3 dangerouslySetInnerHTML={{ __html: slide.node.title }} className="ph5" />
  </FlickitySlide>
)

// const FlickitySlide = ({ className = ``, children }) => (
//   <div className={`carousel-cell ${className}`}>{children}</div>
// )

/*
 *
 * Import & Exports
 *
 */

import React, { Component, Fragment } from 'react'

// import PropTypes from 'prop-types'
// import Flickity from 'react-flickity-component'
// import shortid from 'shortid'

import FlickitySlider from '../../components/examples/FlickitySlider'
import FlickitySlide from '../../components/examples/FlickitySlide'
import Img from '../../components/Img'

export default FlickityExample
