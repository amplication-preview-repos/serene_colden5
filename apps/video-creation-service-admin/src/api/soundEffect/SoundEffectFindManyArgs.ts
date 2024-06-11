import { SoundEffectWhereInput } from "./SoundEffectWhereInput";
import { SoundEffectOrderByInput } from "./SoundEffectOrderByInput";

export type SoundEffectFindManyArgs = {
  where?: SoundEffectWhereInput;
  orderBy?: Array<SoundEffectOrderByInput>;
  skip?: number;
  take?: number;
};
