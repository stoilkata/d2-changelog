import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../components/ChangelogComponents";
import T from "../components/T";

function Recipe({
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

const craftSections = [
  {
    title: "Caster Crafts",
    items: [
      ["Helm", "Magic Find 40-60, Mana 20-40, Energy 15-20"],
      ["Boots", "Magic Find 20-40, Mana 20-40, FCR 5-15"],
      ["Gloves", "Magic Find 20-40, Mana 20-40, FCR 5-15"],
      ["Belt", "Magic Find 20-40, Mana 20-40, FCR 5-15"],
      ["Shield", "FCR 10-30, Mana 20-40, Block% 10-20"],
      ["Armor", "FCR 10-30, Mana 40-70, Magic Find 50-100"],
      ["Amulet", "FCR 5-10, Mana 20-40, Energy 15-20"],
      ["Ring", "Mana regen 5-10, Mana 10-25, Energy 10-15"],
      ["Weapon", "FCR 10-20, Mana 30-60, Mana% 5-15"],
    ],
  },
  {
    title: "Blood Crafts",
    items: [
      ["Helm", "IAS 5-20, HP 40-60, Crushing Blow 5-10"],
      ["Boots", "HP 40-60, Open Wounds 5-10, Deadly Strike 5-10"],
      ["Gloves", "IAS 5-10, Open Wounds 5-10, Crushing Blow 5-10"],
      ["Belt", "IAS 5-10, HP 40-60, Open Wounds 5-10"],
      ["Shield", "HP 50-100, Vita 10-20, Str 10-20"],
      ["Armor", "HP 50-100, Str 10-20, Enhanced DMG 75-180%"],
      ["Amulet", "LL 2-4, HP 25-50, Str 7-15"],
      ["Ring", "LL 2-4, HP 20-40, Str 5-10"],
      [
        "Weapon",
        "Crushing Blow 5-10, Enhanced DMG 120-200, IAS 10-20, Deadly Strike 5-10",
      ],
    ],
  },
  {
    title: "Hit Power Crafts",
    items: [
      ["Helm", "Dex 5-15, IAS 10-20, All res 10-20"],
      ["Boots", "FRW 5-15, Str 5-15, AR 100-200"],
      ["Gloves", "Str 5-15, Dex 5-10, Knockback"],
      ["Belt", "5% Chance to cast Lvl 6 Enchant on hit, Dex 5-15, Str 5-15"],
      ["Shield", "AR% 20-30, Block% 5-10, FBR 10-20"],
      ["Armor", "Dex 15-30, AR 150-250, Enhanced DMG 75-130"],
      [
        "Amulet",
        "AR 50-150, Str 5-10, 5% Chance to cast Lvl 4 Frost nova on hit",
      ],
      [
        "Ring",
        "AR 50-150, Dex 5-10, 5% Chance to cast Lvl 4 Frost nova on hit",
      ],
      [
        "Weapon",
        "10% Chance to cast Lvl 4 Lower Resist on hit, Enhanced DMG 80-180, AR% 35-60, IAS 10-20",
      ],
    ],
  },
  {
    title: "Safety Crafts",
    items: [
      ["Helm", "HP 50-100, Max Light Res 5-10, Light res 15-30"],
      [
        "Boots",
        "10% Chance to cast Lvl 10 Fade when struck, Max Fire Res 5-10, Fire Res 15-30",
      ],
      ["Gloves", "DR 5-10, Max Cold Res 5-10, Cold Res 15-30"],
      ["Belt", "DR 5-10, Max Poison Res 5-10, Poison Res 15-30"],
      [
        "Shield",
        "10% Chance to cast Lvl 10 Holy Shield when struck, HP% 5-10, Magic Res 15-30",
      ],
      ["Armor", "All res 20-50, Enhanced Def 200-300, HP 80-120"],
      [
        "Amulet",
        "10% Chance to cast Lvl 6 Chilling armor when struck, Magic res 5-10, Block 5-15",
      ],
      ["Ring", "HP 30-60, Magic Res 5-10, Vita 10-20"],
      ["Weapon", "DR 5-10, HP% 10-20, Enhanced Def 5-10"],
    ],
  },
];

export default function CubeRecipes() {
  return (
    <Box>
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

      <ItemGroup title="Rune Upgrading">
        <List dense disablePadding>
          <Recipe label="El to Ort runes" desc="3x rune = next rune" />
          <Recipe label="Thul to Cham" desc="2x rune = next rune" />
        </List>
      </ItemGroup>

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

      <ItemGroup title="Charm Rerolling">
        <List dense disablePadding>
          <Recipe
            label="Charm + 2 Flawless Gems"
            desc="Reroll charm"
            type="changed"
          />
        </List>
      </ItemGroup>

      <ItemGroup title="📜 Crafting Recipes">
        <Typography
          sx={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 600,
            color: "#e8d5b0",
            fontSize: "0.85rem",
            mb: 0.5,
          }}
        >
          General crafting information
        </Typography>
        <Typography
          sx={{ fontSize: "0.88rem", color: "#e74c3c", fontWeight: 600, mb: 1 }}
        >
          Jewels removed from crafting recipes!
        </Typography>
        <List dense disablePadding sx={{ mb: 1 }}>
          <ListItem disableGutters sx={{ py: "1px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.88rem", color: "#c9b8a0" }}>
              flawless gems + charm = reroll charm
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ py: "1px", pl: 1 }}>
            <Typography sx={{ fontSize: "0.88rem", color: "#c9b8a0" }}>
              Stack of runes + perfect gem + amulet/ring = craft
            </Typography>
          </ListItem>
        </List>
        {craftSections.map((section) => (
          <Box key={section.title} sx={{ mb: 1.5 }}>
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontWeight: 600,
                color: "#e67e22",
                fontSize: "0.85rem",
                mb: 0.5,
              }}
            >
              {section.title}
            </Typography>
            <List dense disablePadding>
              {section.items.map(([label, desc], i) => (
                <Recipe key={i} label={label} desc={desc} />
              ))}
            </List>
          </Box>
        ))}
      </ItemGroup>

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
    </Box>
  );
}
