// Environment variables (for Firebase)

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// })

///////////////////////////////////////////////////////////////////////////////////

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: [
              /intersection-observer/,
              /lightbox-react/,
              /react-image-lightbox/,
              /twitter-fetcher/,
            ],
            loader: `null-loader`,
          },
        ],
      },
    })
  }
}

///////////////////////////////////////////////////////////////////////////////////

// See: https://www.gatsbyjs.org/tutorial/part-seven/
// See: https://www.gatsbyjs.org/docs/debugging-async-lifecycles/

exports.createPages = async function({ actions, graphql }) {
  // TODO: update `allTemplateYaml` to correct file name
  await graphql(`
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
    result.data.allTemplateYaml.edges.forEach(edge => {
      actions.createPage({
        path: edge.node.slug,
        // TODO: update `Template.js` to correct file name
        component: require.resolve(`./src/ui/@ex-templates/Template.js`),
        context: {
          slug: edge.node.slug, // this variable will be available in query
        },
      })
    })
  })
}
