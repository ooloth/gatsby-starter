const TwitterExample = () => (
  <section className="mv6 bg-lightest-blue pa5 shadow-lg">
    <h2 className="mb3">Here's a Twitter Feed</h2>

    <TwitterFeed
      user="beyonce"
      maxTweets={3}
      render={tweets => <Tweets tweets={tweets} />}
    />
  </section>
)

/*
 *
 * Tweets
 *
 */

const Tweets = ({ tweets }) => (
  <ul className="container">
    {tweets.map(tweet => <Tweet key={tweet.tid} tweet={tweet} />)}
  </ul>
)

/*
 *
 * Tweet
 *
 */

const Tweet = ({ tweet }) => (
  <li className="tweet pv4">
    <Content tweet={tweet.tweet} />
    <Reply id={tweet.tid} />
    <Retweet id={tweet.tid} />
    <Favorite id={tweet.tid} />
  </li>
)

/*
 *
 * Author
 *
 */

// TODO: Add some default author details to make future projects easy.
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

import React from 'react'

import Anchor from '../../components/Anchor'
import Icon from '../../components/examples/Icon'
import TwitterFeed from '../../components/examples/TwitterFeed'

import comment from '../../svg/comment.svg'
import heart from '../../svg/heart.svg'
import retweet from '../../svg/retweet.svg'

export default TwitterExample
