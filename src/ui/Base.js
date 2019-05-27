function Base({ children }) {
  return (
    <>
      <Metadata
        // preload={[
        //   { href: avenirRegular, as: `font`, type: `font/woff2` },
        //   { href: avenirHeavy, as: `font`, type: `font/woff2` }
        // ]}
        preconnect={[`https://unpkg.com`]}
      />
      <CustomProperties />
      <Reset />

      <Top />
      {children}
      <Bottom />
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import Metadata from './Metadata'
import Top from './Top'
import Bottom from './Bottom'

import { CustomProperties, Reset } from '../styles'
// import '../styles/base/font-face.css'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
