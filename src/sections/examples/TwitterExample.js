class TwitterExample extends Component {
  state = { tweets: null }

  // Delay fetch until the page has fully loaded (remove or provide placeholder tweet content to prevent page jump)
  componentDidMount = () => {
    window.addEventListener(`load`, this.fetchTweets, {
      once: true
    })
  }

  fetchTweets = () => {
    twitterFetcher.fetch({
      profile: { screenName: `beyonce` }, // update this value only
      maxTweets: 3,
      dataOnly: true,
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
    console.log(`tweets`, tweets)

    return (
      <section className="mv6 bg-lightest-blue pa5 shadow-lg">
        <h2 className="mb3">Here's a Twitter Feed</h2>
        {tweets && (
          <ul className="container">
            {tweets.map(tweet => <Tweet key={tweet.tid} tweet={tweet} />)}
          </ul>
        )}
      </section>
    )
  }
}

/*
{tweets.map(tweet => {
  return (
    <li
      key={tweet.tid}
      dangerouslySetInnerHTML={{ __html: tweet }}
      className="container pv3"
    />
  )
})}
*/

// TODO: extract the logic into a separate TwitterFeed component and use a render prop to add the example markup here

const Tweet = ({ tweet }) => (
  <li className="tweet pv4">
    <Content tweet={tweet.tweet} />
    <Reply id={tweet.tid} />
    <Retweet id={tweet.tid} />
    <Favorite id={tweet.tid} />
  </li>
)

// TODO: Add some template author details to make future projects easy.
// const Author = ({ author }) => <div>Hi</div>

/*
 *
 * Content
 *
 */

const Content = ({ tweet }) => (
  <p dangerouslySetInnerHTML={{ __html: tweet }} className="mb3 lh-title" />
)

/*
 *
 * Reply
 *
 */

const Reply = ({ id }) => (
  <Anchor href={`https://twitter.com/intent/tweet?in_reply_to=${id}`} srText="Reply">
    <Icon svg={comment} className="f4 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Retweet
 *
 */

const Retweet = ({ id }) => (
  <Anchor
    href={`https://twitter.com/intent/retweet?tweet_id=${id}`}
    srText="Retweet"
  >
    <Icon svg={retweet} className="mh2 f3 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Favorite
 *
 */

const Favorite = ({ id }) => (
  <Anchor
    href={`https://twitter.com/intent/favorite?tweet_id=${id}`}
    srText="Favorite"
  >
    <Icon svg={heart} className="f4 animate hover:blue" />
  </Anchor>
)

/*
 *
 * Imports & Exports
 * 
 */

import React, { Component } from 'react'
import twitterFetcher from 'twitter-fetcher'

import comment from '../../svg/comment.svg'
import heart from '../../svg/heart.svg'
import retweet from '../../svg/retweet.svg'

import Anchor from '../../components/Anchor'
import Icon from '../../components/examples/Icon'

export default TwitterExample
