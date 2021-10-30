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
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" align="center">
              The primier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" align="center">
              high quality, custom-designed shirts,hats and hoodies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie options={defaultOptions} width="50rem" />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
