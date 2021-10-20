import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

const Header = () => {
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">VAR X</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
