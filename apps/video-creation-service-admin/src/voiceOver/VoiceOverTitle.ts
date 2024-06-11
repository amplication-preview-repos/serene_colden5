import { VoiceOver as TVoiceOver } from "../api/voiceOver/VoiceOver";

export const VOICEOVER_TITLE_FIELD = "language";

export const VoiceOverTitle = (record: TVoiceOver): string => {
  return record.language?.toString() || String(record.id);
};
