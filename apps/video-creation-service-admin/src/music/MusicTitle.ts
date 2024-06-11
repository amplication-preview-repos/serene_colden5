import { Music as TMusic } from "../api/music/Music";

export const MUSIC_TITLE_FIELD = "genre";

export const MusicTitle = (record: TMusic): string => {
  return record.genre?.toString() || String(record.id);
};
