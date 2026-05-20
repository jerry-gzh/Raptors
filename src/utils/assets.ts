import { GetCanonicalSlugSource } from "./hash";

const carouselImageModules = import.meta.glob(
  "../assets/home-carousel/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const postCoverModules = import.meta.glob(
  "../contents/posts/**/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

function normalizeAssetKey(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function GetCarouselImages(): string[] {
  return Object.entries(carouselImageModules)
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .map(([, imageUrl]) => imageUrl as string);
}

export function GetPostCoverURL(entryId: string): string | undefined {
  const normalizedEntryId = normalizeAssetKey(GetCanonicalSlugSource(entryId));

  const matches = Object.entries(postCoverModules)
    .map(([assetPath, assetUrl]) => {
      const match = assetPath.match(/\.\.\/contents\/posts\/([^/]+)\/([^/]+)$/);
      if (!match) return undefined;

      const [, folderName, fileName] = match;
      const normalizedFolderName = normalizeAssetKey(folderName);
      const normalizedFileName = normalizeAssetKey(fileName.replace(/\.[^.]+$/, ""));

      return {
        folderName: normalizedFolderName,
        fileName: normalizedFileName,
        url: assetUrl as string,
      };
    })
    .filter((item): item is { folderName: string; fileName: string; url: string } =>
      Boolean(item),
    )
    .filter((item) => item.folderName === normalizedEntryId)
    .sort((left, right) => {
      const leftPriority = left.fileName === "cover" ? 0 : 1;
      const rightPriority = right.fileName === "cover" ? 0 : 1;
      return leftPriority - rightPriority || left.fileName.localeCompare(right.fileName);
    });

  return matches[0]?.url;
}
