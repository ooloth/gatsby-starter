const FilterAndLimitExample = ({ cat1, cat2 }) => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Filter and Limit Example</h2>

    <FilterAndLimit
      cat1={cat1} // the items in cat1
      cat2={cat2} // the items in cat2
      defaultCategory="cat1"
      limit={3}
      renderFilters={handleFilter => <Filters handleFilter={handleFilter} />}
      renderItems={items => <Items items={items} />}
      renderSeeMore={handleSeeMore => <SeeMore handleSeeMore={handleSeeMore} />}
    />
  </section>
)

/*
 *
 * Filters
 *
 */

const Filters = ({ handleFilter }) => (
  <fieldset className="mb3">
    <legend className="sr-only">Pick a category</legend>

    <FilterBtnRadio
      group="cats"
      category="cat1"
      label="Category 1"
      defaultChecked={true}
      handleFilter={handleFilter}
      className="btn mh2"
    />

    <FilterBtnRadio
      group="cats"
      category="cat2"
      label="Category 2"
      handleFilter={handleFilter}
      className="btn mh2"
    />
  </fieldset>
)

/*
 *
 * Items
 *
 */

const Items = ({ items }) => (
  <TransitionGroup component={null}>
    {items.map(item => (
      <Mount
        key={item.node.text}
        animateExit={false}
        // animateSpace={false}
        appear={false}
      >
        <Item item={item.node} />
      </Mount>
    ))}
  </TransitionGroup>
)

/* 

No <Mount /> version:

<Fragment>
  {items.map(item => (
    <p key={item.node.text} className="mt3">
    {item.node.text}
    </p>
  ))}
</Fragment> 

*/

/*
 *
 * Item
 *
 */

const Item = ({ item }) => <p className="mt3">{item.text}</p>

/*
 *
 * See More Button
 *
 */

const SeeMore = ({ handleSeeMore }) => (
  <button onClick={handleSeeMore} className="btn mt4">
    See More
  </button>
)

/*
 *
 * Import & Exports
 *
 */

import React, { Fragment } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import FilterAndLimit from '../../components/examples/FilterAndLimit'
import FilterBtnRadio from '../../components/examples/FilterBtnRadio'
import Mount from '../../components/examples/Mount'

export default FilterAndLimitExample
