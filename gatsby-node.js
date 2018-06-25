/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
//   const PRODUCTION = stage !== `develop`
//   const isSSR = stage.includes(`html`)

//   // See: https://github.com/webpack-contrib/css-loader#options
//   const cssLoader = {
//     loader: path.resolve(`css-loader`),
//     options: {
//       importLoaders: 1,
//       sourceMap: !PRODUCTION
//     }
//   }

//   const postcssLoader = {
//     loader: path.resolve(`postcss-loader`),
//     plugins: [
//       require(`precss`),
//       require(`tailwindcss`)(`./src/styles/tailwind.js`),
//       require(`autoprefixer`)()
//     ]
//   }

//   const purgecssLoader = PRODUCTION ? {
//     loader: ,
//     content: [`public/index.html`, `src/**/*.js`],
//   // css: [`src/styles/builds/after-postcss/output.css`],
//   extractors: [
//     {
//       // custom extractor to allow special characters in class names (see: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss)
//       extractor: class {
//         static extract(content) {
//           return content.match(/[A-z0-9-:/]+/g) || []
//         }
//       },
//       extensions: [`html`, `js`]
//     }
//   ],
//   whitelist: [`carousel-cell`, `cursor-not-allowed`, `filter-label`, `o-50`],
//   // Add plugin prefixes here:
//   whitelistPatterns: [
//     /body/,
//     /flickity/,
//     /headroom/,
//     /ReactModal/,
//     /ril/,
//     /slick/,
//     /textarea/
//   ]
//   } : null

//   const cssRule = {
//     test: /\.css$./,
//     exclude: [
//       /src\/styles\/components/,
//       /src\/styles\/fonts/,
//       /src\/styles\/plugins/,
//       /src\/styles\/reset/,
//       /src\/styles\/supports/,
//       /src\/styles\/utilities/
//     ],
//     // NOTE: the loaders run from last to first...
//     use: isSSR
//       ? [loaders.null()]
//       : [loaders.miniCssExtract(), cssLoader, postcssLoader, purgecssLoader]
//   }

//   actions.setWebpackConfig({
//     module: {
//       rules: cssRule
//     }
//     // TODO: enable absolute imports after I figure out how to make Path Intellisense work with it...
//     // See: https://next.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports
//     // resolve: {
//     //   modules: [path.resolve(__dirname, `src`), `node_modules`]
//     // }
//   })
// }

// const ExtractTextPlugin = require(`extract-text-webpack-plugin`)

exports.onCreateWebpackConfig = ({ actions, stage, rules, plugins, loaders }) => {
  // const PRODUCTION = stage !== `develop`
  // const isSSR = stage.includes(`html`)

  // Enable CSS source maps in development
  // See: https://github.com/webpack-contrib/css-loader#options
  // const cssLoader = {
  //   loader: path.resolve(`css-loader`),
  //   options: {
  //     sourceMap: !PRODUCTION
  //   }
  // }

  // Cancel out webpack postcss plugins
  // const postcssLoader = { loader: path.resolve(`postcss-loader`), plugins: null }

  // Ignore partial CSS files at each stage
  // const cssRule = {
  //   test: /\.css$./,
  //   exclude: [
  //     /src\/styles\/base/,
  //     /src\/styles\/components/,
  //     /src\/styles\/plugins/,
  //     /src\/styles\/supports/,
  //     /src\/styles\/utilities/,
  //     PRODUCTION && /src\/styles\/builds\/after-postcss/
  //   ],
  //   // NOTE: the loaders run from last to first...
  //   use: [loaders.miniCssExtract(), `style`, cssLoader, postcssLoader]
  // }

  // Ignore problematic packages during build
  const nullRule = stage === `build-html` && {
    test: [
      /intersection-observer/,
      /lightbox-react/,
      /react-image-lightbox/,
      /twitter-fetcher/
    ],
    loader: `null-loader`
  }

  let configRules = []

  switch (stage) {
  case `build-html`:
    configRules = configRules.concat([{ ...nullRule }])
    break

    // default:
    //   configRules = configRules.concat([{ ...cssRule }])
    //   break
  }

  // console.log(`configRules`, configRules)

  // Update Webpack rules
  actions.setWebpackConfig({
    module: {
      rules: configRules
    }
  })
}

/*
 *
 * Generate Template pages programmatically from template.yaml
 * 
 */

// See: https://www.gatsbyjs.org/tutorial/part-seven/
// See: https://stackoverflow.com/questions/48652257/how-to-create-multiple-pages-from-single-json-files-in-gatsby

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // TODO: update `allTemplateYaml` to correct file name
    graphql(`
      {
        allTemplateYaml {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      // TODO: update `allTemplateYaml` to correct file name
      result.data.allTemplateYaml.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          // TODO: update `template.js` to correct file name
          component: path.resolve(`src/templates/template.js`),

          // Send additional data to page from YAML (or query inside template)
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })
}
