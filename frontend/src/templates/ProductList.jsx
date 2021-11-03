import React from "react"

import Layout from "../components/ui/Layout"

const ProductList = ({ pageContext }) => {
  return (
    <Layout>
      <div>{pageContext.name}</div>
    </Layout>
  )
}

export default ProductList
