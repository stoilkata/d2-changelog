import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter } from "react-router-dom";
import theme from "./theme";
import { LangProvider } from "./i18n/LanguageContext";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <style>{`html { overflow-y: scroll; }`}</style>
      <LangProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
);
