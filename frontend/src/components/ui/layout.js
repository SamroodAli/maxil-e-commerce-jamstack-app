import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query GetCategories {
      allStrapiCategories {
        edges {
          node {
            name
            strapiId
          }
        }
      }
    }
  `)

  return (
    <>
      <Header categories={data.allStrapiCategories.edges} />
      <div style={{ marginBottom: "10rem" }}></div>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
