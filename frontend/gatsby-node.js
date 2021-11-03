/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, action }) => {
  const { createPage } = action

  const results = await graphql(
    `
      query pageQuery {
        products: allStrapiProducts {
          edges {
            node {
              name
              strapiId
            }
          }
        }
        categories: allStrapiCategories {
          edges {
            node {
              strapiId
              name
              description
            }
          }
        }
      }
    `
  )

  const products = results.data.products.edges
  const categories = results.data.categories.edges

  // products.forEach(product => {
  //   createPage({
  //     path:`/${p}`,
  //     component:,
  //     context:{}
  //   })
  // })

  // categories.forEach(category => {
  //   createPage({
  //     path:`/${category.node.name.toLowerCase()}`,
  //     component:,
  //     context:{}
  //   })
  // })
}
