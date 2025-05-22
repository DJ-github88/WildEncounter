// Base abilities for the Toxicologist class
const toxicologistAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Vials, Reagents & Contraptions',
    description: 'The Toxicologist is a combat alchemist who makes, applies, and deploys deadly poisons and field gadgets. In play, the class feels like a mobile chem‑warrior: always mixing a new vial, loading darts, or dropping a gas bomb. You win by stacking poison effects, shaping the battlefield with contraptions, and knowing exactly when to drink your own antidote.',
    mechanics: [
      'Vials (max = INT + 3): Hold finished poisons or antidotes. Craft as an action, start each combat with 2 free vials. Spend 1 to trigger most Toxicologist abilities.',
      'Reagents (points): Fuel on‑the‑fly concoctions. Gain 1 point per turn (free), +1 on a critical hit. Spend 1‑3 to boost a vial\'s effect.',
      'Contraption Slots (2): Carry deployable gadgets. Long‑rest reset. 1 slot = one active gadget on the field.',
      'Poison stacks tick at the start of the target\'s turn for 1 damage / stack and fade after they take damage twice.'
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Quick Mix',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Craft one basic vial (choose poison, antidote, or smoke).',
      mechanics: 'Create one vial of your choice: poison (for offensive abilities), antidote (for healing), or smoke (for utility).',
      effects: [
        { condition: 'Poison Vial', effect: 'Can be used with Venom Dart or Coated Blade' },
        { condition: 'Antidote Vial', effect: 'Can be used with Minor Antidote' },
        { condition: 'Smoke Vial', effect: 'Creates a 10-ft lightly-obscured zone when thrown' },
        { condition: 'Chemistry Talents', effect: 'May enhance vial creation' }
      ],
      scaling: 'Maximum vials = INT modifier + 3'
    },
    {
      name: 'Venom Dart',
      cost: {
        actionPoints: 1,
        mana: 1,
        vials: 1
      },
      description: 'Ranged. Deal 1d6 + DEX damage. Target gains 2 Poison stacks.',
      mechanics: 'Fire a poisoned dart at a target within 60 ft. On hit, deals 1d6 + DEX piercing damage and applies 2 Poison stacks.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d6 + DEX piercing damage' },
        { condition: 'Poison', effect: 'Target gains 2 Poison stacks' },
        { condition: 'Venom Arts Talents', effect: 'May enhance poison effects' }
      ],
      scaling: 'Damage = 1d6 + DEX modifier'
    },
    {
      name: 'Coated Blade',
      cost: {
        actionPoints: 1,
        mana: 0,
        vials: 1
      },
      description: 'Until end of next turn your melee hits add 1 Poison stack.',
      mechanics: 'Coat your weapon with poison. Until the end of your next turn, your melee weapon attacks apply 1 Poison stack on hit.',
      effects: [
        { condition: 'Duration', effect: 'Until the end of your next turn' },
        { condition: 'Melee Hit', effect: 'Apply 1 Poison stack' },
        { condition: 'Venom Arts Talents', effect: 'May enhance duration or poison effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Minor Antidote',
      cost: {
        actionPoints: 1,
        mana: 1,
        vials: 1
      },
      description: 'Remove 2 conditions or heal 1d8 + INT HP (ally or self).',
      mechanics: 'Administer an antidote to yourself or an ally within touch range. Either remove up to 2 negative conditions or heal 1d8 + INT hit points.',
      effects: [
        { condition: 'Healing', effect: 'Heal 1d8 + INT hit points' },
        { condition: 'Cleansing', effect: 'Remove up to 2 negative conditions (poison, disease, etc.)' },
        { condition: 'Chemistry Talents', effect: 'May enhance healing or cleansing effects' }
      ],
      scaling: 'Healing = 1d8 + INT modifier'
    },
    {
      name: 'Tangle Trap',
      cost: {
        actionPoints: 2,
        mana: 1,
        contraptions: 1
      },
      description: 'Place a 10‑ft snare. First creature entering is rooted 1 turn and gains 1 Poison stack.',
      mechanics: 'Place a snare trap in a 10-ft area. The first creature that enters the area is rooted for 1 turn and gains 1 Poison stack.',
      effects: [
        { condition: 'Trigger', effect: 'First creature entering the area' },
        { condition: 'Root', effect: 'Target is rooted (cannot move) for 1 turn' },
        { condition: 'Poison', effect: 'Target gains 1 Poison stack' },
        { condition: 'Contraptioneer Talents', effect: 'May enhance trap effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + DEX modifier'
    },
    {
      name: 'Catalyze',
      cost: {
        actionPoints: 1,
        mana: 0,
        reagents: '1-3'
      },
      description: 'Choose a poisoned target. Each Reagent spent deals 1d4 true damage per Poison stack on that target. Removes all stacks.',
      mechanics: 'Target a poisoned creature within 60 ft. For each Reagent spent (1-3), deal 1d4 true damage per Poison stack on the target. This removes all Poison stacks from the target.',
      effects: [
        { condition: 'Damage', effect: '1d4 true damage per Poison stack per Reagent spent' },
        { condition: 'Stack Removal', effect: 'Removes all Poison stacks from the target' },
        { condition: 'Venom Arts Talents', effect: 'May enhance damage or add additional effects' }
      ],
      scaling: 'Damage = 1d4 per Poison stack per Reagent spent'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Neurotoxin Needle',
      cost: {
        actionPoints: 1,
        mana: 2,
        vials: 1
      },
      description: 'Melee or 30‑ft dart. Target saves vs CON. Fail → stunned 1 turn. Success → 2 Poison stacks.',
      mechanics: 'Attack a target in melee or up to 30 ft away with a neurotoxin-coated needle. Target must make a CON save. On failure, they are stunned for 1 turn. On success, they gain 2 Poison stacks.',
      effects: [
        { condition: 'Failed Save', effect: 'Target is stunned for 1 turn' },
        { condition: 'Successful Save', effect: 'Target gains 2 Poison stacks' },
        { condition: 'Venom Arts Talents', effect: 'May enhance stun duration or poison effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + INT modifier'
    },
    {
      name: 'Volatile Flask',
      cost: {
        actionPoints: 2,
        mana: 3,
        vials: 1,
        reagents: 2
      },
      description: '15‑ft cone fire burst. Deal 3d6 + INT fire. Ignites enemies (1d6 burn next turn).',
      mechanics: 'Throw a volatile flask that creates a 15-ft cone of fire. Deals 3d6 + INT fire damage and ignites enemies, causing them to take 1d6 fire damage at the start of their next turn.',
      effects: [
        { condition: 'Initial Damage', effect: '3d6 + INT fire damage' },
        { condition: 'Ignite', effect: 'Targets take 1d6 fire damage at the start of their next turn' },
        { condition: 'Chemistry Talents', effect: 'May enhance damage or ignite effects' }
      ],
      scaling: 'Initial damage = 3d6 + INT modifier, Burn damage = 1d6'
    },
    {
      name: 'Gas Mine',
      cost: {
        actionPoints: 2,
        mana: 2,
        contraptions: 1
      },
      description: 'Hidden 5‑ft node. When triggered fills 20‑ft cloud 2 turns: creatures start with 2 Poison stacks and disadvantage on attacks.',
      mechanics: 'Place a hidden gas mine. When triggered, it creates a 20-ft radius cloud that lasts for 2 turns. Creatures that start their turn in the cloud gain 2 Poison stacks and have disadvantage on attack rolls.',
      effects: [
        { condition: 'Trigger', effect: 'Creates a 20-ft radius cloud for 2 turns' },
        { condition: 'Cloud Effect', effect: 'Creatures starting their turn in the cloud gain 2 Poison stacks and have disadvantage on attack rolls' },
        { condition: 'Contraptioneer Talents', effect: 'May enhance cloud duration or effects' }
      ],
      scaling: 'Cloud radius = 20 ft, Duration = 2 turns'
    },
    {
      name: 'Adrenal Surge',
      cost: {
        actionPoints: 1,
        mana: 2,
        hpSacrifice: 10
      },
      description: 'Gain +2 AP and +10 ft speed this turn. Free action to drink self‑crafted stim.',
      mechanics: 'Sacrifice 10 HP to inject yourself with an adrenal stimulant. Gain +2 AP and +10 ft movement speed for this turn. This is a free action if you drink a self-crafted stimulant.',
      effects: [
        { condition: 'AP Boost', effect: 'Gain +2 AP for this turn' },
        { condition: 'Speed Boost', effect: 'Gain +10 ft movement speed for this turn' },
        { condition: 'HP Cost', effect: 'Sacrifice 10 HP' },
        { condition: 'Chemistry Talents', effect: 'May reduce HP cost or enhance effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Spore Bomb',
      cost: {
        actionPoints: 2,
        mana: 3,
        vials: 1
      },
      description: 'Lob 30 ft. 10‑ft blast: all in area take 2d8 poison and gain 3 Poison stacks.',
      mechanics: 'Throw a spore bomb up to 30 ft away. Creates a 10-ft radius blast that deals 2d8 poison damage and applies 3 Poison stacks to all creatures in the area.',
      effects: [
        { condition: 'Damage', effect: '2d8 poison damage' },
        { condition: 'Poison', effect: 'Targets gain 3 Poison stacks' },
        { condition: 'Chemistry Talents', effect: 'May enhance damage or poison effects' }
      ],
      scaling: 'Damage = 2d8 poison'
    },
    {
      name: 'Field Extraction',
      cost: {
        actionPoints: 1,
        mana: 2,
        vials: 1
      },
      description: 'Touch ally. Transfer up to 3 negative stacks/conditions to yourself, then remove half with an Antidote.',
      mechanics: 'Touch an ally to transfer up to 3 negative conditions or poison stacks from them to yourself. Then, automatically remove half of those conditions from yourself using an antidote.',
      effects: [
        { condition: 'Transfer', effect: 'Transfer up to 3 negative conditions or poison stacks from ally to yourself' },
        { condition: 'Self-Cleanse', effect: 'Remove half of the transferred conditions from yourself' },
        { condition: 'Chemistry Talents', effect: 'May enhance transfer or cleansing effects' }
      ],
      scaling: 'Maximum conditions transferred = 3'
    },
    {
      name: 'Black Lotus Cocktail',
      cost: {
        actionPoints: 3,
        mana: 4,
        vials: 3,
        reagents: 3
      },
      description: 'Choose one creature in 30 ft. They take 6d8 poison now and at the start of their next turn. Heal HP equal to half damage dealt. If the target dies under the effect, immediately refresh all Vials and Reagents.',
      mechanics: 'Target a creature within 30 ft with your ultimate poison. The target takes 6d8 poison damage immediately and again at the start of their next turn. You heal for half the total damage dealt. If the target dies while under this effect, immediately refresh all your Vials and Reagents.',
      effects: [
        { condition: 'Initial Damage', effect: '6d8 poison damage immediately' },
        { condition: 'Delayed Damage', effect: '6d8 poison damage at the start of the target\'s next turn' },
        { condition: 'Healing', effect: 'Heal for half the total damage dealt' },
        { condition: 'Kill Effect', effect: 'If the target dies under this effect, immediately refresh all Vials and Reagents' }
      ],
      scaling: 'Damage = 6d8 poison per instance'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    chemistry: [
      {
        name: 'Refined Toxin',
        description: 'Each basic vial adds +1 Poison stack.',
        mechanics: 'When using a basic vial with Venom Dart or Coated Blade, add +1 Poison stack to the effect.',
        requirements: 'Requires points in the Chemistry talent tree.'
      },
      {
        name: 'Stabilizer',
        description: 'Brewing no longer costs AP outside combat.',
        mechanics: 'Quick Mix does not cost AP when used outside of combat.',
        requirements: 'Requires points in the Chemistry talent tree.'
      },
      {
        name: 'Corrosive Blend',
        description: 'Poison stacks also reduce target AC 1 per 2 stacks.',
        mechanics: 'For every 2 Poison stacks on a target, their AC is reduced by 1.',
        requirements: 'Requires points in the Chemistry talent tree.'
      },
      {
        name: 'Panacea Mastery',
        description: 'Antidotes cost 0 Mana and remove all conditions.',
        mechanics: 'Minor Antidote costs 0 Mana and removes all negative conditions instead of just 2.',
        requirements: 'Requires points in the Chemistry talent tree. (Capstone)'
      }
    ],
    contraptioneer: [
      {
        name: 'Extra Slot',
        description: 'Carry a third gadget.',
        mechanics: 'Gain an additional Contraption Slot (3 total).',
        requirements: 'Requires points in the Contraptioneer talent tree.'
      },
      {
        name: 'Remote Detonator',
        description: 'Spend 1 AP to trigger any placed device.',
        mechanics: 'You can spend 1 AP to remotely trigger any of your placed contraptions.',
        requirements: 'Requires points in the Contraptioneer talent tree.'
      },
      {
        name: 'Reinforced Casing',
        description: 'Mines and traps gain +10 HP.',
        mechanics: 'Your contraptions gain +10 HP, making them more difficult to destroy.',
        requirements: 'Requires points in the Contraptioneer talent tree.'
      },
      {
        name: 'Arsenal Overload',
        description: 'Placing a gadget refunds 1 AP and 1 Mana.',
        mechanics: 'When you place a contraption, you regain 1 AP and 1 Mana.',
        requirements: 'Requires points in the Contraptioneer talent tree. (Capstone)'
      }
    ],
    venomArts: [
      {
        name: 'Toxic Coating',
        description: 'Coated Blade lasts 3 turns.',
        mechanics: 'Coated Blade lasts for 3 turns instead of until the end of your next turn.',
        requirements: 'Requires points in the Venom Arts talent tree.'
      },
      {
        name: 'Bloodrot',
        description: 'Poison ticks deal +DEX damage.',
        mechanics: 'Add your DEX modifier to the damage dealt by Poison stacks when they tick.',
        requirements: 'Requires points in the Venom Arts talent tree.'
      },
      {
        name: 'Hemotoxin',
        description: 'Catalyze also stuns if it deals 10+ damage.',
        mechanics: 'If Catalyze deals 10 or more damage, the target is also stunned for 1 round.',
        requirements: 'Requires points in the Venom Arts talent tree.'
      },
      {
        name: 'Assassin\'s Zenith',
        description: 'First attack each combat automatically inflicts 5 Poison stacks.',
        mechanics: 'Your first attack in each combat automatically applies 5 Poison stacks, regardless of the ability used.',
        requirements: 'Requires points in the Venom Arts talent tree. (Capstone)'
      }
    ]
  }
};

export default toxicologistAbilities;
