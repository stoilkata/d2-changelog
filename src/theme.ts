import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c0392b",
      light: "#e74c3c",
      dark: "#922b21",
    },
    secondary: {
      main: "#e67e22",
      light: "#f39c12",
      dark: "#d35400",
    },
    background: {
      default: "#0d0d0d",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#e8d5b0",
      secondary: "#a89070",
    },
    success: { main: "#27ae60" },
    error: { main: "#c0392b" },
    warning: { main: "#e67e22" },
    divider: "rgba(192,57,43,0.3)",
  },
  typography: {
    fontFamily: '"Crimson Text", Georgia, serif',
    h1: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    h2: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    h3: { fontFamily: '"Cinzel", serif', fontWeight: 600 },
    h4: { fontFamily: '"Cinzel", serif', fontWeight: 600 },
    h5: { fontFamily: '"Crimson Text", serif', fontWeight: 600 },
    h6: { fontFamily: '"Crimson Text", serif', fontWeight: 600 },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
          border: "1px solid rgba(192,57,43,0.25)",
          "&:before": { display: "none" },
          "&.Mui-expanded": {
            margin: "8px 0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(192,57,43,0.12)",
          borderBottom: "1px solid rgba(192,57,43,0.25)",
          "&.Mui-expanded": {
            backgroundColor: "rgba(192,57,43,0.2)",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px 20px",
          borderTop: "1px solid rgba(192,57,43,0.15)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Crimson Text", serif',
          fontSize: "0.9rem",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 2,
          paddingBottom: 2,
        },
      },
    },
  },
});

export default theme;
