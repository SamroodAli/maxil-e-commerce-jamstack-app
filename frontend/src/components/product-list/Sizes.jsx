import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  size: {
    color: "#fff",
  },
}))

const Sizes = ({ sizes }) => {
  const classes = useStyles()

  return (
    <Grid item container justifyContent="space-between">
      {sizes.map(size => (
        <Grid item>
          <Button>
            <Typography variant="h3" classes={{ root: classes.size }}>
              {size}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
export default Sizes
