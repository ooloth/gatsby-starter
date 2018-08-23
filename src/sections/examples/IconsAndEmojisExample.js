const IconsAndEmojisExample = () => (
  <section className="mv6 bg-near-white pa5 shadow-lg">
    <h2 className="mb4">Here are some icons and emojis:</h2>

    <h3 className="pt3 mb2 f4">SVG icon files:</h3>
    <Heart aria-label="Heart" className="icon f1 red" />
    <Instagram className="icon f1 purple" />

    <h3 className="mt4 mb2 f4 mt3">SVG icon component:</h3>
    <Heart className="icon f1 red" />

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

// These use gatsby-plugin-svgr (initialized in gatsby-config)
// See: https://github.com/zabute/gatsby-plugin-svgr
import { ReactComponent as Heart } from '../../svg/heart.svg'
import { ReactComponent as Instagram } from '../../svg/instagram.svg'

import Emoji from '../../components/examples/Emoji'

export default IconsAndEmojisExample
