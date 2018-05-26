// TODO: replace style attribute approach with an RTG approach?

// TODO: create a reusable Expand.js (like my Reveal.js)?

const ReadMoreExample = () => (
  <section className="mv6 pv5 bg-light-green">
    <h2 className="pb3">Read More Example</h2>
    <ReadMore />
  </section>
)

class ReadMore extends Component {
  state = { visibleItems: 1, expanded: false }

  handleReadMore = () => {
    if (!this.state.expanded) {
      loadjs.ready(`gsap`, () => {
        // Expand the section to its natural height
        TweenMax.set(this.item, {
          height: `auto`,
          autoAlpha: 1
        })

        // ...from a starting height of 0
        TweenMax.from(this.item, 2, {
          height: 0,
          autoAlpha: 0,
          ease: `Elastic.easeOut`
        })

        this.setState({ expanded: true })
      })
    }
  }

  render() {
    // const { paragraphs } = this.props
    const { visibleItems, expanded } = this.state

    return (
      <Fragment>
        {/* Visible paragraphs */}
        {paragraphs.slice(0, visibleItems).map((paragraph, index) => {
          return (
            <p
              key={`paragraph-${index}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="container mt3 lh-copy"
            />
          )
        })}

        {/* Hidden paragraphs */}
        <div
          ref={el => (this.item = el)}
          className="overflow-hidden container"
          style={{ height: 0 }}
        >
          {paragraphs.slice(visibleItems).map((paragraph, index) => {
            return (
              <p
                key={`paragraph-${index + visibleItems}`} // index restarts at 0 after slice
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="mt3 lh-copy"
              />
            )
          })}
        </div>

        {/* Read More button */}
        {!expanded && <ReadMoreButton handleReadMore={this.handleReadMore} />}
      </Fragment>
    )
  }
}

/*
 *
 * Read More Button
 * 
 */

const ReadMoreButton = ({ handleReadMore }) => (
  <button
    onClick={handleReadMore}
    onKeyUp={e => e.key === `Enter` && handleReadMore}
    className="btn mt4"
    // TODO: If the context is .tl, use this to center the button:
    // className="relative left-50 transX--50"
  >
    Read More
  </button>
)

/*
 *
 * Paragraphs
 * 
 */

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget elit posuere, lacinia lacus nec, efficitur sapien. Morbi accumsan risus eget aliquet cursus. Proin in rutrum purus, quis finibus lacus. Aenean vitae lorem ut orci mollis scelerisque. Aliquam at pretium libero.`,
  `Curabitur auctor aliquam augue vitae auctor. Vivamus tincidunt tincidunt ex eget accumsan. Vestibulum interdum orci vel auctor dapibus. Aenean accumsan dui mauris, a vestibulum nulla volutpat a.`
]

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component, Fragment } from 'react'
import loadjs from 'loadjs'

export default ReadMoreExample