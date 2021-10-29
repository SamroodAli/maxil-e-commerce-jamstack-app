import React from "react"
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
    // "@global": {
    //   ".MuiTypography-h1": {
    //     fontSize: "30rem",
    //   },
    // },
  }
})

export default function Header({ categories }) {
  const classes = useStyles()

  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        <Tabs
          value={0}
          classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
        >
          {routes.map(({ node }) => (
            <Tab key={node.strapiId} label={node.name} />
          ))}
        </Tabs>
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
