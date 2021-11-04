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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    height: "20rem",
    width: "20rem",
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    height: "5rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-0.1rem",
  },
}))

const ProductFrameGrid = ({ product, variant }) => {
  const classes = useStyles()
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item classes={{ root: classes.frame }}>
          <img
            className={classes.product}
            src={process.env.GATSBY_STRAPI_API_URL + variant.images[0].url}
            alt={product.node.name}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" classes={{ root: classes.title }}>
            {/* products.node.name = i++ - hoodie */}
            {product.node.name.split(" ")[0]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default ProductFrameGrid
