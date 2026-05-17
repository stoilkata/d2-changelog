import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function AmazonSkills() {
  return (
    <ClassGroup title={<T>🏹 Amazon</T>}>
      <SkillChange
        name="Charged Strike"
        items={[
          "Removed Lightning Fury synergy",
          "Other synergies increased from +10% ➝ +14%",
        ]}
      />
      <SkillChange
        name="Lightning Strike"
        items={["Removed lightning fury synergy", "% boosted from 8% to 11%"]}
      />
      <SkillChange
        name="Guided Arrow"
        items={["Added damage component", "Multiple Shot synergy: +12% damage"]}
      />
      <SkillChange
        name="Multiple Shot"
        items={["Added damage component", "Guided Arrow synergy: +12% damage"]}
      />
      <SkillChange
        name="Ice Arrow, Freezing Arrow, Exploding Arrow"
        items={["Now shoot 5 arrows"]}
      />
      <SkillChange name="Valkyrie" items={["Casting delay reduced to 0.6s"]} />
    </ClassGroup>
  );
}
