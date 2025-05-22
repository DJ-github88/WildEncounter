import SpellguardGuide from '../../components/class-guides/SpellguardGuide';
import InscriptorGuide from '../../components/class-guides/InscriptorGuide';
import ArcanoneerGuide from '../../components/class-guides/ArcanoneerGuide';
import PyrofiendGuide from '../../components/class-guides/PyrofiendGuide';
import MinstrelGuide from '../../components/class-guides/MinstrelGuide';
import ChronarchGuide from '../../components/class-guides/ChronarchGuide';
import ChaosWeaverGuide from '../../components/class-guides/ChaosWeaverGuide';
import FateWeaverGuide from '../../components/class-guides/FateWeaverGuide';
import GamblerGuide from '../../components/class-guides/GamblerGuide';
import MartyrGuide from '../../components/class-guides/MartyrGuide';
import FalseProphetGuide from '../../components/class-guides/FalseProphetGuide';
import ExorcistGuide from '../../components/class-guides/ExorcistGuide';
import PlaguebringerGuide from '../../components/class-guides/PlaguebringerGuide';
import LichborneGuide from '../../components/class-guides/LichborneGuide';
import DeathcallerGuide from '../../components/class-guides/DeathcallerGuide';
import WitchDoctorGuide from '../../components/class-guides/WitchDoctorGuide';
import FormbenderGuide from '../../components/class-guides/FormbenderGuide';
import PrimalistGuide from '../../components/class-guides/PrimalistGuide';
import BerserkerGuide from '../../components/class-guides/BerserkerGuide';
import DreadnaughtGuide from '../../components/class-guides/DreadnaughtGuide';
import TitanGuide from '../../components/class-guides/TitanGuide';
import ToxicologistGuide from '../../components/class-guides/ToxicologistGuide';
import CovenbaneGuide from '../../components/class-guides/CovenbaneGuide';
import BladedancerGuide from '../../components/class-guides/BladedancerGuide';
import LunarchGuide from '../../components/class-guides/LunarchGuide';
import HuntressGuide from '../../components/class-guides/HuntressGuide';
import WardenGuide from '../../components/class-guides/WardenGuide';

// This registry maps class IDs to their respective guide components
const classGuides = {
  // Arcanist Path
  'spellguard': SpellguardGuide,
  'inscriptor': InscriptorGuide,
  'arcanoneer': ArcanoneerGuide,

  // Mystic Path
  'pyrofiend': PyrofiendGuide,
  'minstrel': MinstrelGuide,
  'chronarch': ChronarchGuide,

  // Trickster Path
  'chaos-weaver': ChaosWeaverGuide,
  'fate-weaver': FateWeaverGuide,
  'gambler': GamblerGuide,

  // Zealot Path
  'martyr': MartyrGuide,
  'false-prophet': FalseProphetGuide,
  'exorcist': ExorcistGuide,

  // Harrow Path
  'plaguebringer': PlaguebringerGuide,
  'lichborne': LichborneGuide,
  'deathcaller': DeathcallerGuide,

  // Hexer Path
  'witch-doctor': WitchDoctorGuide,
  'formbender': FormbenderGuide,
  'primalist': PrimalistGuide,

  // Reaver Path
  'berserker': BerserkerGuide,
  'dreadnaught': DreadnaughtGuide,
  'titan': TitanGuide,

  // Mercenary Path
  'toxicologist': ToxicologistGuide,
  'covenbane': CovenbaneGuide,
  'bladedancer': BladedancerGuide,

  // Sentinel Path
  'lunarch': LunarchGuide,
  'huntress': HuntressGuide,
  'warden': WardenGuide,

  // Add more class guides here as they are created
};

export default classGuides;
