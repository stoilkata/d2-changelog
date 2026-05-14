import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import T from "../components/T";

const items = [
  "Hell monsters: +30% HP & Damage, -20% Exp",
  "85+ Zones: +15–25% monster density",
  "Elder monsters in Act 1 Hole Level 1",
];

export default function MonsterBuffs() {
  return (
    <List dense disablePadding>
      {items.map((text, i) => (
        <ListItem key={i} disableGutters sx={{ py: "3px", pl: 1 }}>
          <Typography sx={{ fontSize: "0.95rem", color: "#c9b8a0" }}>
            <T>{text}</T>
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
