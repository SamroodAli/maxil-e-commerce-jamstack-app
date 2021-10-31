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
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  carouselImage: {
    height: "30rem",
    width: "25rem",
    backgroundColor: "#fff",
    borderRadius: 20,
    boxShadow: theme.shadows[5],
  },
  carouselContainer: {
    marginLeft: "20rem",
  },
  space: {
    margin: "0 15rem",
    marginBottom: "10rem",
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
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
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <IconButton
            onClick={() => setSelectedSlide(i)}
            disableRipple
            classes={{
              root: clsx(classes.iconButton, {
                [classes.space]: selectedSlide !== i,
              }),
            }}
          >
            <img
              src={
                process.env.GATSBY_STRAPI_API_URL +
                node.variants[0].images[0].url
              }
              alt={`image-${i}`}
              className={classes.carouselImage}
            />
          </IconButton>
        </Grid>
        <Grid item>
          {selectedSlide === i && (
            <Typography variant="h1" classes={{ root: classes.productName }}>
              {node.name.split(" ")[0]}
            </Typography>
          )}
        </Grid>
      </Grid>
    ),
  }))

  console.log(data)
  console.log(process.env.GATSBY_STRAPI_API_URL)
  console.log(process.env)
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}
        </Typography>
        <Button>
          <Typography variant="h4" classes={{ root: classes.explore }}>
            Explore
          </Typography>
          <img src={expore} alt="explore" />
        </Button>
      </Grid>
    </Grid>
  )
}

export default PromotionalProducts
