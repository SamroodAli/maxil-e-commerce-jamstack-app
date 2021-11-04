import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import FunctionContainer from "./FunctionContainer"
import DescriptionContainer from "./DescriptionContainer"

const useStyles = makeStyles(theme => ({
  toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "auto",
  },
}))

const DynamicToolbar = ({ filterOptions, name, description }) => {
  const classes = useStyles()
  const [options, setOption] = useState(null)

  return (
    <Grid item container direction="column" classes={{ root: classes.toolbar }}>
      <FunctionContainer
        filterOptions={filterOptions}
        options={options}
        setOptions={setOptions}
      />
      <DescriptionContainer name={name} description={description} />
    </Grid>
  )
}

export default DynamicToolbar
