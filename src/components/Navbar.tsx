import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { pathname } = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}d2icon.png`;
  const isHome = pathname === "/";
  const isChangelog = pathname === "/changelog";

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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            component="img"
            src={logoSrc}
            alt="Oblivion logo"
            sx={{
              width: { xs: 54, md: 60 },
              height: { xs: 54, md: 60 },
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(192,57,43,0.65))",
            }}
          />
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
            {t("nav.title")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <ButtonGroup size="small" variant="outlined">
            <Button
              component={RouterLink}
              to="/"
              variant={isHome ? "contained" : "outlined"}
              color="primary"
              sx={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                minWidth: 92,
              }}
            >
              {t("nav.home")}
            </Button>
            <Button
              component={RouterLink}
              to="/changelog"
              variant={isChangelog ? "contained" : "outlined"}
              color="primary"
              sx={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                minWidth: 110,
              }}
            >
              {t("nav.changelog")}
            </Button>
          </ButtonGroup>
          <Button
            href="https://discord.gg/UmmDTYB2rA"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
            endIcon={<LaunchIcon fontSize="small" />}
            sx={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              height: 30,
            }}
          >
            Discord
          </Button>
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
