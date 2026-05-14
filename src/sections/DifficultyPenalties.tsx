import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export default function DifficultyPenalties() {
  return (
    <List dense disablePadding>
      {[
        { label: "Nightmare:", detail: "−50 res / −10% XP on death" },
        { label: "Hell:", detail: "−120 res / −15% XP on death" },
      ].map((item, i) => (
        <ListItem key={i} disableGutters sx={{ py: "4px", pl: 1 }}>
          <Typography sx={{ fontSize: "0.95rem", color: "#c9b8a0" }}>
            <strong style={{ color: "#e74c3c" }}>{item.label}</strong>{" "}
            {item.detail}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
