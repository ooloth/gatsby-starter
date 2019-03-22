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
        <PopUpExample />
        <ReadMoreExample />
        <RevealOnScrollExample />
        <ScrollToIdExample />
        <TemplatesExample />
        <TwitterFeedExample />
        <VideoiFrameExample />
        <VideoThumbnailAndDialogExample video={videos[0].node} />

        {/* 
        <GalleryAndLightboxExample
          portrait={data.allMediaPortraitYaml.edges}
          onstage={data.allMediaOnstageYaml.edges}
          video={data.allMediaVideoYaml.edges}
        />

        <ImageLightboxExample
          images={data.allLightboxImagesYaml.edges[0].node.images}
        />

        <VideoLightboxExample videos={data.allLightboxVideosYaml.edges} />

        <FadingCarouselExample data={data.allExampleYaml.edges} /> */}
        {/* TODO: rewrite FlickityExample (causing an error in v2) */}
        {/* <FlickityExample data={data.allExampleYaml.edges} /> */}
        {/* <SlickExample data={data.allExampleYaml.edges} /> */}

        {/* <EventsByUpcomingAndPastExample events={data.allEventsYaml.edges} />

        <SVGsAndEmojisExample />
        <TwitterExample />
        <InstagramExample /> */}

        {/* TODO: activate ONLY if site has a form (so Netlify doesn't register it unnecessarily) */}
        {/* <p className="pb5">(The Form example is hidden by default.)</p> */}
        {/* <FormikExample /> */}
        {/* <FormExample /> */}
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
// import FormExample from '../sections/examples/FormExample'

// Example Data
import useVideosData from '../data/examples/useVideosData'
// import useFilteredSortedAndLimitedItemsData from '../data/examples/useFilteredSortedAndLimitedItemsData'
// import useEventsData from '../data/examples/useEventsData'
// import useUpcomingEventsData from '../data/examples/useUpcomingEventsData'
// import usePastEventsData from '../data/examples/usePastEventsData'
// import useMediaOnstageData from '../data/examples/useMediaOnstageData'
// import useMediaPortraitData from '../data/examples/useMediaPortraitData'
// import useMediaVideoData from '../data/examples/useMediaVideoData'
// import useTemplatesData from '../data/examples/useTemplatesData'

export default IndexPage
