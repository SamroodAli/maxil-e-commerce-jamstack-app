import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import frame from "../../images/product-frame-list.svg"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25rem",
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
  },
}))

const ProductFrameList = () => {
  const classes = useStyles()
  return (
    <Grid item container>
      <Grid item container classs={{ root: classes.frame }}></Grid>
      <Grid item direction="column" classes={{ root: classes.info }}></Grid>
    </Grid>
  )
}
export default ProductFrameList
