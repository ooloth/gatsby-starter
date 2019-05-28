function AnimationsPage() {
  return (
    <Base>
      <main id="main-content">
        <Accordions />
        <MountOnClick />
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

// Example Sections
import Base from '../ui/Base'
import MountOnClick from '../ui/@ex-animations/MountOnClick'
import Accordions from '../ui/@ex-animations/Accordions'

export default AnimationsPage
