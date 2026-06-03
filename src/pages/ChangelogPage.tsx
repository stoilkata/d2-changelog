import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SectionAccordion from "../components/SectionAccordion";
import { useLang } from "../i18n/LanguageContext";
import MercenaryUpdates from "../sections/MercenaryUpdates";
import GeneralChanges from "../sections/GeneralChanges";
import TerrorZones from "../sections/TerrorZones";
import ClassSkills from "../sections/ClassSkills.tsx";
import GamblingChanges from "../sections/GamblingChanges";
import DifficultyPenalties from "../sections/DifficultyPenalties";
import MonsterBuffs from "../sections/MonsterBuffs";
import UIZoneChanges from "../sections/UIZoneChanges";
import ItemUpdates from "../sections/ItemUpdates.tsx";
import CubeRecipes from "../sections/CubeRecipes.tsx";
import NewRunewords from "../sections/NewRunewords.tsx";
import MapResistanceOverview from "../sections/MapResistanceOverview";

export default function ChangelogPage() {
  const { t } = useLang();

  const sections = [
    { key: "changelog.mercenaryUpdates", component: <MercenaryUpdates /> },
    { key: "changelog.generalChanges", component: <GeneralChanges /> },
    { key: "changelog.terrorZones", component: <TerrorZones /> },
    { key: "changelog.classSkills", component: <ClassSkills /> },
    { key: "changelog.gambling", component: <GamblingChanges /> },
    { key: "changelog.difficulty", component: <DifficultyPenalties /> },
    { key: "changelog.monsters", component: <MonsterBuffs /> },
    { key: "changelog.uiZones", component: <UIZoneChanges /> },
    { key: "changelog.items", component: <ItemUpdates /> },
    { key: "changelog.cubeRecipes", component: <CubeRecipes /> },
    { key: "changelog.runewords", component: <NewRunewords /> },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 700,
          color: "#e8d5b0",
          mb: 4,
          textShadow: "0 0 30px rgba(192,57,43,0.5)",
          letterSpacing: 2,
        }}
      >
        {t("changelog.title")}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {sections.map(({ key, component }) => (
          <SectionAccordion key={key} title={t(key)}>
            {component}
          </SectionAccordion>
        ))}
      </Box>

      {/* <Box sx={{ mt: 3 }}>
        <MapResistanceOverview />
      </Box> */}
    </Container>
  );
}
