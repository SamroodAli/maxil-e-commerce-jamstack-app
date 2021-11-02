import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"

import Drawer from "./Drawer"
import Tabs from "./HeaderTabs"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import cart from "../../images/cart.svg"
import search from "../../images/search.svg"
import menu from "../../images/menu.svg"
import account from "../../images/account-header.svg"

import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => {
  return {
    coloredIndicator: {
      backgroundColor: "#fff",
    },
    appBar: {
      marginTop: "1rem",
    },
    logo: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.5rem",
      },
    },
    logoText: {
      color: theme.palette.common.offBlack,
    },
    logoContainer: {
      [theme.breakpoints.down("md")]: {
        marginRight: "auto",
      },
    },
    icon: {
      height: "3rem",
      width: "3rem",
      padding: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0.4rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "2rem",
        width: "2rem",
        padding: "0.3rem",
      },
    },
    iconButton: {
      [theme.breakpoints.down("xs")]: {
        padding: "0.25rem",
      },
    },

    // "@global": {
    //   ".MuiTypography-h1": {
    //     fontSize: "30rem",
    //   },
    // },
  }
})

const Header = ({ categories }) => {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState(false)
  // use media query below 1000px
  const matchesMD = useMediaQuery("(max-width:1200px)")

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  const activeIndex = () => {
    const found = routes.indexOf(
      routes.filter(
        ({ node: { link, name } }) =>
          (link || `/${name.toLowerCase()}`) === window.location.pathname
      )[0]
    )
    return found === -1 ? false : found
  }

  const actions = [
    {
      icon: search,
      alt: "search",
      visible: true,
    },
    {
      icon: cart,
      alt: "cart",
      visible: true,
      link: "/cart",
      onClick: () => navigate("/cart"),
    },
    {
      icon: account,
      alt: "account",
      visible: !matchesMD,
      link: "/account",
      onClick: () => navigate("/account"),
    },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="static"
      classes={{ root: classes.appBar }}
    >
      <Toolbar disableGutters={matchesMD}>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1" classes={{ root: classes.logo }}>
            <span className={classes.logoText}>MAX</span>IL
          </Typography>
        </Button>
        {matchesMD ? (
          <Drawer
            activeIndex={activeIndex()}
            routes={routes}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        ) : (
          <Tabs routes={routes} value={activeIndex()} />
        )}
        {actions.map(action =>
          action.visible ? (
            <IconButton
              classes={{ root: classes.iconButton }}
              key={action.alt}
              onClick={action.onClick}
            >
              <img
                className={classes.icon}
                src={action.icon}
                alt={action.alt}
              />
            </IconButton>
          ) : null
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Header
