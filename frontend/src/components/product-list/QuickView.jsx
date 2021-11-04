import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

import frame from "../../images/selected-frame.svg"

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
}))

const QuickView = ({ open, setOpen, url }) => {
  const classes = useStyles()
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
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
export default QuickView
