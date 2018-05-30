const IconsExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Here are some icons:</h2>
    <h3 className="f4">Icon file:</h3>
    <Icon svg={instagram} className="f1 purple" />

    <h3 className="f4 mt3">Icon component:</h3>
    <Icon svg={FaBeer} className="f1 red" />
  </section>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import FaBeer from 'react-icons/lib/fa/beer'

import Icon from '../../components/examples/Icon'
import instagram from '../../svg/instagram.svg'

export default IconsExample
