import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <main className="container tc">
    <h1 className="pv4 f1">Hi people</h1>
    <Link to="/page-2/" className="link dib mb4">
      Go to page 2
    </Link>
    <h2 className="mb3 f3">Here's some queried JSON content:</h2>
    {data.allExampleJson.edges.map(example => {
      return <Example key={shortid()} example={example.node} />
    })}
    <GSAPTest />
  </main>
)

export default IndexPage

/*
 *
 * General
 * 
 */

import React from 'react'
import shortid from 'shortid'

/*
 *
 * GSAP Test
 * 
 */

// DOCS: https://greensock.com/get-started-js
// DOCS: https://greensock.com/docs/TweenMax
// DOCS: https://greensock.com/docs/TimelineMax

// TODO: see https://greensock.com/forums/topic/15749-gsap-with-create-react-app/
// NOTE: Node with ref needs to be outside the Waypoint component

// EXAMPLE: https://codepen.io/osublake/pen/0d4742d2200d028ed42297cb874af2b5?editors=0010

import Waypoint from 'react-waypoint'

class GSAPTest extends React.Component {
  state = { revealed: false, repeat: true }

  componentDidMount = () => {
    if (this.state.revealed) {
      this.animate()
    }
  }

  logGsap = () => console.log(TweenMax)

  handleWaypointEnter = () => {
    console.log(`Entered!`)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      console.log('Animation started.')
      this.animate()
    }
  }

  handleWaypointLeave = () => {
    console.log(`Exited!`)
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
      this.killAnimation()
    }
  }

  waitForGsapToLoad = () => {
    if (!window.TweenMax) {
      const timer = setInterval(() => {
        if (window.TweenMax) {
          console.log('GSAP is loaded!')
          clearInterval(timer)
          this.startAnimation()
        }
      }, 1000)
    }
  }

  animate = () => {
    if (!window.TweenMax) {
      this.waitForGsapToLoad()
    } else {
      this.startAnimation()
    }
  }

  startAnimation = () => {
    console.log(`Starting animation`)
    TweenMax.to(this.box, 1.5, {
      scale: 0.75,
      ease: Power2.easeInOut,
      repeat: -1,
      yoyo: true
    })
  }

  killAnimation = () => {
    if (window.TweenMax) {
      TweenMax.killAll(this.box)
      console.log('Animation stopped.')
    }
  }

  render() {
    return (
      <div ref={el => (this.box = el)}>
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave}>
          <div class="mv6 bg-red pa5 shadow-lg">
            <h2>I'm an animated component</h2>
            <p class="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I load GSAP asychronously from a CDN to keep the bundle size small and the
              loading time quick.) I animate on scroll or by clicking the buttons below.
            </p>
            <button onClick={this.logGsap} class="pr4">
              Log GSAP
            </button>
            <button onClick={this.animate} class="pr4">
              Shrink!
            </button>
            <button onClick={this.killAnimation}>Stop shrinking!</button>
          </div>
        </Waypoint>
      </div>
    )
  }
}

/*
 *
 * Example
 * 
 */

import Image from 'gatsby-image'
import Observer from '@researchgate/react-intersection-observer'

import HyperLink from '../components/HyperLink'

const Example = ({ example }) => (
  <article className="mb5 ph3">
    {console.log('example', example)}
    {console.log('critical', example.critical)}
    <ObserverWrapper critical={example.critical}>
      <Image
        sizes={example.image.childImageSharp.sizes}
        alt={example.alt}
        className="shadow-lg"
      />
    </ObserverWrapper>
    <h3 className="mb3 pt3 f2">{example.title}</h3>
    {/* This paragraph will dispaly HTML in addition to plain text */}
    <p
      className="ml-auto mr-auto pv3 measure lh-tall"
      dangerouslySetInnerHTML={{ __html: example.description }}
    />
    <HyperLink href={example.link} className="link dib">
      Here's a link
    </HyperLink>
  </article>
)

class ObserverWrapper extends React.Component {
  state = { isIntersecting: this.props.critical || false }

  handleIntersection = event => {
    console.log(`event.isIntersecting`, event.isIntersecting)
    this.setState({ isIntersecting: event.isIntersecting })
  }

  render() {
    console.log(`this.state.isIntersecting`, this.state.isIntersecting)
    return (
      <Observer rootMargin="25% 0%" onChange={this.handleIntersection} onlyOnce={true}>
        <figure data-critical={this.props.critical}>
          {this.state.isIntersecting && this.props.children}
        </figure>
      </Observer>
    )
  }
}

/*
 *
 * Queries
 * 
 */

export const query = graphql`
  query IndexPageQuery {
    allExampleJson {
      edges {
        node {
          image {
            childImageSharp {
              sizes(maxWidth: 5184) {
                ...GatsbyImageSharpSizes_withWebp
              }
            }
          }
          critical
          alt
          title
          description
          link
        }
      }
    }
  }
`
