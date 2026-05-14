import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import T from "../components/T";

export default function GamblingChanges() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 600,
          color: "#e67e22",
          mb: 1,
        }}
      >
        <T>Updated Gambling Odds:</T>
      </Typography>
      <List dense disablePadding>
        {[
          { text: "🎲 Rare: 1/8 (was 1/10) - 20% increase", type: "changed" },
          {
            text: "🟢 Set: 1/200 (was 1/2000) - 1000% increase",
            type: "changed",
          },
        ].map((item, i) => (
          <ListItem key={i} disableGutters sx={{ py: "3px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.95rem", color: "#e67e22" }}>
              <T>{item.text}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
