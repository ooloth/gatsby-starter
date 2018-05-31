const FilterBtnRadio = ({
  group,
  category,
  label,
  handleFilter,
  className,
  style
}) => (
  <Fragment>
    <input
      type="radio"
      name={group}
      id={category}
      value={category}
      onChange={handleFilter}
      className="filter-input"
    />
    <label htmlFor={category} className={className} style={style}>
      {label}
    </label>
  </Fragment>
)

FilterBtnRadio.propTypes = {
  group: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
}

/*
 *
 * Import & Exports
 *
 */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default FilterBtnRadio

/*

INSTRUCTIONS:

<FilterBtnRadio
  group={string, required}
  category={string, required}
  label={string, required}
  handleFilter={function, required}
  className={string, optional}
  style={string, optional}
/>

1. Wrap FilterBtnRadio components in a fieldset and include a legend as the first child.

*/
