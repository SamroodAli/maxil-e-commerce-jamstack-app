import React from "react"
import Grid from "@material-io/core/Typography"
import Typography from "@material-ui/core/Typography"
import Lottie from "react-lottie"

import animationData from "../../images/data.json"

const HeroBlock = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return (
    <Grid container justifyContent="space-around">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              The primier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3">
          high quality, custom-designed shirts,hats and hoodies
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HeroBlock
