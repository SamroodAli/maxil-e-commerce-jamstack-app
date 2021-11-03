import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"

import filter from "../../images/filter.svg"
import sort from "../../images/sort.svg"

const useStyles = makeStyles(theme => ({
  functionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "6rem",
    borderRadius: "10px 10px 0 0",
  },
}))

const FunctionContainer = () => {
  const classes = useStyles()
  const [options, setOptions] = useState(null)

  const content = () => {
    switch (options) {
      case null: {
        const items = [
          { icon: filter, alt: "filter" },
          { icon: sort, alt: "sort" },
        ]

        return (
          <Grid
            item
            container
            justifyContent="space-around"
            alignItems="center"
          >
            {items.map(item => (
              <Grid item key={item.alt}>
                <IconButton>
                  <img src={item.icon} alt={item.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )
      }
      default: {
        return null
      }
    }
  }

  return (
    <Grid item container classes={{ root: classes.functionContainer }}>
      {content()}
    </Grid>
  )
}

export default FunctionContainer
