import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3f0f40",
      contrastText: "#FFFFFF",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
