export interface DevicesAPI {
  version?: string;
  devices: Device[];
}

export interface Device {
  sysids?: string[];
  icon: Icon;
  line: Line;
  guids?: string[];
  uisp?: Uisp;
  id: string;
  product: Product;
  shortnames?: string[];
  triplets?: Triplet[];
  sysid?: string;
  jrf?: string[];
  jpa?: string[];
  unifi?: Unifi;
  fcc?: string;
  ic?: string;
  is_service?: boolean;
}

export interface Icon {
  resolutions?: Array<number[]>;
  id: string;
}

export interface Line {
  name: Name;
  id?: ID;
}

export enum ID {
  Airfiber = "airfiber",
  Airmax = "airmax",
  Amplifi = "amplifi",
  Edgemax = "edgemax",
  Ltu = "ltu",
  Mfi = "mfi",
  Sunmax = "sunmax",
  Ufiber = "ufiber",
  Uisp = "uisp",
  UnifiAccess = "unifi-access",
  UnifiConnect = "unifi-connect",
  UnifiLED = "unifi-led",
  UnifiLTE = "unifi-lte",
  UnifiNetwork = "unifi-network",
  UnifiProtect = "unifi-protect",
  UnifiTalk = "unifi-talk",
  Unknown = "unknown",
}

export enum Name {
  AirFiber = "AirFiber",
  AirMAX = "airMAX",
  AmpliFi = "AmpliFi",
  EdgeMAX = "EdgeMAX",
  Ltu = "LTU",
  MFi = "mFi",
  SunMAX = "SunMAX",
  UFiber = "UFiber",
  Uisp = "UISP",
  UniFi = "UniFi",
  UniFiAccess = "UniFi Access",
  UniFiConnect = "UniFi Connect",
  UniFiLED = "UniFi LED",
  UniFiLTE = "UniFi LTE",
  UniFiProtect = "UniFi Protect",
  UniFiTalk = "UniFi Talk",
  Unknown = "Unknown",
}

export interface Product {
  abbrev?: string;
  name: string;
}

export interface Triplet {
  k1?: string;
  k2?: string;
  k3?: string;
}

export interface Uisp {
  nameLegacy?: string[];
  bleServices?: { [key: string]: BleServiceValue };
  line?: string;
  firmware?: Firmware;
}

export interface BleServiceValue {
  mode?: Mode;
}

export enum Mode {
  Default = "default",
  DefaultLegacy = "default_legacy",
  Factory = "factory",
  FactoryLegacy = "factory_legacy",
}

export interface Firmware {
  platform?: Platform | null;
  board?: string[];
}

export enum Platform {
  Aircube = "aircube",
  Airfiber = "airfiber",
  Airmax = "airmax",
  Edgepower = "edgepower",
  Edgerouter = "edgerouter",
  Edgeswitch = "edgeswitch",
  Linux = "linux",
  UispLTE = "uisp-lte",
  UispPower = "uisp-power",
  UispSwitch = "uisp-switch",
  Uispr = "uispr",
}

export interface Unifi {
  adoptability?: Adoptability;
  network?: Network;
  protect?: Protect;
}

export enum Adoptability {
  Adoptable = "adoptable",
  Standalone = "standalone",
}

export interface Network {
  radios?: Radios;
  numberOfPorts?: number;
  ethernetMaxSpeedMegabitsPerSecond?: number;
  systemIdHexadecimal?: string;
  features?: NetworkFeatures;
  chipset?: string;
  type?: Type;
  minimumFirmwareRequired?: string;
  deviceCapabilities?: Array<null | string>;
  bleServices?: BleServiceElement[];
  hybrid?: string;
  ports?: NetworkGroups;
  subtypes?: Type[];
  diagram?: string[];
  details?: Details;
  networkGroups?: NetworkGroups;
  linkNegotiation?: LinkNegotiation;
  knownUnsupportedFeatures?: string[];
  power?: Power;
  temperatureSensors?: TemperatureSensor[];
  primaryPortGroupCount?: number;
  outletsDiagram?: string[];
  outlets?: Outlets;
  primaryOutletGroupCount?: number;
  rps?: Rps;
}

export interface BleServiceElement {
  configured?: string;
  default?: string;
  features?: BleServiceFeatures;
}

export interface BleServiceFeatures {
  ucore?: boolean;
}

export interface Details {
  ipsThroughput?: string;
  legacyPortRemap?: boolean;
}

export interface NetworkFeatures {
  zh?: boolean;
  bandsteer?: boolean;
  ac?: boolean;
  gen?: number;
  outdoorModeSupport?: boolean;
  ax?: boolean;
  atfDisabled?: boolean;
  brcm?: boolean;
  airView?: boolean;
  airTime?: boolean;
  dfs?: boolean;
  poe?: boolean;
  fan?: Fan;
  legacyPortRemap?: boolean;
  sfpPlusSupported?: boolean;
}

export enum Fan {
  Alwayson = "alwayson",
  Simple = "simple",
}

export interface LinkNegotiation {
  eth4?: Eth2Class;
  eth10?: Eth0Class;
  eth9?: Eth0Class;
  eth7?: Eth2Class;
  eth8?: Eth2Class;
  eth15?: Eth0Class;
  eth18?: Eth0Class;
  eth16?: Eth0Class;
  eth19?: Eth0Class;
  eth1?: Eth0Class;
  eth0?: Eth0Class;
  eth2?: Eth2Class;
  eth3?: Eth2Class;
  eth6?: Eth6;
  eth5?: Eth0Class;
}

export interface Eth0Class {
  supportedValues?: SupportedValue[];
  portIdx?: number;
}

export enum SupportedValue {
  Autoneg = "autoneg",
  The10000Fdx = "10000 FDX",
  The1000Fdx = "1000 FDX",
  The100Fdx = "100 FDX",
  The100Hdx = "100 HDX",
  The10Fdx = "10 FDX",
  The10Hdx = "10 HDX",
  The2500Fdx = "2500 FDX",
}

export interface Eth2Class {
  supportedValues?: SupportedValue[];
  portIdx?: number;
  bindWith?: string;
}

export interface Eth6 {
  bindWith?: string;
}

export interface NetworkGroups {
  eth1?: string;
  eth0?: string;
  eth3?: string;
  eth4?: string;
  eth2?: string;
  eth6?: string;
  eth10?: string;
  eth5?: string;
  eth9?: string;
  eth7?: string;
  eth8?: string;
  eth17?: string;
  eth11?: string;
  eth14?: string;
  eth12?: string;
  eth15?: string;
  eth18?: string;
  eth13?: string;
  eth16?: string;
  eth19?: string;
  standard?: number[] | number | string;
  plus?: number[] | number | string;
  sfp?: number[];
  sfp28?: string;
  qsfp28?: string;
}

export interface Outlets {
  usb?: number[] | string;
  standard?: number | string;
}

export interface Power {
  capacity?: number;
}

export interface Radios {
  na?: Na;
  ng?: Na;
  "6e"?: The6E;
}

export interface The6E {
  gain?: number;
  maxPower?: number;
}

export interface Na {
  gain?: number;
  maxPower?: number;
  maxSpeedMegabitsPerSecond?: number;
}

export interface Rps {
  diagram?: string[];
  primaryPortGroupCount?: number;
}

export enum Type {
  Uap = "uap",
  Uas = "uas",
  Ubb = "ubb",
  Uck = "uck",
  Udm = "udm",
  Ugw = "ugw",
  Unvr = "unvr",
  Uph = "uph",
  Usw = "usw",
  Uxg = "uxg",
}

export interface TemperatureSensor {
  maxTemp?: number;
  sensor?: string;
}

export interface Protect {
  fov?: number;
  suggestedDistance?: number;
}
