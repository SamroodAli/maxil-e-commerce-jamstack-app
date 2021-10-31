import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import Rating from "./Rating"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"

import frame from "../../images/product-frame-grid.svg"
import featuredAdornment from "../../images/featured-adornment.svg"
import explore from "../../images/explore.svg"

const useStyles = makeStyles(theme => ({
  productContainer: {
    margin: "5rem 0",
  },
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
    position: "absolute",
    zIndex: 1,
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24rem",
    transition: "transform 0.5s ease",
    padding: "1rem 2rem",
  },
  slideLeft: {
    transform: "translate(-24rem,0px)",
  },
  slideRight: {
    transform: "translate(24rem,0px)",
  },
  exploreContainer: {
    marginTop: "auto",
  },
  exploreButton: {
    textTransform: "none",
  },
  exploreIcon: {
    height: "1.5rem",
    marginLeft: "1rem",
  },
  chipLabel: {
    ...theme.typography.h5,
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const Featured = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(null)

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
          <Grid
            item
            container
            key={node.strapiId}
            justifyContent={alignment}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <IconButton
              classes={{ root: classes.frame }}
              onClick={() =>
                expanded === i ? setExpanded(null) : setExpanded(i)
              }
            >
              <img
                src={
                  process.env.GATSBY_STRAPI_API_URL +
                  node.variants[0].images[0].url
                }
                alt={node.name}
                className={classes.featured}
              />
            </IconButton>
            <Grid
              container
              direction="column"
              classes={{
                root: clsx(classes.slide, {
                  [classes.slideLeft]:
                    expanded === i && alignment === "flex-end",
                  [classes.slideRight]:
                    expanded === i &&
                    (alignment === "flex-start" || alignment === "center"),
                }),
              }}
            >
              <Grid item>
                <Typography variant="h4">{node.name.split(" ")[0]}</Typography>
                <Rating number={4} />
              </Grid>
              <Grid item>
                <Chip
                  classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                  label={`$${node.variants[0].price}`}
                />
              </Grid>
              <Grid item classes={{ root: classes.exploreContainer }}>
                <Button classes={{ root: classes.exploreButton }}>
                  <Typography variant="h5">Details</Typography>
                  <img
                    src={explore}
                    alt="go to product details"
                    className={classes.exploreIcon}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Featured
