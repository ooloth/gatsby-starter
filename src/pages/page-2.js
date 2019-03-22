function SecondPage() {
  const secondPageMetadata = useSecondPageMetadata()

  return (
    <Base>
      <Metadata page={secondPageMetadata} />
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
import useSecondPageMetadata from '../data/examples/useSecondPageMetadata'

export default SecondPage
