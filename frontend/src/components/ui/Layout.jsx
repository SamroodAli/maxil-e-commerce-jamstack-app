import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({
  spacer: {
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
    },
  },
}))

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

  const classes = useStyles()
  return (
    <>
      <Header categories={data.allStrapiCategories.edges} />
      <div className={classes.spacer}></div>
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
