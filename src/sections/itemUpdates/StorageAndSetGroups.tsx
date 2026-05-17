import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../../components/ChangelogComponents";
import T from "../../components/T";

export function StorageUpdatesGroup() {
  return (
    <ItemGroup title="Storage Updates">
      <List dense disablePadding>
        {[
          "Cube and Stash - increased size",
          "Tome portal/identify, key - stacks 200",
          "Arrows/bolts - stacks 500",
        ].map((t, i) => (
          <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
              <T>{t}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
    </ItemGroup>
  );
}

export function SetChangesGroup() {
  return (
    <ItemGroup title="Set Changes">
      <List dense disablePadding>
        {[
          "Natalya, Aldur, Immortal King, Griswold and Mavina's weapons removed from the set",
          "Trang's shield removed from the set.",
          "Trang's no longer transforms",
          "These weapons and the shield can still drop as separate items",
          "📦 Natalya, Aldur, IK, Tal Rasha, Griswold, Trang, Mavina, BulKathos sets get +1 to teleport",
        ].map((t, i) => (
          <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: i === 4 ? "#27ae60" : "#c9b8a0",
              }}
            >
              <T>{t}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 600,
            color: "#e8d5b0",
            fontSize: "0.9rem",
          }}
        >
          Sazabi's Grand Tribute Set
        </Typography>
        <Typography
          sx={{
            fontSize: "0.82rem",
            color: "#a89070",
            fontStyle: "italic",
            pl: 1,
          }}
        >
          Weapon removed, added bonuses from D2R - can be used as merc set
        </Typography>
        {[
          "+16% Damage Reduction",
          "Poison length reduced by 75%",
          "+1 All Skills",
        ].map((t, i) => (
          <Typography
            key={i}
            sx={{ fontSize: "0.88rem", color: "#c9b8a0", pl: 2 }}
          >
            {t}
          </Typography>
        ))}
      </Box>
    </ItemGroup>
  );
}
