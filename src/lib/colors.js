// @flow
import seedrandom from 'seedrandom';

export const getVibrantColor = (seed: string) => (
  `hsl(${Math.floor(seedrandom(seed)() * 360)}, 100%, 50%)`
);
