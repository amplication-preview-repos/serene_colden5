import { Campaign } from "../campaign/Campaign";

export type Project = {
  campaign?: Campaign | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
