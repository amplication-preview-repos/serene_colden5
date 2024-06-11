import { SoundEffect as TSoundEffect } from "../api/soundEffect/SoundEffect";

export const SOUNDEFFECT_TITLE_FIELD = "sourceUrl";

export const SoundEffectTitle = (record: TSoundEffect): string => {
  return record.sourceUrl?.toString() || String(record.id);
};
