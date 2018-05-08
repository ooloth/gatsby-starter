/*
 *  Usage: 
 * 
 *    <Slider data={slideData} layout={slideLayout} settings={slickSettings} />
 * 
 *  Props: 
 * 
 *    1. "data" = object, mandatory
 *    2. "layout" = component, optional (default component included below)
 *    3. "settings" = object, optional (default values included below)
 */

const Slider = ({
  data,
  layout = DefaultLayout,
  settings = defaultSettings,
  ...slickProps
}) => (
  <Slick {...settings}>
    {data.map((slide, index) => {
      return (
        <div key={`slide-${index}`} {...slickProps}>
          {layout({ slide })}
        </div>
      )
    })}
  </Slick>
)

/*
 *
 * Default Layout
 * 
 */

const DefaultLayout = ({ slide }) => (
  <div>
    <h3 className="heading mb4 lg:pr5">
      <div className="light-gray">{slide.heading.gray}</div>
      <div className="gold">{slide.heading.gold}</div>
    </h3>
    <p className="mb4 measure lh-copy f-lead">{slide.paragraph}</p>
    <ul className="pb3">
      {slide.features.map((feature, index) => (
        <li key={`feature-${index}`} className="flex items-center mb3 lh-copy">
          <FaChevronRight className="flex-none mr2 f-lead gold" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
)

/*
 *
 * Default Settings
 * 
 */

const defaultSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  fade: true,
  infinite: true,
  lazyload: `progressive`,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
}

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'
import Slick from 'react-slick'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'

export default Slider
