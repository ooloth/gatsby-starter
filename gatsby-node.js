/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const ExtractTextPlugin = require(`extract-text-webpack-plugin`)

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
  case `develop`:
    // Remove default loaders
    config.removeLoader(`css`)
    config.removeLoader(`less`)
    config.removeLoader(`sass`)
    config.removeLoader(`cssModules`)
    config.removeLoader(`lessModules`)
    config.removeLoader(`sassModules`)

    // Remove postcss from Gatsby's dev process and ignore partials
    config.loader(`css`, {
      test: /\.css$/,
      exclude: [
        /src\/styles\/components/,
        /src\/styles\/fonts/,
        /src\/styles\/plugins/,
        /src\/styles\/reset/,
        /src\/styles\/supports/,
        /src\/styles\/utilities/
      ],
      loaders: [`style`, `css`]
    })

    break

  case `build-css`:
    // Remove default loaders
    config.removeLoader(`css`)
    config.removeLoader(`less`)
    config.removeLoader(`sass`)
    config.removeLoader(`cssModules`)
    config.removeLoader(`lessModules`)
    config.removeLoader(`sassModules`)

    // Remove postcss from Gatsby's build process and ignore partials
    config.loader(`css`, {
      test: /\.css$/,
      exclude: [
        /src\/styles\/base/,
        /src\/styles\/builds\/after-postcss/,
        /src\/styles\/components/,
        /src\/styles\/plugins/,
        /src\/styles\/reset/,
        /src\/styles\/supports/,
        /src\/styles\/utilities/
      ],
      loader: ExtractTextPlugin.extract([`css?minimize`])
    })

    break

  case `build-html`:
    // Ignore packages that causes errors during build because they refer to the document/window (make test an array if > 1):
    config.loader(`null`, {
      test: [
        /intersection-observer/,
        /lightbox-react/,
        // /react-flickity-component/,
        /react-image-lightbox/,
        /twitter-fetcher/
      ],
      loader: `null-loader`
    })

    break
  }
  return config
}

/*
 *
 * Generate Template pages programmatically from template.yaml
 * 
 */

// See: https://www.gatsbyjs.org/tutorial/part-seven/
// See: https://stackoverflow.com/questions/48652257/how-to-create-multiple-pages-from-single-json-files-in-gatsby

const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

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
