import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/ui/Layout"
import DynamicToolbar from "../components/product-list/DynamicToolbar"

const ProductList = ({ pageContext }) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar />
      </Grid>
    </Layout>
  )
}

export default ProductList
