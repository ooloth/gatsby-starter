const IconsAndEmojisExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Here are some icons and emojis:</h2>
    <h3 className="pt3 mb2 f4">SVG icon file:</h3>
    <Icon svg={instagram} ariaLabel="Instagram logo" className="f1 purple" />

    <h3 className="mt4 mb2 f4 mt3">SVG icon component:</h3>
    <Icon svg={FaBeer} ariaLabel="Mug of beer" className="f1 red" />

    <h3 className="mt4 mb2 f4 mt3">Emojis:</h3>
    <Emoji emoji="🕺" ariaLabel="A man dancing" className="f1" />
    <Emoji emoji="🔥" ariaLabel="A flame" className="mh3 f1" />
    <Emoji emoji="🎉" ariaLabel="A party noisemaker and confetti" className="f1" />
  </section>
)

/*
 *
 * Import & Exports
 *
 */

import React from 'react'
import FaBeer from 'react-icons/lib/fa/beer'

import Emoji from '../../components/examples/Emoji'
import Icon from '../../components/examples/Icon'
import instagram from '../../svg/instagram.svg'

export default IconsAndEmojisExample
