import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#99B898",
    },
    secondary: {
      main: "#708670",
    },
    common: {
      tan: "#FECEA8",
      lightRed: "#FF847C",
      red: "#E84A5F",
      offBlack: "#2A363B",
    },
  },
  typography: {
    h1: {},
    body1: {},
  },
  overrides: {},
})

export default theme
