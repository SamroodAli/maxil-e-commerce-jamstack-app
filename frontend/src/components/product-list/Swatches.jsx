import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  swatch: {
    border: `3px solid #fff`,
    height: "3rem",
    width: "3rem",
    minWidth: 0,
    borderRadius: 50,
  },
  swatchesContainer: {
    marginTop: "0.5rem",
    "&:not(:first-child)": {
      marginLeft: "-0.5rem",
    },
  },
  selected: {
    borderColor: theme.palette.secondary.main,
  },
}))

const Swatches = ({ colors, selectedColor, setSelectedColor }) => {
  const classes = useStyles()
  return (
    <Grid item container>
      {colors.sort().map(color => (
        <Grid item classes={{ root: classes.swatchesContainer }}>
          <Button
            onClick={() => setSelectedColor(color)}
            style={{ backgroundColor: color }}
            classes={{
              root: clsx(classes.swatch, {
                [classes.selected]: selectedColor === color,
              }),
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Swatches
