import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import T from "../../components/T";

export default function Recipe({
  label,
  desc,
  type,
}: {
  label: string;
  desc: string;
  type?: "added" | "changed";
}) {
  const color =
    type === "added" ? "#27ae60" : type === "changed" ? "#e67e22" : "#c9b8a0";

  return (
    <ListItem
      disableGutters
      sx={{ py: "3px", pl: 1, alignItems: "flex-start" }}
    >
      <Typography sx={{ fontSize: "0.9rem", color }}>
        <strong style={{ color: "#e8d5b0" }}>{label}:</strong> <T>{desc}</T>
      </Typography>
    </ListItem>
  );
}
