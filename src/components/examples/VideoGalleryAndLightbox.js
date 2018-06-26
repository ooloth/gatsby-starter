class VideoGalleryAndLightbox extends Component {
  state = { lightboxIsOpen: false, videoIndex: 0 }

  handleImageClick = e =>
    this.setState({ lightboxIsOpen: true, videoIndex: parseInt(e.target.value) })

  render() {
    /* Shouldn't need to update this line */
    const { lightboxIsOpen, videoIndex } = this.state

    /* Update these variables depending on how images are sent into this component */
    const { galleryImages, lightboxVideos, renderGallery } = this.props

    // Set lightbox variables
    const nextIndex = (videoIndex + 1) % lightboxVideos.length
    const prevIndex =
      (videoIndex + lightboxVideos.length - 1) % lightboxVideos.length

    return (
      <Fragment>
        {renderGallery(galleryImages, this.handleImageClick)}

        {lightboxIsOpen && (
          <Lightbox
            mainSrc={
              // TODO: move styles to reactModalStyle prop so clicking outside the video will close the modal?
              // See: https://github.com/treyhuffine/lightbox-react#options
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxVideos[videoIndex].node.video} // TODO: may need to remove .node
                  width="100%"
                  height="100%"
                  style={{ display: `flex`, alignItems: `center` }}
                  playing
                />
              </div>
            }
            nextSrc={
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxVideos[nextIndex].node.video}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            prevSrc={
              <div className="flex justify-center items-center w-100 h-100">
                <ReactPlayer
                  url={lightboxVideos[prevIndex].node.video}
                  width="inherit"
                  height="inherit"
                />
              </div>
            }
            onCloseRequest={() => this.setState({ lightboxIsOpen: false })}
            onMovePrevRequest={() => this.setState({ videoIndex: prevIndex })}
            onMoveNextRequest={() => this.setState({ videoIndex: nextIndex })}
            enableZoom={false}
            animationOnKeyInput={true}
          />
        )}
      </Fragment>
    )
  }
}

// TODO: add children (what types?)
// TODO: separate galleryImages and lightboxImages props (for clarity when I reuse this)?

VideoGalleryAndLightbox.propTypes = {
  // images: PropTypes.array.isRequired
}

/*
 *
 * Images
 * 
 */

/*
 *
 * Import & Exports
 * 
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// NOTE: A forked version of react-image-lightbox that supports non-image component children
import Lightbox from 'lightbox-react'
import ReactPlayer from 'react-player'

export default VideoGalleryAndLightbox

/*

INSTRUCTIONS:

<ImageGalleryAndLightbox
  images={items}
  renderGallery={(images, handleImageClick) => (
    <Items items={images} handleImageClick={handleImageClick} />
  )}
/>

const Thumbnails = ({ items, handleImageClick }) => (
  <ul>
    {items.map((item, index) => (
      <Item
        key={item.node.image}
        item={item.node}
        lightboxIndex={index}
        handleImageClick={handleImageClick}
      />
    ))}
  </ul>
)

const Thumbnail = ({ item, lightboxIndex, handleImageClick }) => (
  <li className="relative">
    <Img sizes={item.image.childImageSharp.thumbnail} alt={item.alt} />

    /* Overlay + Lightbox trigger *
    <button
      onClick={handleImageClick}
      value={lightboxIndex}
      className="flex justify-center items-center absolute fill bg-transparent w-100 group-hover:bg-black-50 courier f4 md:f3 transparent group-hover:white animate"
    >
      View Image
    </button>
  </li>
)

1. Query a "thumbnail" (fluid) and "lightbox" (fixed) version of each image
2. Send all images to ImageGalleryAndLightbox via the "images" prop
3. Set the value of each button triggering the lightbox to the image's map index (so Lightbox knows the order of the lightbox images)

*/
