const EventsByUpcomingAndPastExample = () => (
  <section className="mv6 bg-lightest-blue pa5 shadow-lg">
    <h2 className="mb4">Events by Upcoming and Past Example</h2>

    <EventsByUpcomingAndPast events={events}>
      {(upcomingEvents, pastEvents) => (
        <Fragment>
          <UpcomingEvents events={upcomingEvents} />
          <PastEvents events={pastEvents} />
        </Fragment>
      )}
    </EventsByUpcomingAndPast>
  </section>
)

// Events (list with most recent at the top)
const events = [
  {
    node: {
      title: `Event 4`,
      lastDate: `Jan 1, 2020`
    }
  },
  {
    node: {
      title: `Event 3`,
      lastDate: `Jan 1, 2019`
    }
  },
  {
    node: {
      title: `Event 2`,
      lastDate: `Jan 1, 2018`
    }
  },

  {
    node: {
      title: `Event 1`,
      lastDate: `Jan 1, 2017`
    }
  }
]

/*
 *
 * Upcoming Events
 *
 */

const UpcomingEvents = ({ events }) => (
  <Fragment>
    <h3 className="mt5 f2">Upcoming events:</h3>
    <ul className="">
      {events.map(event => <Event key={event.node.title} event={event.node} />)}
    </ul>
  </Fragment>
)

/*
 *
 * Past Events
 *
 */

const PastEvents = ({ events }) => (
  <Fragment>
    <h3 className="mt5 f2">Past events:</h3>
    <ul className="calendar-grid">
      {events.map(event => <Event key={event.node.title} event={event.node} />)}
    </ul>
  </Fragment>
)

/*
 *
 * Event
 *
 */

const Event = ({ event }) => (
  <li className="mt4 lh-copy">
    <h4>{event.title}</h4>
    <p>{event.lastDate}</p>
  </li>
)

/*
 *
 * Imports & Exports
 * 
 */

import React, { Fragment } from 'react'

import EventsByUpcomingAndPast from '../../components/examples/EventsByUpcomingAndPast'

export default EventsByUpcomingAndPastExample
