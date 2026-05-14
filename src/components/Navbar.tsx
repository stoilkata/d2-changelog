import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <AppBar
      position="sticky"
      elevation={4}
      sx={{
        background:
          "linear-gradient(90deg, #0d0d0d 0%, #1a0505 50%, #0d0d0d 100%)",
        borderBottom: "2px solid rgba(192,57,43,0.6)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 700,
            color: "#e74c3c",
            letterSpacing: 2,
            textShadow: "0 0 20px rgba(192,57,43,0.8)",
          }}
        >
          ⚔️ {t("nav.title")} ⚔️
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ButtonGroup size="small" variant="outlined">
            {(["en", "bg"] as Lang[]).map((l) => (
              <Button
                key={l}
                onClick={() => setLang(l)}
                variant={lang === l ? "contained" : "outlined"}
                color="primary"
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 600,
                  minWidth: 48,
                }}
              >
                {l === "en" ? "EN" : "БГ"}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
