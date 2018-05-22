const CollapseExample = () => (
  <section className="mv6 pv5 bg-light-yellow">
    <h2 className="pb3">Collapse Example</h2>
    <VisibleParagraphs />
    <Collapse
      renderContent={() => <CollapsedParagraphs />}
      renderToggle={(expanded, handleToggle) => (
        <ExampleToggle expanded={expanded} handleToggle={handleToggle} />
      )}
    />
  </section>
)

/*
 *
 * Visible Paragraphs
 * 
 */

const VisibleParagraphs = () => {
  return paragraphs.slice(0, 1).map((paragraph, index) => {
    return (
      <p
        key={`paragraph-${index}`}
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="container mt3 lh-copy"
      />
    )
  })
}

/*
 *
 * Collapsed Paragraphs
 * 
 */

const CollapsedParagraphs = () => {
  return paragraphs.slice(1).map((paragraph, index) => {
    return (
      <p
        key={`paragraph-${index + 1}`} // index restarts at 0 after slice
        dangerouslySetInnerHTML={{ __html: paragraph }}
        className="mt3 lh-copy"
      />
    )
  })
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
 * Example Toggle
 * 
 */

const ExampleToggle = ({ expanded, handleToggle }) => (
  <button onClick={handleToggle} className="btn mt4">
    Read {expanded ? `Less` : `More`}
  </button>
)

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'

import Collapse from '../../components/examples/Collapse'

export default CollapseExample
