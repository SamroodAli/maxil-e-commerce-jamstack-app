import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"

import sort from "../../images/sort.svg"
import close from "../../images/close-outline.svg"

const useStyles = makeStyles(theme => ({}))

const Sort = () => {
  const classes = useStyles()

  const sortOptions = [
    { label: "A-Z" },
    { label: "Z-A" },
    { label: "NEWEST" },
    { label: "OLDEST" },
    { label: "PRICE ↑" },
    { label: "PRICE ↓" },
    { label: "REVIEWS" },
  ]
  //A-Z, Z-A, NEWEST, OLDEST, PRICE ↑, PRICE ↓, REVIEWS
  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton>
          <img src={sort} alt="sort" />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between">
          {sortOptions.map(option => (
            <Grid item key={option.label}>
              <Chip label={option.label} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton>
          <img src={close} alt="close" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
export default Sort
