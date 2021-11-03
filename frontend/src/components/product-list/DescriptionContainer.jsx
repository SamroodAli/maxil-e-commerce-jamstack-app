import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  description: {
    color: "#fff",
  },
}))

const DescriptionContainer = ({ name, description }) => {
  const classes = useStyles()
  return (
    <Grid item container>
      <Grid item>
        <Typography variant="h4" paragraph gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" classes={{ root: classes.description }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
