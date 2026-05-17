import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function PaladinSkills() {
  return (
    <ClassGroup title={<T>✝️ Paladin</T>}>
      <SkillChange
        name="Fist of the Heavens"
        items={[<T>Now hits all enemies and has reduced delay 0.4s</T>]}
      />
      <SkillChange
        name="Holy Bolt"
        items={[
          <T>Now hits all enemies</T>,
          <T>Removed Blessed Hammer synergy</T>,
          <T>Increased damage scaling by 50%</T>,
        ]}
      />
    </ClassGroup>
  );
}
