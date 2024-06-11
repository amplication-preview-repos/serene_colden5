import { Visual as TVisual } from "../api/visual/Visual";

export const VISUAL_TITLE_FIELD = "sourceUrl";

export const VisualTitle = (record: TVisual): string => {
  return record.sourceUrl?.toString() || String(record.id);
};
