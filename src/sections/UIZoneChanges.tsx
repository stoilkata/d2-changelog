import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../components/ChangelogComponents";
import T from "../components/T";

export default function UIZoneChanges() {
  return (
    <Box>
      <ItemGroup title="UI Updates">
        <List dense disablePadding>
          {["New icons", "✅ New panels"].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: i === 1 ? "#27ae60" : "#c9b8a0",
                }}
              >
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>

      <ItemGroup title="Zone Changes">
        <List dense disablePadding>
          {["Arcane Sanctuary - wider", "Maggot Lair - wider"].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>

      <ItemGroup title="Inventory & Stash">
        <List dense disablePadding>
          {[
            "Stash: Max gold increased to 10 million",
            "Inventory: Increased to 8x10, added charm zone in the bottom half",
          ].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>
    </Box>
  );
}
