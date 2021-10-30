import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  linkColumn: {
    width: "20rem",
  },
  "@global": {
    body: {
      margin: 0,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid item container>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Contact Us</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">(555) 555-5555</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">samrood.kl@gmail.com</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Customer service</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Contact us</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">samrood.kl@gmail.com</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              classes={{ root: classes.linkColumn }}
            >
              <Grid item>
                <Typography variant="h5">Information</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Privacy policy</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Terms and conditions</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <img src={facebook} alt="Facebook" />
            </Grid>
            <Grid item>
              <img src={twitter} alt="twitter" />
            </Grid>
            <Grid item>
              <img src={instagram} alt="instagram" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer