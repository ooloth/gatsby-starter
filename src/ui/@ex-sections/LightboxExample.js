function LightboxExample() {
  const images = useMediaPortraitData()

  return (
    <Section>
      <h2>Lightbox (images)</h2>
      <Code>useLightbox, useMachine</Code>

      {/* TODO: To add filterAndLimit logic, see AV's PortfolioMedia.js */}
      <Images images={images} />
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

function Images({ images }) {
  const imagesMachine = lightboxMachine.withContext({
    ...lightboxMachine.context,
    imageCount: images.length,
  })
  const [state, send] = useMachine(imagesMachine)

  const { currentIndex, nextIndex, prevIndex } = state.context

  return (
    <>
      <List>
        {images.map((image, i) => (
          <LiWithCSSAnimation
            key={image.node.file.childImageSharp.thumbnail.src}
            style={{ animationDelay: `calc(${i * 100}ms)` }}
          >
            <Thumbnail
              image={image.node}
              lightboxIndex={i}
              isLightboxOpen={state.value === `open`}
              send={send}
              // titleForAltText={titleForAltText}
            />
          </LiWithCSSAnimation>
        ))}
      </List>

      {state.value === `open` && (
        <Lightbox
          mainSrc={images[currentIndex].node.file.childImageSharp.lightbox.src}
          nextSrc={images[nextIndex].node.file.childImageSharp.lightbox.src}
          prevSrc={images[prevIndex].node.file.childImageSharp.lightbox.src}
          imageCaption={images[currentIndex].node.caption}
          onCloseRequest={() => send('CLOSE')}
          onMovePrevRequest={() => send({ type: 'SET_INDEX', index: prevIndex })}
          onMoveNextRequest={() => send({ type: 'SET_INDEX', index: nextIndex })}
          enableZoom={false}
          animationOnKeyInput={true}
        />
      )}
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-column-gap: var(--s6);
`

const LiWithCSSAnimation = styled.li`
  visibility: hidden;
  transform-origin: bottom;
  margin-top: var(--s6);
  animation: ${enter} 1s cubic-bezier(0.5, 0, 0, 1) forwards;
`

///////////////////////////////////////////////////////////////////////////////////

function Thumbnail({ image, titleForAltText, lightboxIndex, isLightboxOpen, send }) {
  return (
    <Wrapper>
      <Image
        fluid={{ ...image.file.childImageSharp.thumbnail, aspectRatio: 1 / 1 }}
        // alt={`A scene from Alaina's production of ${titleForAltText}`}
      />
      <OpenLightbox
        value={lightboxIndex}
        onClick={() => send({ type: 'OPEN', index: lightboxIndex })}
        aria-expanded={isLightboxOpen}
      >
        View Image
      </OpenLightbox>
    </Wrapper>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  position: relative;
`

const OpenLightbox = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  background-color: hsla(0, 0%, 0%, 0%);
  width: 100%;
  height: 100%;
  font-family: var(--headingFont);
  font-size: var(--f7);
  text-transform: uppercase;
  color: hsla(0, 100%, 100%, 0%);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: hsla(0, 0%, 0%, 80%);
    color: white;
  }

  ${media.lg`
    font-size: var(--f6); 
  `}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import '../../styles/plugins/examples/react-image-lightbox.css'

import useMediaPortraitData from '../../data/examples/useMediaPortraitData'
import useMachine from '../../logic/examples/useMachine'
import { lightboxMachine } from '../../logic/examples/lightbox'
import { enter, media } from '../../styles'

export default LightboxExample
