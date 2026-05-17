import { ItemGroup } from "../../components/ChangelogComponents";
import ItemDetail from "./ItemDetail";

export function CharmUpdateGroup() {
  return (
    <ItemGroup title="Charm Update">
      <ItemDetail
        name="Gheed's Fortune"
        items={["Now includes: +20–40 Life, +1 All Skills"]}
      />
    </ItemGroup>
  );
}

export function NewUniqueCharmsGroup() {
  return (
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
  );
}

export function NewUniqueItemsGroup() {
  return (
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
  );
}

export function UpdatedUniqueItemsGroup() {
  return (
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
  );
}
