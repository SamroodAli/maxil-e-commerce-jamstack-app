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
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      marginRight: "2rem",
    },
  },
}))

const HeaderTabs = ({ routes, value }) => {
  const classes = useStyles()
  return (
    <Tabs
      value={value}
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
}

export default HeaderTabs
