class FilterAndLimit extends Component {
  state = {
    category: this.props.defaultCategory,
    items: this.props[this.props.defaultCategory],
    limit: this.props.limit,
    limited: true
  }

  handleFilter = e =>
    this.setState({
      category: e.target.value,
      items: this.props[e.target.value],
      limit: this.props.limit,
      limited: true
    })

  handleSeeMore = () => {
    const { items, limit } = this.state
    const increment = this.props.increment || this.props.limit
    const remaining = items.length - limit

    if (remaining > increment) {
      this.setState(state => ({ limit: state.limit + increment }))
    } else {
      this.setState(state => ({ limit: state.limit + remaining, limited: false }))
    }
  }

  render() {
    const { category, items, limit, limited } = this.state
    const visibleItems = items.slice(0, limit)

    return (
      <Fragment>
        {this.props.renderFilters(category, this.handleFilter)}
        {this.props.renderItems(visibleItems)}
        {limited && this.props.renderSeeMore(this.handleSeeMore)}
      </Fragment>
    )
  }
}

FilterAndLimit.propTypes = {
  defaultCategory: PropTypes.string.isRequired,
  renderFilters: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired,
  limit: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  increment: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/*
 *
 * Import & Exports
 *
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default FilterAndLimit

/*

INSTRUCTIONS:

1. Pass each category's items via a separate prop (e.g. "blue" items via a "blue" prop).
2. If an "all" category is needed, pass the items (in the correct order) via an "all" prop.
3. Match each filter button's value attribute to its category name exactly.

*/
