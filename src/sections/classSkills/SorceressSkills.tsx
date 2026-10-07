import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function SorceressSkills() {
  return (
    <ClassGroup title={<T>🔥 Sorceress</T>}>
      <SkillChange
        name="Thunderstorm"
        items={[<T>Releases Nova missiles on impact</T>]}
      />
      <SkillChange
        name="Hydra"
        items={[
          <T>Lowered cast delay</T>,
          <T>Max hydras increased to 6</T>,
          <T>Hydra shoots fireball instead of fire bolt</T>,
        ]}
      />
      <SkillChange
        name="Frost Nova"
        items={[
          <T>Damage scaling increased by ~25%</T>,
          <T>Synergies damage increased from 12% to 18%</T>,
        ]}
      />
      <SkillChange
        name="Nova"
        items={[<T>Added 5% damage per level synergy with Static Field</T>]}
      />
      <SkillChange
        name="Frozen Orb"
        items={[<T>Delay reduced from 1.0 to 0.4</T>]}
      />
      <SkillChange
        name="Shiver Armor (work in progress)"
        items={["work in progress"]}
      />
      <SkillChange
        name="Inferno replaced with Fire Shield"
        items={[
          "Self buff, increases chance to block, fire absorb and shoots a Fireball on block. Fireball damage is equal to skill's tooltip damage.",
        ]}
      />
      <SkillChange
        name="Blaze replaced with Pyroclasm"
        items={[
          "Fire whirlwind. Works only with Staves and Orbs. Does fire damage + 100% weapon damage as physical and leaves a trail of fire. Can proc chance to cast on attack/hit.",
        ]}
      />
      <SkillChange
        name="Fire Wall replaced with Infernal Fury"
        items={[
          "Passive. Getting hit gives you charges. For every X (scales with level) charges, you can release a Fire Nova when attacking with Pyroclasm or Normal Attack.",
        ]}
      />
      <SkillChange
        name="Enchant replaced with Flameforged"
        items={[
          "Old Enchant is still available on some items. Provides fire damage/AR bonus and shoots a Firebolt on attack.",
        ]}
      />
      <SkillChange
        name="Fire Mastery"
        items={["Gives less Fire Damage%, but also provides Fire Pierce."]}
      />
    </ClassGroup>
  );
}
