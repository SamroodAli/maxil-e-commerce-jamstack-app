import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const useStyles = makeStyles(theme => ({
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

const HeaderTabs = ({ routes }) => {
  const classes = useStyles()
  return (
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
}

HeaderTabs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default HeaderTabs
