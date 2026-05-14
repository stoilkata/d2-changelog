export type Lang = "en" | "bg";

export const translations = {
  en: {
    nav: { title: "Oblivion", home: "Home", changelog: "Changelog" },
    home: {
      title: "Enter Oblivion",
      subtitle:
        "A custom Diablo II server focused on meaningful endgame systems, faster progression windows, and fresh build variety.",
      cards: {
        terrorZones: {
          title: "⚡ Terror Zones",
          description:
            "Rotating high-pressure zones with boosted density and reward-focused farming paths.",
        },
        timedExpEvents: {
          title: "⏳ Timed EXP Events",
          description:
            "Scheduled experience windows to help you push levels and catch up with your group.",
        },
        craftingMechanics: {
          title: "🧪 Improved Crafting",
          description:
            "Expanded crafting outcomes and recipe depth, designed to make item progression more fun.",
        },
        spellChanges: {
          title: "🔮 Spell Changes",
          description:
            "Large-scale class and skill reworks that open new archetypes and rebalance old favorites.",
        },
        corruptionMechanics: {
          title: "☄️ Corruption Mechanics",
          description:
            "Corrupt items for new stat outcomes and risk/reward gearing decisions in endgame.",
        },
        newMaps: {
          title: "🗺️ New Maps",
          description:
            "Additional map content with unique loot opportunities and dedicated farming variety.",
        },
        newItems: {
          title: "🧱 New Items (Unique/Runewords)",
          description:
            "Fresh unique items and runewords with new power spikes, item goals, and build-defining options.",
        },
        improvedMercenaries: {
          title: "🎯 Improved Mercenaries",
          description:
            "Mercenaries are reworked with stronger scaling, expanded gear slots, and more meaningful support roles.",
        },
        biggerStorage: {
          title: "📦 Bigger Stash/Cube/Inventory",
          description:
            "More storage space plus a dedicated charm zone in inventory, so you can farm longer and organize gear easier.",
        },
      },
    },
    changelog: {
      title: "Changelog",
      mercenaryUpdates: "🎯 Mercenary Updates",
      generalChanges: "💀 General Changes",
      terrorZones: "⚡ Terror Zones",
      classSkills: "🔮 Class Skill Changes",
      newAreas: "🗺️ New Level 85 Areas",
      gambling: "💸 Gambling Changes",
      difficulty: "⚰️ Difficulty & Penalties",
      monsters: "😈 Monster Buffs",
      uiZones: "🎨 UI & Zone Changes",
      items: "🎁 Item Updates",
      cubeRecipes: "🧙 Cube Recipes",
      runewords: "🧱 New Runewords",
    },
    mercenaries: {
      act1ColdNormal: "Act 1 - Cold Merc (Normal)",
      act1FireNormal: "Act 1 - Fire Merc (Normal)",
      act1ColdNmHell: "Act 1 - Cold Merc (NM & Hell)",
      act1FireNmHell: "Act 1 - Fire Merc (NM & Hell)",
      act2DefensiveHell: "Act 2 - Defensive Merc (Hell)",
      act2OffensiveHell: "Act 2 - Offensive Merc (Hell)",
      act2CombatHell: "Act 2 - Combat Merc (Hell)",
      act3FireNormal: "Act 3 - Fire Merc (Normal)",
      act3LightningNormal: "Act 3 - Lightning Merc (Normal)",
      act3ColdNormal: "Act 3 - Cold Merc (Normal)",
      act3FireNmHell: "Act 3 - Fire Merc (NM & Hell)",
      act3LightningNmHell: "Act 3 - Lightning Merc (NM & Hell)",
      act3ColdNmHell: "Act 3 - Cold Merc (NM & Hell)",
      act5Offensive: "Act 5 Merc - Offensive",
      act5Combat: "Act 5 Merc - Combat",
      generalImprovements: "General Mercenary Improvements",
      newMercenaries: "New Mercenaries",
      skills: "Skills",
    },
    language: { label: "Language", english: "English", bulgarian: "Български" },
  },
  bg: {
    nav: { title: "Oblivion", home: "Начало", changelog: "Промени" },
    home: {
      title: "Влез в Oblivion",
      subtitle:
        "Custom Diablo II сървър с фокус върху силен endgame, по-бърз прогрес в определени прозорци и по-голямо билд разнообразие.",
      cards: {
        terrorZones: {
          title: "⚡ Terror Zones",
          description:
            "Ротация на трудни зони с повишена density и по-добри възможности за фарм.",
        },
        timedExpEvents: {
          title: "⏳ Timed EXP Events",
          description:
            "Планирани EXP прозорци, с които качвате нива по-бързо и наваксвате по-лесно с другите.",
        },
        craftingMechanics: {
          title: "🧪 По-добро Crafting",
          description:
            "По-дълбоки рецепти и по-голяма стойност от craft системите за реален item прогрес.",
        },
        spellChanges: {
          title: "🔮 Промени по уменията",
          description:
            "Мащабни промени по класове и умения, които отварят нови билдове и meta възможности.",
        },
        corruptionMechanics: {
          title: "☄️ Corruption механики",
          description:
            "Corrupt-вай предмети за нови stat варианти и по-интересни решения за endgame екипировка.",
        },
        newMaps: {
          title: "🗺️ Нови maps",
          description:
            "Ново map съдържание с уникален loot потенциал и допълнителни фарм маршрути.",
        },
        newItems: {
          title: "🧱 Нови предмети (Unique/Runewords)",
          description:
            "Нови unique items и runewords с по-силен прогрес, нови цели и по-ясна билд идентичност.",
        },
        improvedMercenaries: {
          title: "🎯 Подобрени наемници",
          description:
            "Merc-овете са с по-добро scaling, повече слотове за екипировка и по-важна роля в endgame.",
        },
        biggerStorage: {
          title: "📦 По-голям Stash/Cube/Inventory",
          description:
            "Повече място плюс dedicated charm зона в inventory-то, за да фармите по-дълго и да подреждате loot-а по-лесно.",
        },
      },
    },
    changelog: {
      title: "Промени",
      mercenaryUpdates: "🎯 Актуализации на наемниците",
      generalChanges: "💀 Общи промени",
      terrorZones: "⚡ Зони на терора",
      classSkills: "🔮 Промени в уменията на класовете",
      newAreas: "🗺️ Нови области от ниво 85",
      gambling: "💸 Промени в хазарта",
      difficulty: "⚰️ Трудност и наказания",
      monsters: "😈 Подобрения на чудовищата",
      uiZones: "🎨 UI и промени в зоните",
      items: "🎁 Актуализации на предметите",
      cubeRecipes: "🧙 Рецепти за куба",
      runewords: "🧱 Нови рунни думи",
    },
    mercenaries: {
      act1ColdNormal: "Акт 1 - Студен наемник (Нормално)",
      act1FireNormal: "Акт 1 - Огнен наемник (Нормално)",
      act1ColdNmHell: "Акт 1 - Студен наемник (НТ и Ад)",
      act1FireNmHell: "Акт 1 - Огнен наемник (НТ и Ад)",
      act2DefensiveHell: "Акт 2 - Защитен наемник (Ад)",
      act2OffensiveHell: "Акт 2 - Атакуващ наемник (Ад)",
      act2CombatHell: "Акт 2 - Боен наемник (Ад)",
      act3FireNormal: "Акт 3 - Огнен наемник (Нормално)",
      act3LightningNormal: "Акт 3 - Светкавичен наемник (Нормално)",
      act3ColdNormal: "Акт 3 - Студен наемник (Нормално)",
      act3FireNmHell: "Акт 3 - Огнен наемник (НТ и Ад)",
      act3LightningNmHell: "Акт 3 - Светкавичен наемник (НТ и Ад)",
      act3ColdNmHell: "Акт 3 - Студен наемник (НТ и Ад)",
      act5Offensive: "Акт 5 наемник - Атакуващ",
      act5Combat: "Акт 5 наемник - Боен",
      generalImprovements: "Общи подобрения на наемниците",
      newMercenaries: "Нови наемници",
      skills: "Умения",
    },
    language: { label: "Език", english: "English", bulgarian: "Български" },
  },
} as const;

// ------- Bulgarian inline-content translation helpers -------

const bgSectionReplacements: [string, string][] = [
  ["🔥 Sorceress", "🔥 Магьосница"],
  ["💀 Necromancer", "💀 Некромант"],
  ["✝️ Paladin", "✝️ Паладин"],
  ["🏹 Amazon", "🏹 Амазонка"],
  ["🐺 Druid", "🐺 Друид"],
  ["🗡️ Assassin", "🗡️ Асасин"],
  ["⚔️ Barbarian", "⚔️ Варвар"],
  [
    "All mercs: life and life/lvl increased by 30%, def and def/lvl increased by 15%",
    "Всички merc-та: life и life/lvl са вдигнати с 30%, а def и def/lvl с 15%",
  ],
  [
    "✅ Mercenaries can now wear boots, belt and gloves, too!",
    "✅ Merc-овете вече могат да носят и boots, belt и gloves!",
  ],
  ["❌ Cow King removed", "❌ Cow King е махнат"],
  [
    "✅ Secret Cow Level is now opened with Key + Tome of Town Portal",
    "✅ Secret Cow Level вече се отваря с Key + Tome of Town Portal",
  ],
  [
    "✅ Crafted items can now be recrafted",
    "✅ Crafted items вече могат да се recraft-ват",
  ],
  [
    "Bosses loot is the same as the first kill (Quest)",
    "Boss loot-ът е като при първо убийство (Quest)",
  ],
  [
    "🔁 Akara and Larzuk quests are repeatable",
    "🔁 Quest-овете на Akara и Larzuk вече са repeatable",
  ],
  [
    "🔁 Thrown weapons and arrows/bolts don't lose quantity",
    "🔁 Throw оръжията и arrows/bolts вече не губят количество",
  ],
  [
    "💥 Damage Reduced % cap increased from 50% to 80%",
    "💥 Капът на Damage Reduced % е вдигнат от 50% на 80%",
  ],
  [
    "➕ Added physical and magic pierce",
    "➕ Добавен е physical и magic pierce",
  ],
  ["Stack up to 20 for 1-15 runes", "Стак до 20 за 1-15 runes"],
  ["Stack up to 10 for 15-33 runes", "Стак до 10 за 15-33 runes"],
  ["Stack up to 50 for gems", "Стак до 50 за gems"],
  ["Density increased by 30%", "Density е увеличена с 30%"],
  ["Champions increased by 50%", "Champion pack-овете са увеличени с 50%"],
  [
    "On Normal and Nightmare difficulty, area lvl will be increased by 10%",
    "На Normal и Nightmare area lvl се вдига с 10%",
  ],
  ["On Hell, area lvl will be set to 90", "На Hell area lvl става 90"],
  ["Updated Gambling Odds:", "Обновени Gambling шансове:"],
  [
    "🎲 Rare: 1/8 (was 1/10) - 20% increase",
    "🎲 Rare: 1/8 (беше 1/10) - +20% шанс",
  ],
  [
    "🟢 Set: 1/200 (was 1/2000) - 1000% increase",
    "🟢 Set: 1/200 (беше 1/2000) - +1000% шанс",
  ],
  [
    "Hell monsters: +30% HP & Damage, -20% Exp",
    "Hell monster-ите: +30% HP и Damage, -20% Exp",
  ],
  ["85+ Zones: +15–25% monster density", "85+ зони: +15–25% monster density"],
  [
    "Elder monsters in Act 1 Hole Level 1",
    "Elder monster-и в Act 1 Hole Level 1",
  ],
  [
    "Stash: Max gold increased to 10 million",
    "Stash: max gold е вдигнат до 10 милиона",
  ],
  [
    "Inventory: Increased to 8x10, added charm zone in the bottom half",
    "Inventory: увеличен до 8x10, добавена е charm зона в долната половина",
  ],
  [
    "Now includes: +20–40 Life, +1 All Skills",
    "Вече дава: +20–40 Life, +1 All Skills",
  ],
  ["Drops from Champion Elders in hell", "Пада от Champion Elders в hell"],
  [
    "TP proc replaced with Vigor aura 5-10lvl",
    "TP proc-ът е заменен с Vigor aura 5-10 lvl",
  ],
  ["Releases Nova missiles on impact", "Пуска Nova missiles при удар"],
  ["Lowered cast delay", "Намален cast delay"],
  ["Max hydras increased to 6", "Максималните hydra-и са вдигнати на 6"],
  [
    "Hydra shoots fireball instead of fire bolt",
    "Hydra стреля fireball вместо fire bolt",
  ],
  ["Damage scaling increased by ~25%", "Damage scaling-ът е вдигнат с ~25%"],
  [
    "Synergies damage increased from 12% to 18%",
    "Synergy damage е вдигнат от 12% на 18%",
  ],
  [
    "Added 5% damage per level synergy with Static Field",
    "Добавена е 5% damage per level synergy със Static Field",
  ],
  ["Delay reduced from 1.0 to 0.8", "Delay-ят е намален от 1.0 на 0.8"],
  [
    "Life stolen reduced from 50% to 15%",
    "Life steal-ът е намален от 50% на 15%",
  ],
  [
    "Now hits all enemies and has reduced delay 0.4s",
    "Вече удря всички врагове и има намален delay 0.4s",
  ],
  ["Now hits all enemies", "Вече удря всички врагове"],
  ["Removed Blessed Hammer synergy", "Махната е synergy-та с Blessed Hammer"],
  ["Increased damage scaling by 50%", "Damage scaling-ът е вдигнат с 50%"],
  [
    "Reworked: Deals frontal cone splash fire damage",
    "Rework-нато: нанася frontal cone splash fire damage",
  ],
  [
    "All fire spells delays reduced to 20 frames",
    "Delay-ят на всички fire spells е намален до 20 frames",
  ],
  ["Can cast in bear/wolf form", "Може да се каства в bear/wolf форма"],
  [
    "Can be cast in werewolf/werebear form",
    "Може да се каства във werewolf/werebear форма",
  ],
  ["Doubled travel speed", "Скоростта на движение е удвоена"],
  [
    "Changed to classic Whirlwind - works independent of IAS",
    "Сменен е към classic Whirlwind - работи независимо от IAS",
  ],
  [
    "Now needs only 1 Zod rune instead of 3",
    "Вече иска само 1 Zod rune вместо 3",
  ],
  [
    "Jewels removed from crafting recipes!",
    "Jewels са махнати от crafting рецептите!",
  ],
  ["Cube and Stash - increased size", "Cube и Stash - увеличен размер"],
  [
    "Now works in bows and swords (in addition to existing bases)",
    "Вече работи и в bows и swords (освен старите бази)",
  ],
  ["Can also be made in Amazon spears", "Може да се прави и в Amazon spears"],
];

const bgGenericReplacements: [RegExp, string][] = [
  [/\bNew skill:/g, "Ново умение:"],
  [/\bLevel\b/g, "Lvl"],
  [/\bNormal\b/g, "Нормално"],
  [/\bFaster Cast Rate\b/g, "FCR"],
  [/\bFaster Hit Recovery\b/g, "FHR"],
  [/\bFaster Run\/Walk\b/g, "FRW"],
  [/\bIncreased Attack Speed\b/g, "IAS"],
  [/\bAttack Rating\b/g, "AR"],
  [/\bMagic Find\b/g, "MF"],
  [/\bAll Resistances\b/g, "All Resist"],
  [/\bEnhanced Damage\b/g, "Enhanced Damage"],
  [/\bEnhanced Defense\b/g, "Enhanced Defense"],
  [/\bCannot Be Frozen\b/g, "Cannot Be Frozen"],
];

export function translateText(text: string, lang: Lang): string {
  if (lang === "en") return text;
  let result = text;
  for (const [from, to] of bgSectionReplacements) {
    result = result.split(from).join(to);
  }
  for (const [pattern, replacement] of bgGenericReplacements) {
    result = result.replace(pattern, replacement);
  }
  return result;
}
