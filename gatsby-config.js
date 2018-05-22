module.exports = {
  siteMetadata: {
    title: `Add Site Title (10-70 characters)`,
    description: `Add site description (70-160 characters)`,
    siteUrl: `https://www.site.com`,
    language: `en`,
    locale: `en_CA`,
    twitterHandle: `@handle`,
    facebookAppId: ``,
    // image: update siteImage variable in layouts/index.js
    secondPage: {
      title: `Add Second Page Title`,
      description: `Add second page description (50-300 characters)`,
      url: `https://www.site.com/second`
    }
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-webpack-bundle-analyzer`,
    //   options: {
    //     defaultSizes: `gzip`,
    //     disable: false,
    //     production: true
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: `./src/img/favicon.png`,
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       twitter: true,
    //       yandex: true,
    //       windows: true
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`, // must come before gatsby-plugin-offline
    //   options: {
    //     name: `Insert Site Title (max 45 characters)`,
    //     short_name: `Insert Short Title (max 12 characters)`,
    //     start_url: `/`,
    //     background_color: `#cd9d2c`,
    //     theme_color: `#cd9d2c`,
    //     display: `browser`, // use browser to enable share sheet, address bar
    //     icons: [
    //       // these file names don't need to be changed
    //       {
    //         src: `/favicons/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `/favicons/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `/favicons/apple-touch-icon.png`,
    //         sizes: `180x180`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `/favicons/favicon-16x16.png`,
    //         sizes: `16x16`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `/favicons/favicon-32x32.png`,
    //         sizes: `32x32`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `/favicons/mstile-150x150.png`,
    //         sizes: `150x150`,
    //         type: `image/png`
    //       }
    //     ]
    //   }
    // },
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-netlify`, // must come last
    //   options: {
    //     headers: {
    //       '/*.html': [`Cache-Control: public, max-age=0, must-revalidate`],
    //       '/*.js': [`Cache-Control: public, max-age=0, must-revalidate`],
    //       '/static/*': [`Cache-Control: public,max-age=31536000,immutable`],
    //       '/favicons/*': [`Cache-Control: public,max-age=31536000,immutable`]
    //     }
    //   }
    // }
  ]
}
