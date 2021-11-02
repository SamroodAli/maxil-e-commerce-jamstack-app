import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import clsx from "clsx"

import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import Email from "../images/EmailAdornment"
import send from "../images/send.svg"

import Layout from "../components/ui/Layout"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "40rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
  },
  formContainer: {
    height: "100%",
  },
  formWrapper: {
    height: "100%",
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
  },
  sendButton: {
    textTranform: "none",
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
      >
        {/* Contact form */}
        <Grid item classes={{ root: classes.formWrapper }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            classes={{ root: classes.formContainer }}
          >
            <Grid
              item
              classes={{
                root: clsx(classes.titleContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid item>
              <Button classes={{ root: classes.sendButton }}>
                <Typography
                  variant="h4"
                  classes={{
                    root: clsx(classes.buttonContainer, classes.blockContainer),
                  }}
                >
                  Send message
                  <img
                    src={send}
                    className={classes.sendIcon}
                    alt="send message"
                  />
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Info */}
        <Grid item>
          <Grid container direction="column">
            <Grid item container alignItems="center">
              <Grid item>
                <img
                  className={classes.contactIcon}
                  src={address}
                  alt="address"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  1234 S Example St Wichita, KS 676111
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <img className={classes.contactIcon} src={phone} alt="phone" />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.contactEmailIcon }}>
                <Email color="#fff" />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  samrood.kl@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
