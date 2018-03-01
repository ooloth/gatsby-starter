module.exports = {
  siteMetadata: {
    description: `Add site description (50-300 characters)`,
    // image: update siteImage variable in layouts/index.js
    language: `en`,
    locale: `en_CA`,
    title: `Add Site Title (under 60 characters)`,
    twitterHandle: `@handle`,
    siteUrl: `https://www.site.com`,
    secondPage: {
      description: `Add second page description (50-300 characters)`,
      title: `Add Second Page Title`,
      url: `https://www.site.com/second`
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
        onError: error => console.log(error)
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        defaultSizes: `gzip`,
        // disable: true,
        production: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
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
