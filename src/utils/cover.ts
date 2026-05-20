import { GetCanonicalSlugSource, GetIndexFromSlugID } from "./hash";
import { GetCarouselImages, GetPostCoverURL } from "./assets";

/**
 * Retrieves the cover URL for an unspecified entry based on the provided ID.
 *
 * @param id - The unique identifier for the entry.
 * @returns The URL of the corresponding cover image.
 */
export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const postCover = GetPostCoverURL(id);
  if (postCover) return postCover;

  const carouselImages = GetCarouselImages();
  if (carouselImages.length === 0) return "";

  const index = GetIndexFromSlugID(GetCanonicalSlugSource(id), carouselImages.length);
  return carouselImages[index];
}
