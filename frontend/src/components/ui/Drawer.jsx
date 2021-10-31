import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const useStyles = makeStyles(theme => ({
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: theme.palette.common.white,
  },
}))

const Drawer = ({ routes, drawerOpen, setDrawerOpen, activeIndex }) => {
  const classes = useStyles()

  return (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map(({ node }, i) => (
          <ListItem
            button
            selected={activeIndex === i}
            key={node.strapiId}
            component={Link}
            to={node.link || `/${node.name.toLowerCase()}`}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )
}

Drawer.propTypes = {
  routes: PropTypes.array.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
    .isRequired,
}

export default Drawer
