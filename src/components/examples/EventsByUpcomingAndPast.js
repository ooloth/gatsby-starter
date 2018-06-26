const EventsByUpcomingAndPast = ({ events, children }) => {
  // Get today's date (midnight, local time)
  const today = new Date().setHours(0, 0, 0, 0)

  // Determine if date string (e.g. 'Mar 15, 2018') is in the past
  const isPast = dateString => new Date(dateString) < today

  // Split events array into upcomingEvents and pastEvents
  const splitEventsByTime = allEvents =>
    allEvents.reduce(
      ([pastEvents, upcomingEvents], event) =>
        isPast(event.node.lastDate)
          ? [[...pastEvents, event], upcomingEvents] // add event to pastEvents
          : [pastEvents, [...upcomingEvents, event]], // add event to upcompingEvents
      [[], []]
    )

  const [pastEvents, upcomingEvents] = splitEventsByTime(events)

  // TODO: make the reversability of each array configurable via props?
  return children(upcomingEvents.reverse(), pastEvents)
}

EventsByUpcomingAndPast.propTypes = {
  events: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
}

/*
 *
 * Imports & Exports
 * 
 */

import PropTypes from 'prop-types'

export default EventsByUpcomingAndPast

/*

INSTRUCTIONS:

<EventsByUpcomingAndPast events={events}>
  {(upcomingEvents, pastEvents) => (
    <Fragment>
      <UpcomingEvents events={upcomingEvents} />
      <PastEvents events={pastEvents} />
    </Fragment>
  )}
</EventsByUpcomingAndPast>

*/
