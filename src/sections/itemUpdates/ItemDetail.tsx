import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import T from "../../components/T";

export default function ItemDetail({
  name,
  sub,
  items,
}: {
  name: string;
  sub?: string;
  items: string[];
}) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography
        sx={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 600,
          color: "#e8d5b0",
          fontSize: "0.9rem",
        }}
      >
        {name}
      </Typography>
      {sub && (
        <Typography
          sx={{
            fontSize: "0.82rem",
            color: "#a89070",
            fontStyle: "italic",
            pl: 1,
          }}
        >
          <T>{sub}</T>
        </Typography>
      )}
      <List dense disablePadding sx={{ pl: 2 }}>
        {items.map((t, i) => (
          <ListItem key={i} disableGutters sx={{ py: "1px" }}>
            <Typography sx={{ fontSize: "0.88rem", color: "#c9b8a0" }}>
              <T>{t}</T>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
