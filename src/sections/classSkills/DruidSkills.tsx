import { ClassGroup, SkillChange } from "../../components/ChangelogComponents";
import T from "../../components/T";

export default function DruidSkills() {
  return (
    <ClassGroup title={<T>🐺 Druid</T>}>
      <SkillChange
        name="Fire Claws"
        items={[
          <T>Reworked: Deals frontal cone splash fire damage</T>,
          "Synergy Molten Boulder changed to Armageddon",
          <T>All fire spells delays reduced to 20 frames</T>,
          <T>Can cast in bear/wolf form</T>,
        ]}
      />
      <SkillChange
        name="Glacial Fangs (replaces Hunger)"
        items={[
          "New skill: Deals frontal cone splash cold damage",
          "Receives bonuses from Tornado, Twister, Hurricane",
        ]}
      />
      <SkillChange
        name="Fissure"
        items={[<T>Can be cast in werewolf/werebear form</T>]}
      />
      <SkillChange
        name="Summon Spirit Wolf"
        items={["Number of summons rescaled to 5 + 1 per 20 points"]}
      />
      <SkillChange
        name="Summon Dire Wolf"
        items={["Number of summons rescaled to 3 + 1 per 20 points"]}
      />
      <SkillChange
        name="Summon Grizzly"
        items={["Number of summons rescaled to 1 + 1 per 20 points"]}
      />
      <SkillChange
        name="Summon Creatures"
        items={[
          "Grizzly/spirit wolf/dire wolf stats nerfed",
          "Can summon all animals at once - 8 spirit wolves, 5 dire wolves and 3 grizzlies",
          "Can summon all 3 spirits at once - Oak Sage, Heart of the Wolverine, Spirit of Barbs",
          "Spirit Wolf, Dire Wolf and Grizzly HP and damage increased (net positive despite stat nerf)",
        ]}
      />
      <SkillChange
        name="Primal Leap"
        items={[
          "Teleport that works only in werebear/werewolf form",
          "Can only be acquired via items",
          "Teleport on a 2 second cooldown",
        ]}
      />
      <SkillChange
        name="Avalanche (replaces Twister)"
        items={["New skill: Blizzard-type skill that does physical damage"]}
      />
      <SkillChange
        name="Tornado"
        items={[
          "Shoots multiple projectiles, increasing by 1 for every 20 levels (soft points)",
        ]}
      />
      <SkillChange
        name="Molten Boulder"
        items={[
          <T>Doubled travel speed</T>,
          "Volcano synergy increased from 10% to 12%",
        ]}
      />
      <SkillChange
        name="Volcano"
        items={["Molten Boulder synergy increased from 12% to 16%"]}
      />
      <SkillChange
        name="Armageddon"
        items={[
          "Removed requirement of Hurricane (still shows in the skilltree, but it's not needed)",
          "Increased missile damage radius by 33%",
          "Increased missile drop rate by 30%",
          "Volcano synergy increased from 14% to 18% (physical)",
          "Added physical damage component",
        ]}
      />
    </ClassGroup>
  );
}
