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
import { Link, navigate } from "gatsby"

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
    drawer: {
      backgroundColor: theme.palette.primary.main,
    },
    listItemText: {
      color: theme.palette.common.white,
    },
    tab: {
      ...theme.typography.body1,
      fontWeight: 600,
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
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(({ node }) => (
        <Tab
          component={Link}
          to={node.link || `/${node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          key={node.strapiId}
          label={node.name}
        />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{ paper: classes.drawer }}
    >
      <List>
        {routes.map(({ node }) => (
          <ListItem button key={node.strapiId}>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

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
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if (action.visible) {
            return (
              <IconButton key={action.alt} onClick={action.onClick}>
                <img
                  className={classes.icon}
                  src={action.icon}
                  alt={action.alt}
                />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
}
