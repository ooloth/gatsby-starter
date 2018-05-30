class FilterByCategory extends Component {
  state = {
    category: this.props.defaultCategory,
    items: this.props[this.props.defaultCategory]
  }

  handleFilter = e =>
    this.setState({ category: e.target.value, items: this.props[e.target.value] })

  render() {
    const { category, items } = this.state

    return (
      <Fragment>
        {this.props.renderFilters(category, this.handleFilter)}
        {this.props.renderItems(items)}
      </Fragment>
    )
  }
}

FilterByCategory.propTypes = {
  defaultCategory: PropTypes.string.isRequired,
  renderFilters: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired
}

/*
 *
 * Import & Exports
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default FilterByCategory

/*

INSTRUCTIONS:

1. Pass each category's items via a separate prop (e.g. "blue" items via a "blue" prop).
2. If an "all" category is needed, pass the items (in the correct order) via an "all" prop.
3. Match each filter button's value attribute to its category name exactly.

*/
