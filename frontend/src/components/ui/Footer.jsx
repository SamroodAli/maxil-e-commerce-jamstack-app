import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
    },
    padding: "1rem",
  },
  linkColumn: {
    width: "20rem",
  },
  link: {
    color: theme.palette.common.white,
    fontSize: "1.25rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
  },
  footerLinkHeader: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
    },
  },
  spacer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 1rem",
    },
  },
  "@global": {
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const matchesMD = useMediaQuery("(max-width:1168px)")

  const socialMedia = [
    { icon: facebook, alt: "facebook", link: "https://facebook.com" },
    { icon: twitter, alt: "twitter", link: "https://twitter.com" },
    { icon: instagram, alt: "instagram", link: "https://instagram.com" },
  ]

  const routes = {
    "Contact Us": [
      { label: "(555) 555-5555", href: "tel:(555) 555-5555" },
      { label: "samrood.kl@gmail.com", href: "mailto:samrood.kl@gmail.com" },
    ],
    "Customer Service": [
      { label: "Contact Us", link: "/contact" },
      { label: "My account", link: "/account" },
    ],
    "Privacy Policy": [
      {
        label: "Privacy Policy",
        link: "/privary-policy",
      },
      {
        label: "Terms and conditions",
        link: "/terms-conditions",
      },
    ],
  }

  return (
    <footer className={classes.footer}>
      <Grid
        container
        justifyContent="space-between"
        direction={matchesMD ? "column" : "row"}
      >
        <Grid item classes={{ root: classes.linkContainer }}>
          <Grid item container>
            {Object.entries(routes).map(([category, routes]) => (
              <Grid
                key={category}
                item
                container
                direction="column"
                classes={{ root: classes.linkColumn }}
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    classes={{ root: classes.footerLinkHeader }}
                  >
                    {category}
                  </Typography>
                </Grid>
                {routes.map(({ label, link, href }) => (
                  <Grid item key={label}>
                    <Typography
                      variant="body1"
                      className={classes.link}
                      component={link ? Link : "a"}
                      to={link ? link : undefined}
                      href={href ? href : undefined}
                    >
                      {label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction={matchesMD ? "row" : "column"}
          >
            {socialMedia.map(({ icon, alt, link }) => (
              <Grid item key={alt}>
                <IconButton
                  disableRipple
                  classes={{ root: classes.icon }}
                  component="a"
                  href={link}
                >
                  <img src={icon} alt={alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
