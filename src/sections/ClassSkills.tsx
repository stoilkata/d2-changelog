import Box from "@mui/material/Box";
import { ClassGroup, SkillChange } from "../components/ChangelogComponents";
import T from "../components/T";

export default function ClassSkills() {
  return (
    <Box>
      {/* SORCERESS */}
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

      {/* NECROMANCER */}
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
          items={[
            "Mages now shoot Bone Spear - damage is improved by synergies",
          ]}
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
          name="Bone Armor"
          items={["Damage absorb per level increased from 10 to 15"]}
        />
        <SkillChange
          name="Revive"
          items={["Duration increased from 180 to 360"]}
        />
        <SkillChange
          name="Bone Armor replaced with Death"
          items={[
            "Transforms into a vampire, granting fire and poison damage, FCR and Bone Spear projectiles",
          ]}
        />
        <SkillChange
          name="Bone Wall replaced with Hellfire"
          items={["Like Diablo's Firestorm"]}
        />
        <SkillChange
          name="Bone Prison replaced with Fire Nova"
          items={["Like Poison Nova but releases Fire Ball"]}
        />
      </ClassGroup>

      {/* PALADIN */}
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

      {/* AMAZON */}
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
          items={[
            "Added damage component",
            "Multiple Shot synergy: +12% damage",
          ]}
        />
        <SkillChange
          name="Multiple Shot"
          items={[
            "Added damage component",
            "Guided Arrow synergy: +12% damage",
          ]}
        />
        <SkillChange
          name="Ice Arrow, Freezing Arrow, Exploding Arrow"
          items={["Now shoot 5 arrows"]}
        />
        <SkillChange
          name="Valkyrie"
          items={["Casting delay reduced to 0.6s"]}
        />
      </ClassGroup>

      {/* DRUID */}
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

      {/* ASSASSIN */}
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

      {/* BARBARIAN */}
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
            "New skill: Deals frontal cone splash damage based on weapon damage (100%)",
            "Initial cooldown is 1.6s",
            "Each level lowers the cooldown until it has no cooldown at level 20 (hard points)",
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
          items={[
            <T>Changed to classic Whirlwind - works independent of IAS</T>,
          ]}
        />
        <SkillChange
          name="Increased Speed"
          items={["Increases FCR", "Increases IAS"]}
        />
      </ClassGroup>
    </Box>
  );
}
