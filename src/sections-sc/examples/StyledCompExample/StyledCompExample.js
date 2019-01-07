function StyledCompExample() {
  return (
    <>
      <Section>
        <Inner>
          <Heading>Styled Components Example</Heading>
          <List>
            <Item href="https://google.ca" white />
            <Item href="https://google.ca" />
          </List>
        </Inner>
      </Section>

      {/* <StyledSystemExample /> */}
    </>
  )
}

const Section = styled.section`
  ${container}
  padding-top: var(--s10);
`

const Inner = styled.div`
  box-shadow: var(--shadow5);
  background-color: var(--purple3);
  padding: var(--s9) var(--s6);
  text-align: center;

  ${media.md`
    background-color: var(--purple2)
  `}
`

const Heading = styled.h2`
  margin-bottom: var(--s6);
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: var(--s6);
`

import React from 'react'
import styled from 'styled-components'

import Item from './Item'

import { container } from '../../../styles-sc/shared'
import { media } from '../../../styles-sc/shared'

export default StyledCompExample

// function StyledSystemExample() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container as="section" pt={6}>
//         <Box
//           bg="near-white"
//           py={5}
//           px={3}
//           textAlign="center"
//           color="blacks.10"
//           boxShadow={3}
//         >
//           <Heading>Styled System Example</Heading>
//           <List>
//             <Item href="https://google.ca" white />
//             <Item href="https://google.ca" />
//           </List>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }

// const Container = props => {
//   return <Box mx="auto" px={[3, 4]} maxWidth={7} {...props} />
// }

// const Box = styled.div`
//   ${space}
//   ${width}
//   ${maxWidth}
//   ${textAlign}
//   ${fontSize}
//   ${color}
//   ${boxShadow}
// `

// const theme = {
//   breakpoints: ['36em', '48em', '62em', '75em'],
//   space: [0, '.25rem', '.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'],
//   width: [16, 32, 64, 128, 256],
//   heights: [16, 32, 64, 128, 256],
//   maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
//   fonts: {
//     serif: 'athelas, georgia, times, serif',
//     sansSerif:
//       '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
//   },
//   fontSizes: [
//     '.75rem',
//     '.875rem',
//     '1rem',
//     '1.125rem',
//     '1.25rem',
//     '1.5rem',
//     '1.875rem',
//     '2.25rem',
//     '3rem',
//     '3.75rem',
//     '4.5rem'
//   ],
//   fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   lineHeights: [1, 1.2, 1.5, 1.7],
//   letterSpacings: {
//     tight: '-.05em',
//     normal: 'normal',
//     sm: '.05em',
//     md: '.1em',
//     lg: '.25em'
//   },
//   borders: [
//     0,
//     '1px solid',
//     '2px solid',
//     '4px solid',
//     '8px solid',
//     '16px solid',
//     '32px solid'
//   ],
//   radii: [0, '.125rem', '.25rem', '.375rem', '.5rem', '.75rem', '1rem', '100%'],
//   shadows: [
//     '0 1px 3px hsla(0, 0%, 0%, .2)',
//     '0 4px 6px hsla(0, 0%, 0%, .2)',
//     '0 5px 15px hsla(0, 0%, 0%, .2)',
//     '0 10px 24px hsla(0, 0%, 0%, .2)'
//   ],
//   colors: {
//     black: '#000',
//     'near-black': '#111',
//     'dark-gray': '#333',
//     'mid-gray': '#555',
//     gray: ' #777',
//     silver: '#999',
//     'light-silver': '#aaa',
//     'moon-gray': '#ccc',
//     'light-gray': '#eee',
//     'near-white': '#f4f4f4',
//     white: '#fff',
//     transparent: 'transparent',
//     blacks: [
//       'rgba(0,0,0,.0125)',
//       'rgba(0,0,0,.025)',
//       'rgba(0,0,0,.05)',
//       'rgba(0,0,0,.1)',
//       'rgba(0,0,0,.2)',
//       'rgba(0,0,0,.3)',
//       'rgba(0,0,0,.4)',
//       'rgba(0,0,0,.5)',
//       'rgba(0,0,0,.6)',
//       'rgba(0,0,0,.7)',
//       'rgba(0,0,0,.8)',
//       'rgba(0,0,0,.9)'
//     ],
//     whites: [
//       'rgba(255,255,255,.0125)',
//       'rgba(255,255,255,.025)',
//       'rgba(255,255,255,.05)',
//       'rgba(255,255,255,.1)',
//       'rgba(255,255,255,.2)',
//       'rgba(255,255,255,.3)',
//       'rgba(255,255,255,.4)',
//       'rgba(255,255,255,.5)',
//       'rgba(255,255,255,.6)',
//       'rgba(255,255,255,.7)',
//       'rgba(255,255,255,.8)',
//       'rgba(255,255,255,.9)'
//     ]
//     // ... and so on
//   }
// }

// import { ThemeProvider } from 'styled-components'
// import {
//   space,
//   width,
//   maxWidth,
//   fontSize,
//   textAlign,
//   color,
//   boxShadow
// } from 'styled-system'
