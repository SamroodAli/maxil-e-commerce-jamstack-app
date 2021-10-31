import React from "react"
import Grid from "@material-ui/core/Grid"

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
      <Grid item md={5}>
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
      <Grid item md={7}>
        <Lottie options={defaultOptions} width="50rem" />
      </Grid>
    </Grid>
  )
}

export default HeroBlock
