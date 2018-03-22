import React from 'react'

const Ball = ({ className, style }) => (
  <aside
    role="presentation"
    aria-hidden="true"
    className={`ball ${className}`}
    style={style}
  />
)

export default Ball
