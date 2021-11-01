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
    height: "35rem",
    width: "35rem",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  marketingLabels: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    marginTop: "1rem",
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
              <img src={button.icon} alt={button.label} />
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                classes={{ root: classes.marketingLabels }}
              >
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
