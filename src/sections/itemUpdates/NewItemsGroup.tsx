import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function NewItemsGroup() {
  return (
    <ItemGroup title="New Items">
      <List dense disablePadding>
        {[
          "✅ Added new unique items - these items are not going to be announced, find them yourselves!",
          "✅ Added 2 new sets - these sets are not going to be announced, find them yourselves!",
          "✅ Added fire/cold/poison version of Griffon",
          "✅ Added upgradable charm - the base charm drops from Elders (currently upgrades are not implemented, but feel free to find the base charm. Will be announced later on.)",
        ].map((t, i) => (
          <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.9rem", color: "#27ae60" }}>
              <T>{t}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
    </ItemGroup>
  );
}
