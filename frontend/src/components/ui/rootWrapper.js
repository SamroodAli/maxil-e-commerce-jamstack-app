import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
