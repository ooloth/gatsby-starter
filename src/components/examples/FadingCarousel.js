class FadingCarousel extends Component {
  state = { slideIndex: 0 }

  componentDidMount = () => {
    const { speed } = this.props

    const carouselInterval = setInterval(this.goToSlide, speed || 8000) // start autoplay
    this.setState({ carouselInterval }) // save interval so I can clear it later
  }

  // Default index is used by autoplay; it's overriden by index passed in on button click
  goToSlide = (index = this.state.slideIndex === 0 ? 1 : 0) => {
    this.setState({ slideIndex: index })
  }

  handleBtnClick = e => {
    this.setState({ slideIndex: parseInt(e.target.value) })
    clearInterval(this.state.carouselInterval) // stop autofading after manual navigation
  }

  componentWillUnmount = () => clearInterval(this.state.carouselInterval)

  render() {
    const { slides } = this.props
    const { slideIndex } = this.state

    return this.props.children(slides, slideIndex, this.handleBtnClick)
  }
}

FadingCarousel.propTypes = {
  slides: PropTypes.array.isRequired
}

/*
 *
 * Imports & Exports
 * 
 */

import { Component } from 'react'
import PropTypes from 'prop-types'

export default FadingCarousel
