import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ItemGroup } from "../components/ChangelogComponents";
import T from "../components/T";

function ItemDetail({
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

export default function ItemUpdates() {
  return (
    <Box>
      <ItemGroup title="New Items">
        <List dense disablePadding>
          {[
            "✅ Added new unique items - these items are not going to be announced, find them yourselves!",
            "✅ Added fire/cold/poison version of Griffon",
            "✅ Added upgradable charm - the base charm drops from Elders (currently upgrades are not implemented, but feel free to find the base charm. Will be announced later on.)",
          ].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography sx={{ fontSize: "0.9rem", color: "#27ae60" }}>
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>

      <ItemGroup title="Charm Update">
        <ItemDetail
          name="Gheed's Fortune"
          items={["Now includes: +20–40 Life, +1 All Skills"]}
        />
      </ItemGroup>

      <ItemGroup title="🌟 New Unique Charms">
        <ItemDetail
          name="Guru's Left Nut, Small Charm"
          sub="Drops from Champion Elders in hell"
          items={["+15-20 Life (varies)", "+10-15 All Resistances (varies)"]}
        />
        <ItemDetail
          name="Guru's Right Nut, Large Charm"
          sub="Drops from Champion Elders in hell"
          items={[
            "+0.5 Max Damage per Level",
            "+83 Attack Rating",
            "+5% Mana Leech",
            "+5% Life Leech",
          ]}
        />
      </ItemGroup>

      <ItemGroup title="🌟 New Unique Items">
        <ItemDetail
          name="Thauric, Colossus Girdle (Belt) - ilvl 85, req lvl 81"
          items={[
            "+15% Increased Attack Speed",
            "+100 to Attack Rating",
            "+10-20% Mana Leech (varies)",
            "+15% Deadly Strike",
            "+10-20 to Strength (varies)",
            "+20% Crushing Blow",
          ]}
        />
        <ItemDetail
          name="Ironhowl Grips, Vampirebone Gloves (Gloves) - ilvl 85, req lvl 74"
          items={[
            "+3 to Javelin and Spear skills",
            "+20% Increased Attack Speed",
            "+10-20 to Strength (varies)",
            "+10-20 to Dexterity (varies)",
            "Lightning Resist +15-25% (varies)",
          ]}
        />
        <ItemDetail
          name="Dragon Slayer, Bramble Mitts (Gloves)"
          items={[
            "+20% Faster Cast Rate",
            "+3-5 to All Attributes (varies)",
            "+20 to Mana",
            "Magic Damage Reduced by 20",
            "+25-75% Magic Find (varies)",
          ]}
        />
        <ItemDetail
          name="Archmage's Soul, Wyrmhide Boots (Boots)"
          items={[
            "+1 to All Skills",
            "+20% Faster Run/Walk",
            "+20% Faster Hit Recovery",
            "100-150% Enhanced Defense (varies)",
            "Half Freeze Duration",
            "Repairs 1 Durability in 20 Seconds",
          ]}
        />
      </ItemGroup>

      <ItemGroup title="🔄 Updated Unique Items">
        <ItemDetail
          name="Oculus"
          items={["TP proc replaced with Vigor aura 5-10lvl"]}
        />
        <ItemDetail
          name="Tyrael's Might"
          items={[
            "+1 to Teleport",
            "+2-3 to All Skills (varies)",
            "Level 5-10 Redemption Aura When Equipped (varies)",
          ]}
        />
        <ItemDetail
          name="Titan's Revenge"
          items={["Replenish quantity per 1 second"]}
        />
        <ItemDetail
          name="Andariel's Visage"
          items={["Fire resistance from -30% to +30%"]}
        />
        <ItemDetail
          name="Templar's Might"
          items={[
            "+1 to Teleport",
            "+2-3 to Class Skills (varies)",
            "-60% requirements",
          ]}
        />
      </ItemGroup>

      <ItemGroup title="Storage Updates">
        <List dense disablePadding>
          {[
            "Cube and Stash - increased size",
            "Tome portal/identify, key - stacks 200",
            "Arrows/bolts - stacks 500",
          ].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography sx={{ fontSize: "0.9rem", color: "#c9b8a0" }}>
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
      </ItemGroup>

      <ItemGroup title="Set Changes">
        <List dense disablePadding>
          {[
            "Natalya, Aldur, Immortal King, Griswold and Mavina's weapons removed from the set",
            "Trang's shield removed from the set.",
            "Trang's no longer transforms",
            "These weapons and the shield can still drop as separate items",
            "📦 Natalya, Aldur, IK, Tal Rasha, Griswold, Trang, Mavina, BulKathos sets get +1 to teleport",
          ].map((t, i) => (
            <ListItem key={i} disableGutters sx={{ py: "2px", pl: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: i === 4 ? "#27ae60" : "#c9b8a0",
                }}
              >
                <T>{t}</T>
              </Typography>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 1 }}>
          <Typography
            sx={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 600,
              color: "#e8d5b0",
              fontSize: "0.9rem",
            }}
          >
            Sazabi's Grand Tribute Set
          </Typography>
          <Typography
            sx={{
              fontSize: "0.82rem",
              color: "#a89070",
              fontStyle: "italic",
              pl: 1,
            }}
          >
            Weapon removed, added bonuses from D2R - can be used as merc set
          </Typography>
          {[
            "+16% Damage Reduction",
            "Poison length reduced by 75%",
            "+1 All Skills",
          ].map((t, i) => (
            <Typography
              key={i}
              sx={{ fontSize: "0.88rem", color: "#c9b8a0", pl: 2 }}
            >
              {t}
            </Typography>
          ))}
        </Box>
      </ItemGroup>
    </Box>
  );
}
