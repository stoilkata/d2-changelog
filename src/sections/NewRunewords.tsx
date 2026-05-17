import Box from "@mui/material/Box";
import { RunewordDetail } from "../components/ChangelogComponents";
import { runewords } from "./newRunewords/runewordsData";

export default function NewRunewords() {
  return (
    <Box sx={{ columns: { xs: 1, md: 2, lg: 3 }, gap: 2 }}>
      {runewords.map((rw) => (
        <Box key={rw.name} sx={{ breakInside: "avoid", mb: 1 }}>
          <RunewordDetail name={rw.name} base={rw.base} items={rw.items} />
        </Box>
      ))}
    </Box>
  );
}
