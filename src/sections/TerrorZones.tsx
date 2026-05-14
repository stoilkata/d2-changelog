import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import T from "../components/T";

const items = [
  {
    text: "✅ Implemented Terror Zones - every 30 minutes, a group of zones will be terrorized. The groups can be found in #terror-zones",
    added: true,
  },
  { text: "Density increased by 30%", added: true },
  { text: "Champions increased by 50%", added: true },
  {
    text: "On Normal and Nightmare difficulty, area lvl will be increased by 10%",
    added: true,
  },
  { text: "On Hell, area lvl will be set to 90", added: true },
  {
    text: "📢 JoroIgnatov will announce the terrorized zones in channel #terror-zones",
  },
];

export default function TerrorZones() {
  return (
    <List dense disablePadding>
      {items.map((item, i) => (
        <ListItem key={i} disableGutters sx={{ py: "3px", pl: 1 }}>
          <Typography
            sx={{
              fontSize: "0.95rem",
              color: item.added ? "#27ae60" : "#c9b8a0",
            }}
          >
            <T>{item.text}</T>
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
