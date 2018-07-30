const FadingCarouselExample = ({ data }) => (
  <section className="mv6 bg-light-yellow pa5 shadow-lg">
    <h2 className="mb3">Fading Carousel Example</h2>
    <p className="ml-auto mr-auto mb4 measure-narrow lh-copy f4">
      (The height of the carousel's ul is currently fixed. Setting an aspect ratio on
      the ul might also work...)
    </p>

    <FadingCarousel slides={data}>
      {(slides, slideIndex, handleBtnClick) => (
        <>
          <CarouselSlides slides={slides} slideIndex={slideIndex} />

          <CarouselButtons
            slides={slides}
            slideIndex={slideIndex}
            handleChange={handleBtnClick}
          />
        </>
      )}
    </FadingCarousel>
  </section>
)
/*
 *
 * Carousel Slides
 *
 */

const CarouselSlides = ({ slides, slideIndex }) => (
  <ul className="relative vh-70 min-h5 max-h6 lg:h7 lg:max-h7">
    {slides.map((slide, index) => (
      <CarouselSlide
        key={index}
        slide={slide.node}
        className={`absolute top-0 left-0 w-100 h-100 ${
          index !== slideIndex ? `o-0` : ``
        }`}
      />
    ))}
  </ul>
)

/*
 *
 * Carousel Slide
 *
 */

const CarouselSlide = ({ slide, className }) => (
  <li className={`${className}`} style={{ transition: `opacity 1s` }}>
    <Img
      fluid={slide.image.childImageSharp.fluid}
      alt={slide.alt}
      // objPostion={slide.objPosition}
      // className="top-0 left-0 w-100 h-100"
      // style={{ position: `absolute` }}
    />

    <h3>{slide.title}</h3>
  </li>
)

/*
 *
 * Carousel Buttons
 *
 */

const CarouselButtons = ({ slides, slideIndex, handleChange }) => (
  <fieldset className="">
    <legend className="sr-only">Change slides</legend>

    {slides.map((slide, index) => {
      return (
        <Fragment key={index}>
          <input
            type="radio"
            name="hero-carousel"
            aria-label={`Go to slide #${index + 1}`}
            id={`button-${index}`}
            value={index}
            defaultChecked={index === slideIndex ? true : false}
            onChange={handleChange}
            className="carousel-input"
          />

          {/* Update active styling in components/_filters.css */}
          <label
            htmlFor={`button-${index}`}
            className={`carousel-label mr2 ba bw1 br-100 b--black animate ${
              index === slideIndex ? `bg-pink` : `bg-transparent`
            }`}
            style={{ width: `1.1rem`, height: `1.1rem` }}
          />
        </Fragment>
      )
    })}
  </fieldset>
)

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'

import FadingCarousel from '../../components/examples/FadingCarousel'
import Img from '../../components/Img'

export default FadingCarouselExample
