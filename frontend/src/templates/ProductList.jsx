import React from "react"
import Grid from "@material-ui/core/Grid"
import { graphql } from "gatsby"

import Layout from "../components/ui/Layout"
import DynamicToolbar from "../components/product-list/DynamicToolbar"
import ListOfProducts from "../components/product-list/ListOfProducts"

const ProductList = ({
  pageContext: { filterOptions, name, description },
  data: {
    allProducts: { products },
  },
}) => {
  console.log(products)
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
        <ListOfProducts products={products} />/
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allProducts: allStrapiProducts(filter: { category: { id: { eq: $id } } }) {
      products: edges {
        node {
          strapiId
          name
          variants {
            color
            id
            price
            size
            style
            images {
              url
            }
          }
        }
      }
    }
  }
`

export default ProductList
