import { VoiceOverWhereInput } from "./VoiceOverWhereInput";
import { VoiceOverOrderByInput } from "./VoiceOverOrderByInput";

export type VoiceOverFindManyArgs = {
  where?: VoiceOverWhereInput;
  orderBy?: Array<VoiceOverOrderByInput>;
  skip?: number;
  take?: number;
};
