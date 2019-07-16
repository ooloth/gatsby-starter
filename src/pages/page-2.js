function SecondPage() {
  const { secondPage } = useSiteMetadata()

  return (
    <Base>
      <Metadata page={secondPage} />
      <main id="main-content" tabIndex="-1">
        <h1
          css={`
            padding: var(--s8) var(--s4);
          `}
        >
          Hi from page 2
        </h1>
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import Base from '../ui/Base'
import Metadata from '../ui/Metadata'
import useSiteMetadata from '../queries/useSiteMetadata'

export default SecondPage
