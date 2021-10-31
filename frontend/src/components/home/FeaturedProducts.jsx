import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"

import frame from "../../images/product-frame-grid.svg"
import featuredAdornment from "../../images/featured-adornment.svg"

console.log(featuredAdornment)
const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "180rem",
    padding: "0 2.5rem",
  },
  featured: {
    height: "20rem",
    width: "20rem",
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    height: "24rem",
    width: "24rem",
    boxSizing: "border-box",
    boxShadow: theme.shadows[5],
  },
}))

const Featured = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allStrapiProducts(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.background }}
      justifyContent="center"
    >
      {data.allStrapiProducts.edges.map(({ node }, i) => {
        let alignment
        if (i === 0 || i === 3) {
          alignment = "flex-start"
        } else if (i === 1 || i === 4) {
          alignment = "center"
        } else {
          alignment = "flex-end"
        }
        return (
          <Grid item container key={node.strapiId} justifyContent={alignment}>
            <Grid item>
              <IconButton classes={{ root: classes.frame }}>
                <img
                  src={
                    process.env.GATSBY_STRAPI_API_URL +
                    node.variants[0].images[0].url
                  }
                  alt={node.name}
                  className={classes.featured}
                />
              </IconButton>
              <Grid container direction="column"></Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Featured
