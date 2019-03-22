function Expandable({ as, children, className, duration, expanded, ...rest }) {
  const Component = as
  const ref = useRef()
  const { height } = useMeasure(ref)
  const [containerHeight, setContainerHeight] = useSpring(() => ({ height: 0 }))

  // setContainerHeight({ height: expanded ? height : 0 })
  setContainerHeight({
    height: expanded ? height : 0,
    config: duration
      ? { duration: duration, easing: easeCubicInOut }
      : config.default,
  })

  return (
    <animated.div style={{ overflow: 'hidden', ...containerHeight }} {...rest}>
      <Component ref={ref} className={className} style={{ overflow: 'auto' }}>
        {children}
      </Component>
    </animated.div>
  )
}

Expandable.propTypes = {
  expanded: PropTypes.bool,
  duration: PropTypes.number,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Expandable.defaultProps = {
  as: `div`,
  expanded: false,
}

///////////////////////////////////////////////////////////////////////////////////

import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring'
import { easeCubicInOut } from 'd3-ease'

import useMeasure from '../../logic/examples/useMeasure'

export default Expandable

///////////////////////////////////////////////////////////////////////////////////

/*

A component that handles animating the height of an expandable element

Issue: https://github.com/drcmda/react-spring/issues/292#issuecomment-434513489
Demo: https://codesandbox.io/s/xlkk6rkx3z

USAGE:

function App() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setExpanded(!expanded)}
        className="absolute top-0 left-0 w-100 h-100"
      >
        <span className="sr-only">Show/hide article details</span>
      </button>

      <Header title={article.title} source={article.source.name} />

      <Expandable expanded={expanded}>
        <Body description={article.description} source={article.source} />
      </Expandable>
    </div>
  )
}

*/
