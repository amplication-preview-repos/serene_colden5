import { Subtitle as TSubtitle } from "../api/subtitle/Subtitle";

export const SUBTITLE_TITLE_FIELD = "language";

export const SubtitleTitle = (record: TSubtitle): string => {
  return record.language?.toString() || String(record.id);
};
