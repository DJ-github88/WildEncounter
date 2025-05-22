// Import Mystic Path talent trees
import pyrofiendTalentTrees from './mystic/pyrofiend';
import minstrelTalentTrees from './mystic/minstrel';
import chronarchTalentTrees from './mystic/chronarch';

// Import Trickster Path talent trees
import chaosWeaverTalentTrees from './trickster/chaos-weaver';
import fateWeaverTalentTrees from './trickster/fate-weaver';
import gamblerTalentTrees from './trickster/gambler.jsx';

// Import Zealot Path talent trees
import martyrTalentTrees from './zealot/martyr';
import falseProphetTalentTrees from './zealot/false-prophet';
import exorcistTalentTrees from './zealot/exorcist';

// Import Harrow Path talent trees
import deathcallerTalentTrees from './harrow/deathcaller';
import plaguebringerTalentTrees from './harrow/plaguebringer';
import lichborneTalentTrees from './harrow/lichborne';

// Import Arcanist Path talent trees
import spellguardTalentTrees from './arcanist/spellguard';
import inscriptorTalentTrees from './arcanist/inscriptor';
import arcanoneerTalentTrees from './arcanist/arcanoneer';

// Import Hexer Path talent trees
import witchDoctorTalentTrees from './hexer/witch-doctor';
import formbenderTalentTrees from './hexer/formbender';
import primalistTalentTrees from './hexer/primalist';

// Import Reaver Path talent trees
import berserkerTalentTrees from './reaver/berserker';
import dreadnaughtTalentTrees from './reaver/dreadnaught';
import titanTalentTrees from './reaver/titan';

// Import Mercenary Path talent trees
import toxicologistTalentTrees from './mercenary/toxicologist';
import covenbaneTalentTrees from './mercenary/covenbane';
import bladedancerTalentTrees from './mercenary/bladedancer';

// Import Sentinel Path talent trees
import lunarchTalentTrees from './sentinel/lunarch';
import huntressTalentTrees from './sentinel/huntress';
import wardenTalentTrees from './sentinel/warden';

// This will be expanded as we add more talent trees
const talentTreeRegistry = {
  // Mystic Path
  'pyrofiend': pyrofiendTalentTrees,
  'minstrel': minstrelTalentTrees,
  'chronarch': chronarchTalentTrees,

  // Trickster Path
  'chaos-weaver': chaosWeaverTalentTrees,
  'fate-weaver': fateWeaverTalentTrees,
  'gambler': gamblerTalentTrees,

  // Zealot Path
  'martyr': martyrTalentTrees,
  'false-prophet': falseProphetTalentTrees,
  'exorcist': exorcistTalentTrees,

  // Harrow Path
  'deathcaller': deathcallerTalentTrees,
  'plaguebringer': plaguebringerTalentTrees,
  'lichborne': lichborneTalentTrees,

  // Arcanist Path
  'spellguard': spellguardTalentTrees,
  'inscriptor': inscriptorTalentTrees,
  'arcanoneer': arcanoneerTalentTrees,

  // Hexer Path
  'witch-doctor': witchDoctorTalentTrees,
  'formbender': formbenderTalentTrees,
  'primalist': primalistTalentTrees,

  // Reaver Path
  'berserker': berserkerTalentTrees,
  'dreadnaught': dreadnaughtTalentTrees,
  'titan': titanTalentTrees,

  // Mercenary Path
  'toxicologist': toxicologistTalentTrees,
  'covenbane': covenbaneTalentTrees,
  'bladedancer': bladedancerTalentTrees,

  // Sentinel Path
  'lunarch': lunarchTalentTrees,
  'huntress': huntressTalentTrees,
  'warden': wardenTalentTrees,

  // Add more classes as they are implemented
};

export default talentTreeRegistry;
