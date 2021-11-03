import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/ui/Layout"
import DynamicToolbar from "../components/product-list/DynamicToolbar"
import DescriptionContainer from "../components/product-list/DescriptionContainer"

const ProductList = ({ pageContext: { filterOptions, name, description } }) => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar filterOptions={filterOptions} />
        <DescriptionContainer name={name} description={description} />
      </Grid>
    </Layout>
  )
}

export default ProductList
