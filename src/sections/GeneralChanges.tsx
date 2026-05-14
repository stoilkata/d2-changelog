import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import T from "../components/T";

const items: {
  text: string;
  type?: "added" | "changed" | "removed";
  sub?: string[];
}[] = [
  { text: "❌ Cow King removed", type: "removed" },
  {
    text: "✅ Uber Diablo in place of Bonesaw Breaker in Glacial Trail. Has Diablo Hell drop and Annihilus/Hellfire Torch low chance",
    type: "changed",
  },
  {
    text: "✅ Secret Cow Level is now opened with Key + Tome of Town Portal",
    type: "changed",
  },
  { text: "✅ Crafted items can now be recrafted", type: "added" },
  {
    text: "📋 Added tome of portal, tome of identify and horadric cube to starting items",
    type: "added",
  },
  { text: "Bosses loot is the same as the first kill (Quest)" },
  { text: "🔁 Akara and Larzuk quests are repeatable", type: "added" },
  {
    text: "🔁 Thrown weapons and arrows/bolts don't lose quantity",
    type: "added",
  },
  { text: "💥 Damage Reduced % cap increased from 50% to 80%", type: "added" },
  { text: "➕ Added physical and magic pierce", type: "added" },
  {
    text: "🗺️ Some areas are reverted back to their original level values and only slightly increased density",
    type: "added",
  },
  {
    text: "🗺️ 7 new maps - each map is opened (only on act5 hell!) with a scroll which drops from Andariel/Duriel/Mephisto/Diablo/Baal/Izual/Hephasto in Hell. New Unique items drop here and everything else, including torch and annihilus",
    type: "added",
  },
  {
    text: "Stackable runes and gems (flawless and perfect):",
    sub: [
      "In order to unstack runes/gems, place the stack in cube and click transmute. DO NOT USE STACKS FOR RUNEWORDS/SOCKETING!!!!!!!",
      "Stack up to 20 for 1-15 runes",
      "Stack up to 10 for 15-33 runes",
      "Stack up to 50 for gems",
    ],
  },
];

const typeColor: Record<string, string> = {
  added: "#27ae60",
  changed: "#e67e22",
  removed: "#c0392b",
};

export default function GeneralChanges() {
  return (
    <List dense disablePadding>
      {items.map((item, i) => (
        <Box key={i}>
          <ListItem
            disableGutters
            sx={{ alignItems: "flex-start", py: "3px", pl: 1 }}
          >
            <Typography
              sx={{
                fontSize: "0.95rem",
                color: item.type ? typeColor[item.type] : "#c9b8a0",
                lineHeight: 1.6,
              }}
            >
              <T>{item.text}</T>
            </Typography>
          </ListItem>
          {item.sub && (
            <List dense disablePadding sx={{ pl: 3 }}>
              {item.sub.map((s, j) => (
                <ListItem key={j} disableGutters sx={{ py: "1px", pl: 1 }}>
                  <Typography sx={{ fontSize: "0.88rem", color: "#a89070" }}>
                    <T>{s}</T>
                  </Typography>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      ))}
    </List>
  );
}
