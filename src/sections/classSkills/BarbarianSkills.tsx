import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function BarbarianSkills() {
  return (
    <ClassGroup title={<T>⚔️ Barbarian</T>}>
      <SkillChange
        name="War Cry"
        items={[
          "Reworked: Initial cooldown 5.2s",
          "Stun length per level reduced from 5 frames (0.2s) to 2 frames (0.08s)",
          "Flat damage rescaled and 25% weapon damage added (now can proc life tap and steal life)",
          "Synergies reworked: now gets synergy from Shout (2 frames cooldown reduced per level = 0.8s), Battle Orders (2 frames cooldown reduced per level = 0.8s), and Cleave (10% damage per level)",
          "Improved damage scaling",
          "Increased range by ~25%",
          "Base mana cost lowered from 10 to 2, then 1 per level",
        ]}
      />
      <SkillChange
        name="Cleave (replaces Concentrate)"
        items={[
          <T>
            New skill: Deals frontal cone splash damage based on weapon damage
            (100%) and provides a damage and attack speed bonus for a short
            duration
          </T>,
        ]}
      />
      <SkillChange
        name="Battle Cry and Taunt"
        items={[
          "No longer considered curses, so they don't override other curses",
        ]}
      />
      <SkillChange
        name="Masteries"
        items={["Base attack rating increased to 40%"]}
      />
      <SkillChange
        name="Berserk"
        items={["Synergy Shout replaced with Battle Orders"]}
      />
      <SkillChange
        name="Whirlwind"
        items={[<T>Changed to classic Whirlwind - works independent of IAS</T>]}
      />
      <SkillChange
        name="Increased Speed"
        items={["Increases FCR", "Increases IAS"]}
      />
    </ClassGroup>
  );
}
