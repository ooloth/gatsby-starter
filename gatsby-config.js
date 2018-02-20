module.exports = {
  siteMetadata: {
    description: `Add site description (limit to 150 characters)`,
    // image: update siteImage variable in layouts/index.js
    language: `en`,
    locale: `en_CA`,
    title: `Add Site Title`,
    twitterHandle: `@pieczonka_a`,
    url: `https://www.site.com`,
    secondPage: {
      description: `Add second page description (limit to 150 characters)`,
      title: `Add Second Page Title`,
      url: `https://www.site.com/second`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-react-next`, // disable if using preact
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify` // must come last
  ],
  // I conditionally load my own Promise polyfill in gatsby-node.js
  polyfill: false
}
