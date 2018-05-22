// TODO: To improving loading speed, wrap all social embeds with react-waypoint (see AriaUmezawa > Socials.js > Accounts class for an example). However, don't add Waypoint directly to this component because shouldComponentUpdate must be set to false (to avoid duplicate feed content), which means it can't respond to message from Waypoint.

class InstagramExample extends Component {
  // Prevent Instafeed from rendering posts multiple times
  // See: https://github.com/JeromeFitz/react-instafeed/issues/24#issuecomment-345556639
  shouldComponentUpdate = () => false

  render() {
    const instafeedTarget = `instafeed`
    const instafeedTemplate = `
      <a href="{{link}}" target="_blank" rel="noopener nofollow" class="group relative w-third">
      <div class="aspect-ratio aspect-ratio--1x1">
        <img src="{{image}}" class="aspect-ratio--object object-cover object-center" />
        <p class="flex justify-center items-center absolute fill z-999 bg-transparent group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate">
          View Post
        </p>
      </div>
    </a>
  `

    return (
      <div className="mv6 bg-light-yellow pa5 shadow-lg">
        <h2 className="mb1">Here's an Instagram Feed</h2>
        <h5 className="mb4">(with overlays on hover)</h5>

        <div id={instafeedTarget} className="flex container">
          <Instafeed
            limit="3"
            ref={el => (this.instafeed = el)}
            resolution="standard_resolution"
            sortBy="most-recent"
            target={instafeedTarget}
            template={instafeedTemplate}
            // For steps to generate the following settings, see my "API: Instagram" note
            userId="279691891"
            clientId="d34e19504cac4f0a943b99fe32911137"
            accessToken="279691891.d34e195.0161d2d16d2046e182bede7cdf2cdb6c"
          />
        </div>
      </div>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import Instafeed from 'react-instafeed'

export default InstagramExample
