class TwitterExample extends Component {
  state = { tweets: [] }

  componentDidMount = () => {
    twitterFetcher.fetch({
      profile: { screenName: `beyonce` }, // just update this part
      maxTweets: 3,
      // dataOnly: true,
      enableLinks: true,
      showUser: true,
      showTime: false,
      dateFunction: ``,
      showRetweet: false,
      customCallback: this.displayTweets, // passes a 'tweets' object
      showInteraction: true,
      showImages: false
    })
  }

  displayTweets = tweets => this.setState({ tweets: tweets })

  render() {
    const { tweets } = this.state

    return (
      <section className="mv6 bg-lightest-blue pa5 shadow-lg">
        <h2 className="mb3">Here's a Twitter Feed</h2>
        {tweets.length > 0 ? (
          <Fragment>
            {tweets.map((tweet, index) => {
              return (
                // NOTE: all the styling occurs in CSS
                <article
                  key={`tweet-${index}`}
                  dangerouslySetInnerHTML={{ __html: tweet }}
                  className="container pv3"
                />
              )
            })}
          </Fragment>
        ) : (
          <div />
        )}
      </section>
    )
  }
}

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component, Fragment } from 'react'
import twitterFetcher from 'twitter-fetcher'

export default TwitterExample
