import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import cta from "../../images/cta.svg"

const useStyles = makeStyles(theme => ({
  account: {
    color: "#fff",
    marginLeft: "2rem",
  },
  body: {
    maxWidth: "45rem",
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  headingContainer: {
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  heading: {
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  container: {
    marginBottom: "15rem",
  },
  buttonContainer: {
    marginTop: "3rem",
  },
  icon: {
    [theme.breakpoints.down("xs")]: {
      height: "18rem",
      width: "90vw",
    },
  },
}))

const CallToAction = () => {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      classes={{ root: classes.container }}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid item>
        <img src={cta} className={classes.icon} alt="quality committed" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item classes={{ root: classes.headingContainer }}>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h1"
              classes={{ root: classes.heading }}
            >
              Committed to Quality
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.body }}>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
            >
              At Maxil, our mission is to provide comfortable, durable, premium,
              designer clothing and clothing accessories to developer and
              technology enthusiasts.
            </Typography>
          </Grid>
          <Grid
            item
            container
            classes={{ root: classes.buttonContainer }}
            justifyContent={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/contact"
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to={"/account"}
                classes={{ root: classes.account }}
              >
                Create account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CallToAction
