function IndexPage() {
  // Example Data (TODO: remove if not using)
  const videos = useVideos()
  // const filteredSortedAndLimitedItems = useFilteredSortedAndLimitedItems()
  // const events = useEvents()
  // const upcomingEvents = useUpcomingEvents()
  // const pastEvents = usePastEvents()
  // const mediaOnstage = useMediaOnstage()
  // const mediaPortrait = useMediaPortrait()
  // const mediaVideo = useMediaVideo()
  // const templates = useTemplates()

  return (
    <Base>
      <main id="main-content">
        <AccordionExample />
        <DialogExample />
        <FilterAndLimitExample />
        <LimitExample />
        <MailChimpExample />
        <PopUpExample />
        <ReadMoreExample />
        <RevealOnScrollExample />
        <ScrollToIdExample />
        <TemplateExample />
        <TwitterFeedExample />
        <VideoiFrameExample />
        <VideoThumbnailAndDialogExample video={videos[0].node} />

        {/* 
        <TemplateExample data={data.allTemplatesYaml.edges} />
        <RevealExample data={data.allExampleYaml.edges} />

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
import LimitExample from '../ui/@ex-sections/LimitExample'
import MailChimpExample from '../ui/@ex-sections/MailChimpExample'
import PopUpExample from '../ui/@ex-sections/PopUpExample'
import ReadMoreExample from '../ui/@ex-sections/ReadMoreExample'
import RevealOnScrollExample from '../ui/@ex-sections/RevealOnScrollExample'
import ScrollToIdExample from '../ui/@ex-sections/ScrollToIdExample'
import TemplateExample from '../ui/@ex-sections/TemplateExample'
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
import useVideos from '../data/examples/useVideos'
// import useFilteredSortedAndLimitedItems from '../data/examples/useFilteredSortedAndLimitedItems'
// import useEvents from '../data/examples/useEvents'
// import useUpcomingEvents from '../data/examples/useUpcomingEvents'
// import usePastEvents from '../data/examples/usePastEvents'
// import useMediaOnstage from '../data/examples/useMediaOnstage'
// import useMediaPortrait from '../data/examples/useMediaPortrait'
// import useMediaVideo from '../data/examples/useMediaVideo'
// import useTemplates from '../data/examples/useTemplates'

export default IndexPage
