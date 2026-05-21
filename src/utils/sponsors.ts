import { aniversario26Sponsors, type SponsorTier } from "../data/aniversario26Sponsors";

const sponsorImageModules = import.meta.glob(
  "../contents/posts/Aniversario26/sponsors/*.{jpg,jpeg,png,webp,avif,svg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

export interface SponsorEntry {
  key: string;
  name: string;
  tier: SponsorTier;
  imageUrl: string;
}

function normalizeSponsorKey(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function humanizeSponsorKey(value: string): string {
  return value
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export function GetAniversario26Sponsors(): SponsorEntry[] {
  const sponsorMetadata = new Map(
    aniversario26Sponsors.map((sponsor) => [normalizeSponsorKey(sponsor.key), sponsor]),
  );

  return Object.entries(sponsorImageModules)
    .map(([assetPath, assetUrl]) => {
      const fileName = assetPath.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
      const key = normalizeSponsorKey(fileName);
      const metadata = sponsorMetadata.get(key);

      return {
        key,
        name: metadata?.name ?? humanizeSponsorKey(key),
        tier: metadata?.tier ?? "aliado",
        imageUrl: assetUrl as string,
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name, "es"));
}
