import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../../components/ChangelogComponents";
import T from "../../components/T";
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

export function AncientFragmentRecipesGroup() {
  return (
    <ItemGroup title="Ancient Fragment Recipes">
      <List dense disablePadding>
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 0.5,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 1</T>
        </Typography>
        <Recipe
          label="FHR +10%"
          desc="Mal rune + Perfect Amethyst + Ancient Fragment"
          type="added"
        />
        <Recipe
          label="FRW +10%"
          desc="Mal rune + Perfect Topaz + Ancient Fragment"
          type="added"
        />
        <Recipe
          label="Health +25"
          desc="Mal rune + Perfect Sapphire + Ancient Fragment"
          type="added"
        />
        <Recipe
          label="Mana +35"
          desc="Mal rune + Perfect Emerald + Ancient Fragment"
          type="added"
        />

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 1,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 2</T>
        </Typography>
        <Recipe
          label="FBR +20%"
          desc="Ist rune + Perfect Amethyst + Ancient Fragment Level 1"
          type="added"
        />
        <Recipe
          label="Block +15%"
          desc="Ist rune + Perfect Topaz + Ancient Fragment Level 1"
          type="added"
        />
        <Recipe
          label="FCR +10%"
          desc="Ist rune + Perfect Sapphire + Ancient Fragment Level 1"
          type="added"
        />
        <Recipe
          label="IAS +15%"
          desc="Ist rune + Perfect Emerald + Ancient Fragment Level 1"
          type="added"
        />

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 1,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 3</T>
        </Typography>
        <Recipe
          label="Strength +10"
          desc="Gul rune + Perfect Amethyst + Ancient Fragment Level 2"
          type="added"
        />
        <Recipe
          label="Dexterity +10"
          desc="Gul rune + Perfect Topaz + Ancient Fragment Level 2"
          type="added"
        />
        <Recipe
          label="Vitality +15"
          desc="Gul rune + Perfect Sapphire + Ancient Fragment Level 2"
          type="added"
        />
        <Recipe
          label="Energy +15"
          desc="Gul rune + Perfect Emerald + Ancient Fragment Level 2"
          type="added"
        />

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 1,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 4</T>
        </Typography>
        <Recipe
          label="AR +10%"
          desc="Vex rune + Perfect Amethyst + Ancient Fragment Level 3"
          type="added"
        />
        <Recipe
          label="ED (dmg) +30%"
          desc="Vex rune + Perfect Topaz + Ancient Fragment Level 3"
          type="added"
        />
        <Recipe
          label="Fire Dmg +5%"
          desc="Vex rune + Perfect Sapphire + Ancient Fragment Level 3"
          type="added"
        />
        <Recipe
          label="Lightning Dmg +5%"
          desc="Vex rune + Perfect Emerald + Ancient Fragment Level 3"
          type="added"
        />
        <Recipe
          label="Cold Dmg +5%"
          desc="Vex rune + Perfect Ruby + Ancient Fragment Level 3"
          type="added"
        />
        <Recipe
          label="Poison Dmg +5%"
          desc="Vex rune + Perfect Diamond + Ancient Fragment Level 3"
          type="added"
        />

        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 1,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 5</T>
        </Typography>
        <Recipe
          label="Minus Target Defense -15%"
          desc="Ohm rune + Perfect Amethyst + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Physical Pierce -8%"
          desc="Ohm rune + Perfect Topaz + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Cold Pierce -5%"
          desc="Ohm rune + Perfect Sapphire + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Fire Pierce -5%"
          desc="Ohm rune + Perfect Emerald + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Lightning Pierce -5%"
          desc="Ohm rune + Perfect Ruby + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Poison Pierce -5%"
          desc="Ohm rune + Perfect Diamond + Ancient Fragment Level 4"
          type="added"
        />
        <Recipe
          label="Magic Pierce -8%"
          desc="Ohm rune + Perfect Skull + Ancient Fragment Level 4"
          type="added"
        />
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#c9b8a0",
            pl: 1,
            mt: 1,
            mb: 0.5,
            fontStyle: "italic",
          }}
        >
          <T>Level 6</T>
        </Typography>
        <Recipe
          label="All stats +10"
          desc="Lo rune + Perfect Amethyst + Ancient Fragment Level 5"
          type="added"
        />
        <Recipe
          label="All resist +10%"
          desc="Lo rune + Perfect Topaz + Ancient Fragment Level 5"
          type="added"
        />
        <Recipe
          label="Crushing Blow +10%"
          desc="Lo rune + Perfect Sapphire + Ancient Fragment Level 5"
          type="added"
        />
        <Recipe
          label="Deadly Strike +10%"
          desc="Lo rune + Perfect Emerald + Ancient Fragment Level 5"
          type="added"
        />
        <Recipe
          label="All Skills +1"
          desc="Lo rune + Perfect Ruby + Ancient Fragment Level 5"
          type="added"
        />
      </List>
    </ItemGroup>
  );
}
