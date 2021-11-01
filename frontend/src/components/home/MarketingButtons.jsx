import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import marketingAdornment from "../../images/marketing-adornment.svg"
import moreByUs from "../../images/more-by-us.svg"
import store from "../../images/store.svg"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50rem",
    width: "50rem",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("lg")]: {
      height: "40rem",
      width: "40rem",
      margin: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      height: "30rem",
      width: "30rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "25rem",
      width: "25rem",
      margin: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "20rem",
      margin: "2rem 0",

      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
  icon: {
    [theme.breakpoints.down("md")]: {
      height: "9rem",
      width: "9em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      width: "8rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      width: "5rem",
    },
  },

  label: {
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.25rem",
    },
  },
  marketingContainer: {
    margin: "15rem 0",
  },
}))

const MarketingButtons = () => {
  const classes = useStyles()
  const buttons = [
    { label: "Store", icon: store, link: "/hoodies" },
    {
      label: "More by us",
      icon: moreByUs,
      href: "https://github.com/SamroodAli?tab=repositories",
    },
  ]

  return (
    <Grid
      container
      justifyContent="space-around"
      classes={{ root: classes.marketingContainer }}
    >
      {buttons.map(button => (
        <Grid item key={button.label}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            classes={{ root: classes.button }}
            component={button.link ? Link : "a"}
            to={button.link}
            href={button.href}
          >
            <Grid item>
              <img
                className={classes.icon}
                src={button.icon}
                alt={button.label}
              />
            </Grid>
            <Grid item>
              <Typography variant="h1" classes={{ root: classes.label }}>
                {button.label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default MarketingButtons
