import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
    [theme.breakpoints.down("lg")]: {
      padding: "20rem 2rem 2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
  },
  productName: {
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      height: "25rem",
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "15rem",
    },
  },
  carouselContainer: {
    marginLeft: "20rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      height: "30rem",
    },
  },
  space: {
    margin: "0 15rem 10rem 15rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 8rem 10rem 8rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 6rem 10rem 6rem",
    },
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}))

const PromotionalProducts = () => {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

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
              alt={i}
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

  return (
    <Grid
      container
      justifyContent={matchesMD ? "space-around" : "space-between"}
      alignItems="center"
      classes={{ root: classes.mainContainer }}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h4" paragraph>
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
