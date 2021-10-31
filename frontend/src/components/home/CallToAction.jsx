import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import cta from "../../images/cta.svg"

const useStyles = makeStyles(theme => ({
  account: {
    color: "#fff",
    marginLeft: "2rem",
  },
  body: {
    maxWidth: "45rem",
  },
  container: {
    marginBottom: "15rem",
  },
  buttonContainer: {
    marginTop: "3rem",
  },
}))

const CallToAction = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={cta} alt="quality committed" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">Committed to Quality</Typography>
          </Grid>
          <Grid item classes={{ root: classes.body }}>
            <Typography variant="body1">
              at MAXIL, our mission is to provide comfortable, durable, premium,
              designer clothing and clothing accessories to developer and
              technology enthusiasts.
            </Typography>
          </Grid>
          <Grid item container classes={{ root: classes.buttonContainer }}>
            <Grid item>
              <Button variant="outlined" color="primary">
                Contact Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
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
