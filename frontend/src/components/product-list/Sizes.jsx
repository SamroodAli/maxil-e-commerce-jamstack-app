import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  size: {
    color: "#fff",
  },
  button: {
    border: "3px solid #fff",
    borderRadius: 50,
    height: "3rem",
    width: "3rem",
    minWidth: 0,
  },
}))

const Sizes = ({ sizes, selectedSize, setSelectedSize }) => {
  const classes = useStyles()

  const possibleSizes = ["S", "M", "L"]
  let actualSizes = []

  if (possibleSizes.every(size => sizes.includes(size))) {
    actualSizes = possibleSizes
  }

  return (
    <Grid item container justifyContent="space-between">
      {actualSizes.map(size => (
        <Grid item key={size}>
          <Button
            classes={{ root: classes.button }}
            onClick={() => setSelectedSize(size)}
          >
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
