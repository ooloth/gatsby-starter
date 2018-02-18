module.exports = {
  siteMetadata: {
    title: `Insert Title`
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
  ]
}
