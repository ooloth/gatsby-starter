const FilterAndLimitExample = ({ category1, category2 }) => (
  <section className="mv6 pv5 bg-near-white">
    <h2 className="mb4">Filter And Limit Example</h2>

    <FilterAndLimit
      category1={category1}
      category2={category2}
      defaultCategory="category1"
      limit={3}
      renderFilters={(category, handleFilter) => (
        <Filters category={category} handleFilter={handleFilter} />
      )}
      renderItems={items => <Items items={items} />}
      renderSeeMore={handleSeeMore => <SeeMore handleSeeMore={handleSeeMore} />}
    />
  </section>
)

/*
 *
 * Filter Buttons
 *
 */

const Filters = ({ category, handleFilter }) => (
  <Fragment>
    <button
      value="category1"
      onClick={handleFilter}
      className={`btn mh2 ${category === `category1` && `white`}`}
    >
      Category 1
    </button>

    <button
      value="category2"
      onClick={handleFilter}
      className={`btn mh2 ${category === `category2` && `white`}`}
    >
      Category 2
    </button>
  </Fragment>
)

/*
 *
 * Items
 *
 */

const Items = ({ items }) => (
  <Fragment>
    {items.map((item, index) => (
      <p key={index} className="mt3">
        {item.node.text}
      </p>
    ))}
  </Fragment>
)

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

import FilterAndLimit from '../../components/examples/FilterAndLimit'

export default FilterAndLimitExample
