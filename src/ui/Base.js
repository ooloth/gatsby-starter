function Base({ children }) {
  const [isIE, setIsIE] = useState(false)
  const { title } = useSiteMetadata()
  const navLinks = useNavLinksData()
  const socialLinks = useSocialLinksData()

  useEffect(() => {
    setIsIE(is.ie())
  }, [])

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

      {isIE ? (
        <BrowserWarning title={title} />
      ) : (
        <>
          <Top navLinks={navLinks} socialLinks={socialLinks} />
          {children}
          <Bottom navLinks={navLinks} socialLinks={socialLinks} />
        </>
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'

import is from 'is_js'

import Metadata from './Metadata'
import BrowserWarning from './BrowserWarning'
import Top from './Top'
import Bottom from './Bottom'

import useSiteMetadata from '../data/useSiteMetadata'
import useNavLinksData from '../data/examples/useNavLinksData'
import useSocialLinksData from '../data/examples/useSocialLinksData'

import { CustomProperties, Reset } from '../styles'
// import '../styles/base/font-face.css'

// import avenirRegular from '../fonts/AvenirNextLTPro-Regular.woff2'
// import avenirHeavy from '../fonts/AvenirNextLTPro-Heavy.woff2'

export default Base
