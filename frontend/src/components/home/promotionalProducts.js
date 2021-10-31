import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

import promoAdornment from "../../images/promo-adornment.svg"
import expore from "../../images/explore.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70rem",
    padding: "30rem 10rem 10rem 10rem",
  },
  productName: {
    color: "#fff",
  },
}))

const PromotionalProducts = () => {
  const classes = useStyles()

  const [selectedSlide, setSelectedSlide] = useState(0)

  const data = useStaticQuery(graphql`
    query PromotionalProductsQuery {
      allStrapiProducts(filter: { promo: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            description
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  const slides = data.allStrapiProducts.edges.map(({ node }, i) => ({
    key: i,
    description: node.description,
    content: (
      <Grid container direction="column">
        <Grid item>
          <IconButton disableRipple>
            <img src={node.variants[0].images[0].url} alt={`image-${i}`} />
          </IconButton>
        </Grid>
        <Grid item>
          {selectedSlide === i && (
            <Typography variant="h1" classes={{ root: classes.productName }}>
              {node.name}
            </Typography>
          )}
        </Grid>
      </Grid>
    ),
  }))

  console.log(data)
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item>{slides[selectedSlide].description}</Grid>
    </Grid>
  )
}

export default PromotionalProducts
