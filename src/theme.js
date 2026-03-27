import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c84c2f"
    },
    secondary: {
      main: "#245c56"
    },
    background: {
      default: "#f6efe6",
      paper: "#fffdf9"
    },
    text: {
      primary: "#1f2520",
      secondary: "#5c635e"
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Avenir Next", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.04em"
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em"
    },
    h3: {
      fontWeight: 700
    },
    button: {
      fontWeight: 700,
      textTransform: "none"
    }
  },
  shape: {
    borderRadius: 22
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28
        }
      }
    }
  }
});

export default theme;
