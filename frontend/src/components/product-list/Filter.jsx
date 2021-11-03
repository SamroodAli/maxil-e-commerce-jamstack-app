import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"

import filter from "../../images/filter.svg"
import close from "../../images/close-outline.svg"

const useStyles = makeStyles(theme => ({
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
  chipLabel: {
    ...theme.palette.body1,
    color: "#fff",
    fontWeight: "bold",
  },
}))

const Filter = ({ setOption, filterOptions }) => {
  const classes = useStyles()

  // {Size : [label, checked]}

  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={filter} alt="filter" />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="space-around">
          {Object.keys(filterOptions)
            .filter(options => filterOptions[options] !== null)
            .map(option => (
              <Grid item key={option}>
                <Grid container direction="column">
                  <Grid item>
                    <Chip
                      label={option}
                      classes={{
                        root: classes.chipRoot,
                        label: classes.chipLabel,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <FormGroup>
                        {filterOptions[option].map(({ label, checked }) => (
                          <FormControlLabel
                            key={label}
                            label={label}
                            control={
                              <Checkbox checked={checked} name={label} />
                            }
                          ></FormControlLabel>
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={close} alt="close" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Filter
