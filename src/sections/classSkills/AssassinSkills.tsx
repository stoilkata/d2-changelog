import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function AssassinSkills() {
  return (
    <ClassGroup title={<T>🗡️ Assassin</T>}>
      <SkillChange
        name="Death Sentry"
        items={[
          "Corpse explosion damage reduced from 40-80 to 10-20",
          "Damage is 90% fire instead of 50/50 physical/fire",
          "Base radius reduced from 10 to 5 (still scales 1/level, 1 = 0.3y)",
          "Shots fired increased from 5 to 8",
        ]}
      />
      <SkillChange
        name="Charged Bolt Sentry replaced with Nova Sentry"
        items={[]}
      />
      <SkillChange
        name="Cloak of Shadows"
        items={[
          "No longer considered a curse, so it doesn't override other curses",
        ]}
      />
      <SkillChange name="Dragon Tail" items={["Radius increased"]} />
      <SkillChange
        name="Charge Up Skills"
        items={[
          "Don't lose charges on release",
          "Duration reduced from 15 to 5 seconds",
        ]}
      />
      <SkillChange
        name="Blade Storm (replaces Blade Sentinel)"
        items={[
          "Throws blades in all directions",
          "Can proc on striking effects",
        ]}
      />
      <SkillChange
        name="Blade Toss (replaces Blade Fury)"
        items={[
          "Throws multiple blades forward, max projectiles 7",
          "Can proc on striking effects",
          "Doesn't require standing still to cast",
        ]}
      />
      <SkillChange
        name="Blade Shield"
        items={[
          "Duration baseline value increased from 20 seconds to 120 seconds",
          "Duration scaling per level increased from 5 seconds to 12 seconds",
          "Weapon Damage increased from 25% to 75%",
          "Blade Sentinel synergy added: +10% Damage per level",
          "Blade Fury synergy added: +10% Damage per level",
        ]}
      />
      <SkillChange
        name="Blade Synergies"
        items={[
          "Blade Storm and Blade Toss synergize with each other",
          "Blade Shield synergy removed",
        ]}
      />
      <SkillChange
        name="Wake of Fire"
        items={[
          "Synergy damage increased from 11% to 16%",
          "Improved damage scaling",
        ]}
      />
      <SkillChange
        name="Shadow Master / Shadow Warrior"
        items={["Casting delay reduced to 0.6s"]}
      />
    </ClassGroup>
  );
}
