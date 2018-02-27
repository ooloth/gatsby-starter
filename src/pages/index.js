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
    <RevealTest data={data.allExampleJson.edges} />
    <ScrollTo href="#top" class="link dib mb5">
      Back to top
    </ScrollTo>
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

import ScrollTo from '../components/library/ScrollTo'

/* 
 *
 * Example
 * 
 */

import Img from '../components/base/Img'
import HyperLink from '../components/base/HyperLink'

const Example = ({ example }) => (
  <article className="mb5 ph3">
    <Img
      sizes={example.image.childImageSharp.sizes}
      position="0% 0%"
      alt={example.alt}
      critical={example.critical}
      className="shadow-lg"
    />
    <h3 className="mb3 pt3 f2">{example.title}</h3>
    <p
      className="ml-auto mr-auto pv3 measure lh-tall"
      dangerouslySetInnerHTML={{ __html: example.description }}
    />
    <HyperLink href={example.link} className="link dib">
      Here's a link
    </HyperLink>
  </article>
)

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

// DOCS: https://github.com/muicss/loadjs#documentation

import Waypoint from 'react-waypoint'
import loadjs from 'loadjs'

class GSAPTest extends React.Component {
  state = { revealed: false, repeat: true }

  componentDidMount = () => {
    // Load GSAP asynchronously from CDN
    if (!loadjs.isDefined('gsap')) {
      loadjs('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', 'gsap', {
        success: () => console.log('👍 GSAP is loaded')
      })
    }
  }

  handleWaypointEnter = () => {
    // Only animate if it hasn't been revealed yet (or has been reset to animate again)
    if (!this.state.revealed) {
      this.setState({ revealed: true })
      this.animate()
    }
  }

  handleWaypointLeave = () => {
    // If animation should repeat on next reveal, reset it when leaves viewport
    if (this.state.revealed && this.state.repeat) {
      this.setState({ revealed: false })
      this.killAnimation()
    }
  }

  animate = () => {
    loadjs.ready('gsap', () => {
      var breathe = TweenMax.to(this.box, 1.5, {
        scale: 0.9,
        ease: Power2.easeInOut,
        repeat: -1,
        yoyo: true
      })
    })
  }

  killAnimation = () => {
    loadjs.ready('gsap', () => TweenMax.killTweensOf(this.box))
  }

  render() {
    return (
      <div ref={el => (this.box = el)}>
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave}>
          <div class="mv6 bg-red pa5 shadow-lg">
            <h2>I'm an animated component</h2>
            <p class="mv4 ml-auto mr-auto measure-narrow lh-copy">
              I animate on scroll or by clicking the buttons below.
            </p>
            <button onClick={this.animate} class="pr4">
              Breathe!
            </button>
            <button onClick={this.killAnimation}>Stop breathing!</button>
          </div>
        </Waypoint>
      </div>
    )
  }
}

/*
 *
 * Reveal Test
 * 
 */

const RevealTest = ({ data }) => (
  <section class="pb5">
    <h2 class="mb3">These use Reveal to appear magically on scroll</h2>
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr)`,
        gridGap: `1rem`
      }}
    >
      {data.map((example, index) => {
        return <RevealExample key={shortid()} example={example.node} index={index} />
      })}
    </div>
  </section>
)

/*
 *
 * Reveal Example
 * 
 */

import Image from 'gatsby-image'

import Reveal from '../components/library/Reveal'

const RevealExample = ({ example, index }) => (
  <Reveal
    css={{ opacity: 0, transform: `translateY(40px) scale(.8)` }}
    delay={index * 0.3 + 0.1}
    duration={1}
    offsetTop={-100}
  >
    <Img
      sizes={example.image.childImageSharp.sizes}
      alt={example.alt}
      critical={true}
      className="shadow-lg"
    />
  </Reveal>
)

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
              sizes(maxWidth: 1000) {
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
