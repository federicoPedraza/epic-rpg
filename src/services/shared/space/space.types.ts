import { SpaceSizesEnum } from './space.enums';

export type SpaceSize = typeof SpaceSizesEnum[keyof typeof SpaceSizesEnum];
export type Space = Record<SpaceSize, number>;
