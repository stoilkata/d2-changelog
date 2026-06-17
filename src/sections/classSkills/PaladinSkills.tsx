import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function PaladinSkills() {
  return (
    <ClassGroup title={<T>✝️ Paladin</T>}>
      <SkillChange
        name="Fist of the Heavens"
        items={[
          <T>Now hits all enemies and delay is removed</T>,
          <T>Added synergy from Sanctuary Aura</T>,
          <T>
            Rescaled synergy damage to account for Sanctuary Aura synergy
            addition. Net damage increased.
          </T>,
        ]}
      />
      <SkillChange
        name="Holy Bolt"
        items={[
          <T>Now hits all enemies</T>,
          <T>Removed Blessed Hammer synergy</T>,
          <T>Increased damage scaling by 50%</T>,
          <T>Decreased damage synergy damage from 50% to 25%</T>,
          <T>Now jumps targets similar to Chain Lightning</T>,
        ]}
      />
      <SkillChange
        name="Blessed Hammer"
        items={[<T>Synergy damage increased from 14% to 16%</T>]}
      />
      <SkillChange
        name="Sanctuary Aura"
        items={[<T>Lowers enemies' magic resist</T>]}
      />
      <SkillChange name="Holy Shock" items={[<T>Now a self-buff</T>]} />
      <SkillChange name="Holy Freeze" items={[<T>Now a self-buff</T>]} />
      <SkillChange name="Holy Fire" items={[<T>Now a self-buff</T>]} />
    </ClassGroup>
  );
}
