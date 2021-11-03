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
              category {
                name
              }
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

  if (results.errors) {
    throw results.errors
  }

  const products = results.data.products.edges
  const categories = results.data.categories.edges

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.toLowerCase()}/${encodeURIComponent(
        product.node.name.split(" ")[0]
      )}`,
      component: require.resolve("./src/templates/ProductDetail.jsx"),
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/ProductList.jsx"),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
      },
    })
  })
}
