import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import Rating from "../home/Rating"
import Chip from "@material-ui/core/Chip"
import Sizes from "./Sizes"
import Swatches from "./Swatches"

import frame from "../../images/selected-frame.svg"
import explore from "../../images/explore.svg"

const useStyles = makeStyles(theme => ({
  selected: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60.4rem",
    width: "73.5rem",
    padding: "0 !important",
  },
  dialog: {
    maxWidth: "100%",
  },
  productImage: {
    height: "40rem",
    width: "40rem",
    marginTop: "5rem",
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    height: "13rem",
    marginTop: "2rem",
    padding: "0.5rem 1rem",
  },
  stock: {
    color: "#fff",
    fontWeight: 500,
  },
  details: {
    color: "#fff",
    textTransform: "none",
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  exploreIcon: {
    height: "1.5rem",
    width: "2rem",
    marginLeft: "0.5rem",
  },
  detailButton: {
    padding: 0,
  },
  infoContainer: {
    height: "100%",
  },
  chipRoot: {
    transform: "scale(1.5)",
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
  },
}))

const QuickView = ({ open, setOpen, url, name, price, product }) => {
  const classes = useStyles()
  const [selectedSize, setSelectedSize] = useState(null)

  let sizes = []
  let colors = []

  product.node.variants.map(variant => {
    sizes.push(variant.size)
    if (!colors.includes(variant.color)) {
      colors.push(variant.color)
    }
  })

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent classes={{ root: classes.selected }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={url}
              alt="product image"
              className={classes.productImage}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            classes={{ root: classes.toolbar }}
          >
            <Grid item>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-between"
                classes={{ root: classes.infoContainer }}
              >
                <Grid item>
                  <Typography variant="h4">{name}</Typography>
                  <Rating number={4} />
                </Grid>
                <Grid item>
                  <Typography variant="h3" classes={{ root: classes.stock }}>
                    12 Currently in Stock
                  </Typography>
                  <Button classes={{ root: classes.detailButton }}>
                    <Typography
                      variant="h3"
                      classes={{ root: classes.details }}
                    >
                      Details
                      <img
                        src={explore}
                        alt="Go tot product detail page"
                        className={classes.exploreIcon}
                      />
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.chipContainer }}>
              <Chip label={`$${price}`} classes={{ root: classes.chipRoot }} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Sizes
                  sizes={sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
                <Swatches colors={colors} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
export default QuickView
