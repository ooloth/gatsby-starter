// TODO: replace style attribute approach with an RTG approach?

const ReadMoreExample = () => (
  <section className="mv6 pv5 bg-light-green">
    <h2 className="mb4">Read More Example</h2>
    <ReadMore />
  </section>
)

class ReadMore extends Component {
  state = { visibleItems: 1, expanded: false }

  handleReadMore = () => {
    if (!this.state.expanded) {
      loadjs.ready(`gsap`, () => {
        // When expanding, set this immediately
        this.setState({ expanded: true })

        // Invalidate the temporary inline styles (which match the starting state for the animation and are added to prevent a flash of content in the ending position)
        this.item.removeAttribute(`style`)

        // Expand the section to its natural height
        TweenMax.fromTo(
          this.item,
          1,
          {
            height: 0,
            autoAlpha: 0
          },
          {
            height: this.item.offsetHeight,
            autoAlpha: 1,
            ease: `Power3.easeInOut`
          }
        )
      })
    }
  }

  render() {
    // const { paragraphs } = this.props
    const { visibleItems, expanded } = this.state

    return (
      <Fragment>
        {/* Visible paragraphs */}
        {paragraphs.slice(0, visibleItems).map(paragraph => {
          return (
            <p
              key={shortid.generate()}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="mb3 lh-copy"
            />
          )
        })}

        {/* Hidden paragraphs */}
        <div ref={el => (this.item = el)} className="overflow-hidden" style={{ height: 0 }}>
          {paragraphs.slice(visibleItems).map(paragraph => {
            return (
              <p
                key={shortid.generate()}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="mb3 lh-copy"
              />
            )
          })}
        </div>

        {/* Read More button */}
        {!expanded && (
          <div className="pt4 tc">
            <button
              onClick={this.handleReadMore}
              onKeyUp={e => e.key === `Enter` && this.handleReadMore()}
              className="btn"
            >
              Read More
            </button>
          </div>
        )}
      </Fragment>
    )
  }
}

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
import shortid from 'shortid'

export default ReadMoreExample
