import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MercGroup, ItemGroup } from "../components/ChangelogComponents";
import { useLang } from "../i18n/LanguageContext";
import T from "../components/T";

export default function MercenaryUpdates() {
  const { t } = useLang();
  return (
    <Box>
      <MercGroup
        title={t("mercenaries.act1ColdNormal")}
        skills="Strafe, Freezing Arrow, Cleansing, Dodge"
      />
      <MercGroup
        title={t("mercenaries.act1FireNormal")}
        skills="Multishot, Immolation Arrow, Prayer, Dodge"
      />
      <MercGroup
        title={t("mercenaries.act1ColdNmHell")}
        skills="Strafe, Freezing Arrow, Fanaticism, Dodge"
      />
      <MercGroup
        title={t("mercenaries.act1FireNmHell")}
        skills="Multishot, Immolation Arrow, Fanaticism, Dodge"
      />
      <MercGroup
        title={t("mercenaries.act2DefensiveHell")}
        skills="Salvation"
      />
      <MercGroup
        title={t("mercenaries.act2OffensiveHell")}
        skills="Concentration"
      />
      <MercGroup title={t("mercenaries.act2CombatHell")} skills="Redemption" />
      <MercGroup
        title={t("mercenaries.act3FireNormal")}
        skills="Meteor, Hydra, Fireball, Resist Fire, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act3LightningNormal")}
        skills="Lightning, Nova, Static Field, Resist Lightning, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act3ColdNormal")}
        skills="Glacial Spike, Blizzard, Frozen Orb, Resist Cold, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act3FireNmHell")}
        skills="Meteor, Hydra, Fireball, Conviction, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act3LightningNmHell")}
        skills="Lightning, Nova, Static Field, Vigor, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act3ColdNmHell")}
        skills="Glacial Spike, Blizzard, Frozen Orb, Meditation, Frozen Armor"
      />
      <MercGroup
        title={t("mercenaries.act5Offensive")}
        skills="Berserk, War Cry, Battle Orders, Shout, Natural Resistance"
      />
      <MercGroup
        title={t("mercenaries.act5Combat")}
        skills="Cleave, Battle Cry, Battle Orders, Shout, Iron Skin"
      />

      <ItemGroup title={t("mercenaries.generalImprovements")}>
        <List dense disablePadding>
          {[
            "All mercs: life and life/lvl increased by 30%, def and def/lvl increased by 15%",
            "✅ Mercenaries can now wear boots, belt and gloves, too!",
          ].map((txt, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: i === 1 ? "#27ae60" : "#c9b8a0",
                }}
              >
                <T>{txt}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>

      <ItemGroup title={t("mercenaries.newMercenaries")}>
        <List dense disablePadding>
          <ListItem disableGutters sx={{ py: "2px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
              <strong style={{ color: "#e8d5b0" }}>Act 3 Bone:</strong>{" "}
              <T>Casts Teeth, Bone Spear, Amplify Damage, Bone Armor</T>
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ py: "2px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
              <strong style={{ color: "#e8d5b0" }}>Act 3 Poison:</strong>{" "}
              <T>Casts Poison Orb, Poison Nova, Lower Resist and Pestilence</T>
            </Typography>
          </ListItem>
        </List>
      </ItemGroup>
    </Box>
  );
}
