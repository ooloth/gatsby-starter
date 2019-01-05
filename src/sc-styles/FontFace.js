import { createGlobalStyle } from 'styled-components'

const FontFace = createGlobalStyle`
  /* news-cycle-regular - latin-ext_latin */
  /* @font-face {
    font-family: 'News Cycle';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('News Cycle'), local('NewsCycle'),
        url('../fonts/news-cycle-v14-latin-ext_latin-regular.woff2') format('woff2'),
        url('../fonts/news-cycle-v14-latin-ext_latin-regular.woff') format('woff');
  } */
`

export default FontFace

/*

INSTRUCTIONS:

1. Make the path to the fonts directory `../fonts/font-files.woff`
2. Include specific entries for "font-style: italic", "font-weight: 700", etc so the browser doesn't fake these missing styles because it doesn't realize I have a webfont for it: https://www.smashingmagazine.com/2018/07/smashingconf-videos-web-fonts-performance/

*/
