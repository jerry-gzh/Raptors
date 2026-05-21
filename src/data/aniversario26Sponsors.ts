export type SponsorTier = "principal" | "aliado";

export interface SponsorMetadata {
  key: string;
  name: string;
  tier?: SponsorTier;
}

export const aniversario26Sponsors: SponsorMetadata[] = [
  { key: "chiloneros", name: "Chiloneros" },
  { key: "degustaciones", name: "Degustaciones" },
  { key: "fruteria", name: "Frutería" },
  { key: "nova", name: "Nova" },
  { key: "omentes", name: "Omentes" },
  { key: "valdez", name: "Valdez" },
  { key: "valladolid", name: "Valladolid" },
];
