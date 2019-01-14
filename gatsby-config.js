// Variables for gatsby-plugin-robots-txt:
// const {
//   NODE_ENV,
//   URL: NETLIFY_SITE_URL = `https://www.example.com`,
//   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
//   CONTEXT: NETLIFY_ENV = NODE_ENV
// } = process.env
// const isNetlifyProduction = NETLIFY_ENV === `production`
// const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    // TODO: delete unused lines (or give a value of ``)
    title: `Site Title (10-70 characters)`,
    jobTitle: `What they do (if not included in the site title)`,
    description: `Site description (70-160 characters)`,
    siteUrl: `https://www.client.com`, // no trailing slash
    lang: `en`,
    locale: `en_CA`,
    email: `email@client.com`,
    telephone: `+18001234567`,
    address: {
      street: `305 Healey Rd., Unit A`,
      locality: `Toronto`,
      region: `ON`,
      postalCode: `L7# 5C1`,
      country: `CA`
    },
    socialLinks: [
      `https://www.youtube.com/user`,
      `https://twitter.com/user`,
      `https://www.facebook.com/user`,
      `https://www.instagram.com/user`,
      `https://medium.com/user`,
      `https://github.com/user`
    ],
    structuredDataType: `LocalBusiness`, // or Person
    twitterSite: `@handle`,
    twitterCreator: `@ooloth`,
    facebookAppId: ``,
    secondPage: {
      title: `Add Second Page Title`,
      description: `Add second page description (50-300 characters)`,
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
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     /*
    //      * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
    //      * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
    //      */
    //     baseUrl: 'www.psrbrokerage.com',
    //     // The protocol. This can be http or https.
    //     protocol: 'https',
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the assumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    //     // This feature is untested for sites hosted on wordpress.com.
    //     // Defaults to true.
    //     useACF: false,
    //     // Include specific ACF Option Pages that have a set post ID
    //     // Regardless if an ID is set, the default options route will still be retrieved
    //     // Must be using V3 of ACF to REST to include these routes
    //     // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
    //     // routes with the ID option_page_1 and option_page_2
    //     // Dashes in IDs will be converted to underscores for use in GraphQL
    //     // acfOptionPageIds: [],
    //     // auth: {
    //     //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
    //     //   // to access endpoints that are protected with .htaccess.
    //     //   htaccess_user: "your-htaccess-username",
    //     //   htaccess_pass: "your-htaccess-password",
    //     //   htaccess_sendImmediately: false,

    //     //   // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
    //     //   // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
    //     //   jwt_user: process.env.JWT_USER,
    //     //   jwt_pass: process.env.JWT_PASSWORD,
    //     // },
    //     // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
    //     // It can help you debug specific API Endpoints problems.
    //     // verboseOutput: false,
    //     // Set how many pages are retrieved per API request.
    //     perPage: 100,
    //     // Search and Replace Urls across WordPress content.
    //     // searchAndReplaceContentUrls: {
    //     //   sourceUrl: "https://source-url.com",
    //     //   replacementUrl: "https://replacement-url.com",
    //     // },
    //     // Set how many simultaneous requests are sent at once.
    //     concurrentRequests: 10,
    //     // Set WP REST API routes whitelists
    //     // and blacklists using glob patterns.
    //     // Defaults to whitelist the routes shown
    //     // in the example below.
    //     // See: https://github.com/isaacs/minimatch
    //     // Example:  `["/*/*/comments", "/yoast/**"]`
    //     // ` will either include or exclude routes ending in `comments` and
    //     // all routes that begin with `yoast` from fetch.
    //     // Whitelisted routes using glob patterns
    //     includedRoutes: [
    //       '**/*/*/categories',
    //       '**/*/*/posts',
    //       '**/*/*/pages',
    //       '**/*/*/media',
    //       '**/*/*/tags',
    //       '**/*/*/taxonomies',
    //       '**/*/*/users'
    //     ],
    //     // Blacklisted routes using glob patterns
    //     excludedRoutes: ['**/*/*/posts/1456']
    //   }
    // },
    // `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-svgr`
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   // Disable crawlers for Netlify deploy-previews:
    //   options: {
    //     resolveEnv: () => NETLIFY_ENV,
    //     env: {
    //       production: {
    //         policy: [{ userAgent: `*` }]
    //       },
    //       'branch-deploy': {
    //         policy: [{ userAgent: `*`, disallow: [`/`] }],
    //         sitemap: null,
    //         host: null
    //       },
    //       'deploy-preview': {
    //         policy: [{ userAgent: `*`, disallow: [`/`] }],
    //         sitemap: null,
    //         host: null
    //       }
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `J. Patrick Raftery`,
    //     short_name: `JP Raftery`,
    //     start_url: `/`,
    //     // For splash screen when app launches:
    //     background_color: `#3047ff`,
    //     // For tool bar and task switcher:
    //     theme_color: `#3047ff`,
    //     display: `minimal-ui`,
    //     // Multiple icons will be generated for various devices.
    //     // Multiple favicons will be generated and added to each HTML page.
    //     // This path is relative to the root of the site.
    //     icon: `src/images/favicon.png`
    //   }
    // },
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'TRACKING_CODE_HERE',
    //     head: true, // Puts tracking script in the head instead of the body
    //     anonymize: true, // Setting this parameter is optional
    //     respectDNT: true // Setting this parameter is also optional
    //   }
    // },
    // `gatsby-plugin-netlify-cache`,
    // {
    //   resolve: `gatsby-plugin-netlify`, // must come last
    //   options: {
    //     headers: {
    //        // First one is required for the HSTS list:
    //       '/*': [
    //        `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
    //      ],
    //       '/*.html': [`Cache-Control: public, max-age=0, must-revalidate`],
    //       '/*.js': [`Cache-Control: public, max-age=0, must-revalidate`],
    //       '/sw.js': [`Cache-Control: max-age=0, no-cache, no-store, must-revalidate`],
    //       '/icons/*': [`Cache-Control: public,max-age=31536000,immutable`],
    //       '/static/*': [`Cache-Control: public,max-age=31536000,immutable`],
    //       '/subfont/*': [`Cache-Control: public,max-age=31536000,immutable`]
    //     }
    //   }
    // },
    // `gatsby-plugin-subfont`
  ]
}
