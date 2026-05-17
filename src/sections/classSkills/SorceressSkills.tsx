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
        items={[<T>Delay reduced from 1.0 to 0.8</T>]}
      />
    </ClassGroup>
  );
}
