import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useLang } from "../i18n/LanguageContext";

const cardKeys = [
  "terrorZones",
  "timedExpEvents",
  "craftingMechanics",
  "spellChanges",
  "corruptionMechanics",
  "newMaps",
  "newItems",
  "improvedMercenaries",
  "biggerStorage",
] as const;

export default function HomePage() {
  const { t } = useLang();

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 700,
            color: "#e8d5b0",
            textShadow: "0 0 28px rgba(192,57,43,0.45)",
            mb: 1,
          }}
        >
          {t("home.title")}
        </Typography>
        <Typography
          sx={{
            maxWidth: 920,
            mx: "auto",
            color: "#c9b8a0",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          {t("home.subtitle")}
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {cardKeys.map((cardKey) => (
          <Grid key={cardKey} size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={2}
              sx={{
                height: "100%",
                p: 2.5,
                border: "1px solid rgba(192,57,43,0.25)",
                background:
                  "linear-gradient(180deg, rgba(230,126,34,0.08) 0%, rgba(0,0,0,0.22) 100%)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 700,
                  color: "#e67e22",
                  mb: 1,
                  minHeight: 36,
                }}
              >
                {t(`home.cards.${cardKey}.title`)}
              </Typography>
              <Typography sx={{ color: "#c9b8a0", lineHeight: 1.6 }}>
                {t(`home.cards.${cardKey}.description`)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
