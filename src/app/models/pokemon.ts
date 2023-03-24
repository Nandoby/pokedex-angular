export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: Sprites
}

interface Sprites {
  back_default: string
}
