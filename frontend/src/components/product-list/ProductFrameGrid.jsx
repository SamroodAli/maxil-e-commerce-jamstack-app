import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "25rem",
    width: "25rem",
  },
}))

const ProductFrameGrid = ({ products }) => {
  const classes = useStyles()
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item classes={{ root: classes.frame }}></Grid>
      </Grid>
    </Grid>
  )
}
export default ProductFrameGrid
