import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import QuickView from "./QuickView"
import Button from "@material-ui/core/Button"
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
  const [open, setOpen] = useState(false)
  const imageURL = process.env.GATSBY_STRAPI_API_URL + variant.images[0].url
  const productName = product.node.name.split(" ")[0]
  return (
    <Grid item>
      <Grid container direction="column">
        <Grid
          item
          classes={{ root: classes.frame }}
          component={Button}
          disableRipple
          onClick={() => setOpen(true)}
        >
          <img
            className={classes.product}
            src={imageURL}
            alt={product.node.name}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" classes={{ root: classes.title }}>
            {/* products.node.name = i++ - hoodie */}
            {productName}
          </Typography>
        </Grid>
      </Grid>
      <QuickView
        open={open}
        setOpen={setOpen}
        url={imageURL}
        name={productName}
        price={variant.price}
      />
    </Grid>
  )
}
export default ProductFrameGrid
