import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

import ListIcon from "../../images/List"
import GridIcon from "../../images/Grid"

import background from "../../images/toolbar-background.svg"

const useStyles = makeStyles(theme => ({
  description: {
    color: "#fff",
  },
  descriptionContainer: {
    backgroundColor: theme.palette.primary.main,
    height: "15rem",
    width: "60rem",
    borderRadius: 25,
    padding: "1rem",
  },
  mainContainer: {
    padding: "3rem",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    borderRightColor: `${theme.palette.primary.main} !important`,
  },
}))

const DescriptionContainer = ({ name, description }) => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      classes={{ root: classes.mainContainer }}
      justifyContent="center"
    >
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h4" paragraph gutterBottom align="center">
          {name}
        </Typography>
        <Typography
          variant="body1"
          classes={{ root: classes.description }}
          align="center"
        >
          {description}
        </Typography>
      </Grid>
      <Grid item>
        <ButtonGroup>
          <Button classes={{ outlined: classes.button }}>
            <ListIcon />
          </Button>
          <Button classes={{ outlined: classes.button }}>
            <GridIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default DescriptionContainer
