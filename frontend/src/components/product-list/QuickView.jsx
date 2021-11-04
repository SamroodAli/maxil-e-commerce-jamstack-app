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
  },
}))

const QuickView = ({ open, setOpen }) => {
  const classes = useStyles()
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent classes={{ root: classes.selected }}></DialogContent>
    </Dialog>
  )
}
export default QuickView
