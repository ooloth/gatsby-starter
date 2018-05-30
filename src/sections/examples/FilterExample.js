const FilterExample = ({ category1, category2 }) => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Filter Example</h2>

    <FilterByCategory
      category1={category1}
      category2={category2}
      defaultCategory="category1"
      renderFilters={(category, handleFilter) => (
        <Filters category={category} handleFilter={handleFilter} />
      )}
      renderItems={items => <Items items={items} />}
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
 * Import & Exports
 *
 */

import React, { Fragment } from 'react'

import FilterByCategory from '../../components/examples/FilterByCategory'

export default FilterExample
