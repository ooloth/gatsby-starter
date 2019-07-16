function IndexPage() {
  // Example Data (TODO: remove if not using)
  const videos = useVideosData()
  // const filteredSortedAndLimitedItems = useFilteredSortedAndLimitedItemsData()
  // const events = useEventsData()
  // const upcomingEvents = useUpcomingEventsData()
  // const pastEvents = usePastEventsData()
  // const mediaOnstage = useMediaOnstageData()
  // const mediaPortrait = useMediaPortraitData()
  // const mediaVideo = useMediaVideoData()
  // const templates = useTemplatesData()

  return (
    <Base>
      <main id="main-content">
        <AccordionExample />
        <DialogExample />
        <FilterAndLimitExample />
        <LightboxExample />
        <LimitExample />
        <MailChimpExample />
        {/* TODO: activate form ONLY when needed (or Netlify will register it) */}
        {/* <NetlifyFormExample /> */}
        <PopUpExample />
        <ReadMoreExample />
        <RevealOnScrollExample />
        <ScrollToIdExample />
        <TemplatesExample />
        <TwitterFeedExample />
        <VideoiFrameExample />
        <VideoThumbnailAndDialogExample video={videos[0]} />

        {/* 
        <GalleryAndLightboxExample
          portrait={data.allMediaPortraitYaml.nodes}
          onstage={data.allMediaOnstageYaml.nodes}
          video={data.allMediaVideoYaml.nodes}
        />

        <VideoLightboxExample videos={data.allLightboxVideosYaml.nodes} />

        <FadingCarouselExample data={data.allExampleYaml.nodes} /> */}
        {/* TODO: rewrite FlickityExample (causing an error in v2) */}
        {/* <FlickityExample data={data.allExampleYaml.nodes} /> */}
        {/* <SlickExample data={data.allExampleYaml.nodes} /> */}

        {/* <EventsByUpcomingAndPastExample events={data.allEventsYaml.nodes} />

        <SVGsAndEmojisExample />
        <InstagramExample /> */}

        {/* <FormikExample /> */}
      </main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'

// Example Sections
import Base from '../ui/Base'
import AccordionExample from '../ui/@ex-sections/AccordionExample'
import DialogExample from '../ui/@ex-sections/DialogExample'
import FilterAndLimitExample from '../ui/@ex-sections/FilterAndLimitExample'
import LightboxExample from '../ui/@ex-sections/LightboxExample'
import LimitExample from '../ui/@ex-sections/LimitExample'
import MailChimpExample from '../ui/@ex-sections/MailChimpExample'
import NetlifyFormExample from '../ui/@ex-sections/NetlifyFormExample'
import PopUpExample from '../ui/@ex-sections/PopUpExample'
import ReadMoreExample from '../ui/@ex-sections/ReadMoreExample'
import RevealOnScrollExample from '../ui/@ex-sections/RevealOnScrollExample'
import ScrollToIdExample from '../ui/@ex-sections/ScrollToIdExample'
import TemplatesExample from '../ui/@ex-sections/TemplatesExample'
import TwitterFeedExample from '../ui/@ex-sections/TwitterFeedExample'
import VideoiFrameExample from '../ui/@ex-sections/VideoiFrameExample'
import VideoThumbnailAndDialogExample from '../ui/@ex-sections/VideoThumbnailAndDialogExample'

// import RevealExample from '../sections/examples/RevealExample'
// import EventsByUpcomingAndPastExample from '../sections/examples/EventsByUpcomingAndPastExample'
// import FadingCarouselExample from '../sections/examples/FadingCarouselExample'
// import FlickityExample from '../sections/examples/FlickityExample'
// import SlickExample from '../sections/examples/SlickExample'
// import GalleryAndLightboxExample from '../sections/examples/GalleryAndLightboxExample'
// import ImageLightboxExample from '../sections/examples/ImageLightboxExample'
// import VideoLightboxExample from '../sections/examples/VideoLightboxExample'
// import SVGsAndEmojisExample from '../sections/examples/SVGsAndEmojisExample'
// import TwitterExample from '../sections/examples/TwitterExample'
// import InstagramExample from '../sections/examples/InstagramExample'
// import FormikExample from '../sections/examples/FormikExample'

// Example Data
import useVideosData from '../queries/examples/useVideosData'
// import useFilteredSortedAndLimitedItemsData from '../queries/examples/useFilteredSortedAndLimitedItemsData'
// import useEventsData from '../queries/examples/useEventsData'
// import useUpcomingEventsData from '../queries/examples/useUpcomingEventsData'
// import usePastEventsData from '../queries/examples/usePastEventsData'
// import useMediaOnstageData from '../queries/examples/useMediaOnstageData'
// import useMediaPortraitData from '../queries/examples/useMediaPortraitData'
// import useMediaVideoData from '../queries/examples/useMediaVideoData'
// import useTemplatesData from '../queries/examples/useTemplatesData'

export default IndexPage
