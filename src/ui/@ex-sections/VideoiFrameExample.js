function VideoiFrameExample() {
  return (
    <Section>
      <h2>Video iFrame Example</h2>
      <Code>iframe embed code</Code>

      {/* <h3>iFrame</h3> */}
      <EmbedWrapper>
        <Embed
          src="https://www.youtube.com/embed/ZTLAx3VDX7g"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </EmbedWrapper>
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--light-pink);
  padding: var(--s1) 0;
`

///////////////////////////////////////////////////////////////////////////////////

const EmbedWrapper = styled.div`
  margin-top: var(--s5);
  ${aspectRatioParent}
  ${ratio16x9}
`

///////////////////////////////////////////////////////////////////////////////////

const Embed = styled.iframe`
  border: none;
  ${aspectRatioChild}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import {
  aspectRatioParent,
  ratio16x9,
  aspectRatioChild,
} from '../../styles/mixins/examples/aspectRatios'

export default VideoiFrameExample
