import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function NecromancerSkills() {
  return (
    <ClassGroup title={<T>💀 Necromancer</T>}>
      <SkillChange
        name="Corpse Explosion"
        items={[
          "Damage rescaled. Min damage = corpse explosion level / 2",
          "Max damage = corpse explosion level",
          "Damage is now 90% fire instead of 50/50 fire/physical",
        ]}
      />
      <SkillChange
        name="Life Tap"
        items={[<T>Life stolen reduced from 50% to 15%</T>]}
      />
      <SkillChange
        name="Amplify Magic (replaces Iron Maiden)"
        items={["New skill: Magic version of Amplify Damage"]}
      />
      <SkillChange
        name="Raise Skeletal Mage"
        items={["Mages now shoot Bone Spear - damage is improved by synergies"]}
      />
      <SkillChange
        name="Skeletons"
        items={[
          "Both skeleton warrior and skeleton mage have slightly increased health, defense, resistance, damage, and block",
        ]}
      />
      <SkillChange
        name="Bone Spear"
        items={[
          "Shoots multiple projectiles, increasing by 1 for every 15 levels (soft points)",
        ]}
      />
      <SkillChange
        name="Poison Orb (replaces Poison Dagger)"
        items={["New skill: Like Frozen Orb, but Poison"]}
      />
      <SkillChange
        name="Pestilence (replaces Poison Explosion)"
        items={[
          "New skill: Buff that deals poison damage to nearby enemies like an aura",
        ]}
      />
      <SkillChange
        name="Bone Spirit"
        items={["Synergies damage increased from 6% to 7%"]}
      />
      <SkillChange
        name="Revive"
        items={["Duration increased from 180 to 360"]}
      />
      <SkillChange
        name="Bone Armor replaced with Death"
        items={[
          "Transforms into a vampire, granting fire and poison damage, FRW, Bone Spear projectiles, lvl/6 skill life leech",
        ]}
      />
      <SkillChange
        name="Bone Wall replaced with Hellfire"
        items={["Casts fire pentagram on the ground."]}
      />
      <SkillChange
        name="Bone Prison replaced with Fire Nova"
        items={["Like Baal's Fire Nova"]}
      />
      <SkillChange
        name="Attack Order"
        items={[
          "New innate ability. BO-style buff which makes the summons attack your target.",
        ]}
      />
    </ClassGroup>
  );
}
