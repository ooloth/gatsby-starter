/* eslint-disable jsx-a11y/accessible-emoji */
function StyledCompExample(props) {
  return (
    <Section container {...props}>
      <Content shadow bg="purple2">
        <Heading>Custom Grid Example</Heading>
        <Text>This example uses grid for all spacing.</Text>
        <Things things={things} />
        <Paragraphs paragraphs={paragraphs} />
        <Button>Press Me</Button>
      </Content>
    </Section>
  )
}

const Content = styled(Box)`
  display: grid;
  grid-row-gap: var(--s5);
  justify-items: center;
  padding: var(--s8) var(--s5);
  text-align: center;
`

///////////////////////////////////////////////////////////////////////////////////

function Things({ things }) {
  return (
    <Thingies bg="pink1">
      {things.map(thing => (
        <Item key={thing.content} ga={thing.ga} bg={thing.bg && thing.bg}>
          {thing.content}
        </Item>
      ))}
    </Thingies>
  )
}

const Thingies = styled(List)`
  display: grid;
  grid:
    '.  .  .' var(--s2)
    '🍕 🍕 .' auto
    '.  .  .' var(--s5)
    '.  🌮 🌮' auto
    / 1fr 1fr 1fr;
  justify-self: stretch;

  ${media.lg`
    grid:
      '.  .  .' var(--s5)
      '.  🌮 🌮' auto
      '.  .  .' var(--s2)
      '🍕 🍕 .' auto
      / 5fr 1fr 1fr;
  `}
`

const things = [
  { ga: `🍕`, content: `🍕`, bg: `pink3` },
  { ga: `🌮`, content: `🌮`, bg: `gray4` }
]

///////////////////////////////////////////////////////////////////////////////////

function Paragraphs({ paragraphs }) {
  return (
    <Article>
      <Heading as="h3" small>
        Paragraphs (using grid-gap for spacing)
      </Heading>

      {paragraphs.map(paragraph => (
        <Text key={paragraph}>{paragraph}</Text>
      ))}
    </Article>
  )
}

const Article = styled.article`
  display: grid;
  grid-row-gap: var(--s4);
`

const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At molestias porro unde ullam esse dolorum ipsa quidem laborum rem suscipit aliquam, modi est, eum incidunt minus libero tempore velit aspernatur.`,
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum pariatur officiis adipisci amet ducimus sint minima sapiente quos. Explicabo architecto minima asperiores ratione dolorum in, nihil voluptatem consectetur omnis quidem?`
]

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import { Box, Button, Heading, Item, List, Section, Text } from '../../elements'
import { media } from '../../../styles'

export default StyledCompExample

//
//
//
//
//

// const Inner = styled.div`
//   box-shadow: var(--shadow5);
//   background-color: var(--purple3);
//   padding: var(--s9) var(--s6);
//   text-align: center;

//   ${media.md`
//     background-color: var(--purple2)
//   `}
// `

// const Heading = styled.h2`
//   margin-bottom: var(--s6);
// `

// const List = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
//   grid-gap: var(--s6);
// `

// function StyledSystemExample() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container as="section" pt={6}>
//         <Box
//           boxShadow={3}
//           bg="near-white"
//           py={5}
//           px={3}
//           textAlign="center"
//           color="blacks.10"
//         >
//           <Heading>Styled System Example</Heading>
//           <SSList>
//             <Item href="https://google.ca" white />
//             <Item href="https://google.ca" />
//           </SSList>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }

// const Box = styled.div`
//   ${display}
//   ${space}
//   ${width}
//   ${maxWidth}
//   ${textAlign}
//   ${fontSize}
//   ${color}
//   ${boxShadow}
// `

// const Container = props => {
//   return <Box mx="auto" px={[3, 4]} maxWidth={7} {...props} />
// }

// const SSList = styled(Box)`
//   color: red;
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
//   display,
//   space,
//   width,
//   maxWidth,
//   fontSize,
//   textAlign,
//   color,
//   boxShadow
// } from 'styled-system'

//
//
//
//
//
//

// function LayupExample() {
//   return (
//     <Section container>
//       <Inner>
//         <Heading>Layup Example</Heading>

//         <FoodLayout
//           areas={{
//             '🍕': <Pizza />,
//             '🌮': <Tacos />,
//             '🍜': <Ramen />
//           }}
//         />
//       </Inner>
//     </Section>
//   )
// }

// const FoodLayout = styled(Layout)`
//   grid-template-areas:
//     '🍕 🍕 .'
//     '.  🌮 .'
//     '.  . 🍜';

//   ${media.lg`
//     grid-template-areas:
//       '🍕 . .'
//       '.  🌮 .'
//       '.  . 🍜';
//   `}
// `

// const Pizza = props => (
//   <span role="img" aria-label="pizza" style={{ backgroundColor: `red` }} {...props}>
//     🍕
//   </span>
// )

// const Tacos = props => (
//   <span role="img" aria-label="tacos" {...props}>
//     🌮
//   </span>
// )

// const Ramen = props => (
//   <span role="img" aria-label="ramen" {...props}>
//     🍜
//   </span>
// )

// import Layout from 'layup/styled'

//
//
//
//
//
//
//
//
