import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Toolbar from "@material-ui/core/Toolbar"

import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import menu from "../../images/menu.svg"

const useStyles = makeStyles(theme => {
  return {
    coloredIndicator: {
      backgroundColor: "#fff",
    },
    logoText: {
      color: theme.palette.common.offBlack,
    },
    tabs: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    icon: {
      height: "3rem",
      width: "3rem",
    },
    // "@global": {
    //   ".MuiTypography-h1": {
    //     fontSize: "30rem",
    //   },
    // },
  }
})

export default function Header({ categories }) {
  const classes = useStyles()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]

  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(({ node }) => (
        <Tab key={node.strapiId} label={node.name} />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
    >
      <List>
        {routes.map(({ node }) => (
          <ListItem button key={node.strapiId}>
            <ListItemText primary={node.name} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        <IconButton>
          <img className={classes.icon} src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img className={classes.icon} src={cart} alt="cart" />
        </IconButton>
        <IconButton onClick={() => (matchesMD ? setDrawerOpen(true) : null)}>
          <img
            className={classes.icon}
            src={matchesMD ? menu : account}
            alt="account"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
