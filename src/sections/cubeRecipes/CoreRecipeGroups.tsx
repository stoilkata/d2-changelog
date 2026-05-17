import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../../components/ChangelogComponents";
import Recipe from "./Recipe";

export function SpecialRecipesGroup() {
  return (
    <ItemGroup title="Special Recipes">
      <List dense disablePadding>
        <Recipe
          label="Annihilus with Teleport"
          desc="Now needs only 1 Zod rune instead of 3"
          type="changed"
        />
        <Recipe
          label="Corruption Recipe"
          desc="Item + Orb of Corruption = Corrupted item with bonuses (generic bonuses, will be changed as the season progresses)"
          type="added"
        />
        <Recipe
          label="Primal Leap Helm"
          desc="Ist + Herb (drops from Blood Raven Hell) + Helm = Helm with +1 to Primal Leap"
          type="added"
        />
      </List>
    </ItemGroup>
  );
}

export function RuneUpgradingGroup() {
  return (
    <ItemGroup title="Rune Upgrading">
      <List dense disablePadding>
        <Recipe label="El to Ort runes" desc="3x rune = next rune" />
        <Recipe label="Thul to Cham" desc="2x rune = next rune" />
      </List>
    </ItemGroup>
  );
}

export function UniqueWeaponEnhancementGroup() {
  return (
    <ItemGroup title="Unique Weapon Enhancement">
      <Box
        sx={{
          mb: 1,
          p: 1,
          background: "rgba(192,57,43,0.15)",
          borderRadius: 1,
          border: "1px solid rgba(192,57,43,0.4)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "#e74c3c",
            fontFamily: '"Cinzel", serif',
            fontSize: "0.85rem",
          }}
        >
          ⚠️ IMPORTANT ORDER:
        </Typography>
        <Typography sx={{ fontSize: "0.88rem", color: "#e8d5b0" }}>
          FIRST MAKE IT ETHEREAL, THEN MAKE IT INDESTRUCTIBLE! INDESTRUCTIBLE
          ITEMS CANNOT BECOME ETHEREAL! MAKE SURE YOU DO THE CHAM + ITEM
          FIRST!!!
        </Typography>
      </Box>
      <List dense disablePadding>
        {[
          ["Cham + Unique Melee Weapon", "Adds ethereal mod"],
          ["Zod + Unique Melee Weapon", "Adds indestructible mod"],
          ["Cham + Unique Armor", "Adds ethereal mod"],
          ["Zod + Unique Armor", "Adds indestructible mod"],
        ].map(([label, desc], i) => (
          <Recipe key={i} label={label} desc={desc} type="changed" />
        ))}
      </List>
    </ItemGroup>
  );
}

export function CharmRerollingGroup() {
  return (
    <ItemGroup title="Charm Rerolling">
      <List dense disablePadding>
        <Recipe
          label="Charm + 2 Flawless Gems"
          desc="Reroll charm"
          type="changed"
        />
      </List>
    </ItemGroup>
  );
}

export function SocketingGroup() {
  return (
    <ItemGroup title="Socketing">
      <List dense disablePadding>
        {[2, 3, 4, 5, 6].map((n) => (
          <Recipe
            key={n}
            label={`White/Eth Weapon/Armor + ${n}x Scroll of Town Portal + Gul Rune`}
            desc={`+${n} sockets`}
            type="changed"
          />
        ))}
      </List>
    </ItemGroup>
  );
}
