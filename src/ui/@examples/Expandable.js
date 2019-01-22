function Expandable({ as, children, className, config, expanded, ...rest }) {
  const Component = as

  return (
    <Measure offset margin>
      {({ measureRef, contentRect: { offset, margin } }) => (
        <Spring
          native
          from={{ height: 0 }}
          to={{
            height: expanded ? offset.height + margin.bottom + margin.top : 0
          }}
          config={config}
        >
          {style => (
            <animated.div style={{ overflow: 'hidden', ...style }} {...rest}>
              <Component
                ref={measureRef}
                className={className}
                style={{ overflow: 'auto' }}
              >
                {children}
              </Component>
            </animated.div>
          )}
        </Spring>
      )}
    </Measure>
  )
}

Expandable.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  config: PropTypes.object,
  expanded: PropTypes.bool
}

Expandable.defaultProps = {
  as: `div`,
  expanded: false
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import PropTypes from 'prop-types'
import Measure from 'react-measure'
import { Spring, animated } from 'react-spring'

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
