export interface SpaceshipConfig {
  maxSpeed: number;
  nbCanons: number;
}

export interface Spaceship {
  name: string;
  builtInYear: number;
  config: SpaceshipConfig;
}
