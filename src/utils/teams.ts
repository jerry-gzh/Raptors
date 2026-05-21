const teamImageModules = import.meta.glob(
  "../contents/posts/Aniversario26/equipos/*.{jpg,jpeg,png,webp,avif,svg}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

export interface TeamEntry {
  key: string;
  name: string;
  imageUrl: string;
}

function normalizeTeamKey(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function GetAniversario26Teams(): TeamEntry[] {
  return Object.entries(teamImageModules)
    .sort(([leftPath], [rightPath]) => leftPath.localeCompare(rightPath))
    .map(([assetPath, assetUrl], index) => {
      const fileName = assetPath.split("/").pop()?.replace(/\.[^.]+$/, "") ?? `equipo-${index + 1}`;

      return {
        key: normalizeTeamKey(fileName),
        name: `Equipo invitado ${index + 1}`,
        imageUrl: assetUrl as string,
      };
    });
}
