const RevealExample = ({ data }) => (
  <section className="pb5">
    <h2 className="mb4">These use Reveal to appear magically on scroll</h2>

    <h3 className="mb3">Single item (GSAP):</h3>
    <RevealedImage image={data[0].node} />

    <h3 className="mt4 mb3">Array of items (GSAP):</h3>
    <RevealedImages images={data} />

    <h3 className="pt4 mb3">Single item (Pose):</h3>
    <PosedImage image={data[0].node} reset={true} />

    <h3 className="mt4 mb3">Array of items (Pose):</h3>
    <PosedImages images={data} reset={true} />
  </section>
)

/*
 *
 * Revealed Image
 * 
 */

const RevealedImage = ({ image }) => (
  <Reveal css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }} reset={true}>
    <Img
      fluid={image.image.childImageSharp.fluid}
      alt={image.alt}
      className="shadow-lg"
    />
  </Reveal>
)

/*
 *
 * Revealed Images
 * 
 */

const RevealedImages = ({ images }) => (
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    stagger={true}
    staggerDelay={0.3}
    reset={true}
    tag="ul"
    style={{
      display: `grid`,
      gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
      gridGap: `1rem`
    }}
  >
    {images.map((image, i) => {
      return (
        <li key={i}>
          <Img
            fluid={image.node.image.childImageSharp.fluid}
            alt={image.node.alt}
            className="shadow-lg"
          />
        </li>
      )
    })}
  </Reveal>
)

/*
 *
 * Posed Image
 * 
 */

class PosedImage extends React.Component {
  state = { isVisible: false }

  // Waypoint handlers
  handleWaypointEnter = () => this.setState({ isVisible: true })
  handleWaypointLeave = () => this.props.reset && this.setState({ isVisible: false })

  render() {
    const { image } = this.props
    const { isVisible } = this.state

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        offsetTop="125%"
        offsetBottom="125%"
      >
        <RevealViaPose pose={isVisible ? 'visible' : 'hidden'} className="shadow-lg">
          <Img
            fluid={image.image.childImageSharp.fluid}
            alt={image.alt}
            // className="shadow-lg"
          />
        </RevealViaPose>
      </Waypoint>
    )
  }
}

const RevealViaPose = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
    // transition: {
    //   delay: 100,
    //   duration: 1000,
    //   ease: [0.77, 0, 0.175, 1] // quadInAndOut
    // }
  },
  hidden: { opacity: 0, y: 40, scale: 0.8, transition: { duration: 0 } }
})

// const PosedImage = ({ image }) => (
//   <RevealPose
//     css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
//     reset={true}
//     offsetTop="125%"
//     offsetBottom="125%"
//   >
//     <Img
//       fluid={image.image.childImageSharp.fluid}
//       alt={image.alt}
//       className="shadow-lg"
//     />
//   </RevealPose>
// )

/*
 *
 * Posed Images
 * 
 */

class PosedImages extends React.Component {
  state = { isVisible: false }

  // Waypoint handlers
  handleWaypointEnter = () => this.setState({ isVisible: true })
  handleWaypointLeave = () => this.props.reset && this.setState({ isVisible: false })

  render() {
    const { images } = this.props
    const { isVisible } = this.state

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        onLeave={this.handleWaypointLeave}
        offsetTop="125%"
        offsetBottom="125%"
      >
        <List
          style={{
            display: `grid`,
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            gridGap: `1rem`
          }}
          pose={isVisible ? 'visible' : 'hidden'}
        >
          {/* the "flipMove" prop determines if the space collapses after the animation completes or before */}
          {/* <PoseGroup pose={isVisible ? 'visible' : 'hidden'}> */}
          {images.map((image, i) => (
            <Item key={i} className="shadow-lg">
              <Img
                fluid={image.node.image.childImageSharp.fluid}
                alt={image.node.alt}
              />
            </Item>
          ))}
          {/* </PoseGroup> */}
        </List>
      </Waypoint>
    )
  }
}

const listConfig = {
  visible: { staggerChildren: 300 },
  initialPose: 'hidden'
}

const itemConfig = {
  visible: {
    scale: 1,
    y: 0,
    opacity: 1
    // transition: {
    //   // delay: 100,
    //   duration: 1000,
    //   ease: [0.77, 0, 0.175, 1]
    // }
  },
  hidden: { scale: 0.8, y: 40, opacity: 0, transition: { duration: 0 } }
}

const List = posed.ul(listConfig)
const Item = posed.li(itemConfig)

/* <Img
            
            example={example.node}
            index={i}
          />
        )
      })}
    </ul>
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    delay={index * 0.3 + 0.1}
    reset={true}
    offsetTop="100%"
    offsetBottom="100%"
  >
    <Img
      fluid={example.image.childImageSharp.fluid}
      alt={example.alt}
      className="shadow-lg"
    />
*/

/*
 *
 * Imports & Exports
 * 
 */

import React from 'react'

import Img from '../../components/Img'
import posed, { PoseGroup } from 'react-pose'
import Reveal from '../../components/examples/Reveal'
// import RevealPose from '../../components/examples/RevealPose'
import Waypoint from 'react-waypoint'

export default RevealExample
