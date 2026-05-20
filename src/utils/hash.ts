import { createHash } from "node:crypto";
import RaptorsConfig from "../../raptors.config";

export function GetCanonicalSlugSource(value: string): string {
  const segments = value.split("/").filter(Boolean);
  if (segments.length === 0) return value;

  const lastSegment = segments[segments.length - 1];
  const parentSegment = segments.length > 1 ? segments[segments.length - 2] : "";

  if (lastSegment.toLowerCase() === "index" && parentSegment) return parentSegment;
  if (parentSegment && lastSegment.toLowerCase() === parentSegment.toLowerCase()) {
    return lastSegment;
  }

  return lastSegment;
}

/**
 * Converts a given slug to a hashed slug or returns the raw slug based on the configuration.
 *
 * @param slug - The input slug to be converted.
 * @returns The hashed slug if the configuration mode is "HASH", otherwise the raw slug.
 */
export function IdToSlug(slug: string): string {
  const canonicalSlug = GetCanonicalSlugSource(slug);
  switch (RaptorsConfig.slugMode) {
    case "HASH": {
      const hasedSlug = createHash("sha256")
        .update(canonicalSlug)
        .digest("hex")
        .slice(0, 8);
      return hasedSlug;
    }
    case "RAW":
      return canonicalSlug;
    default:
      return canonicalSlug;
  }
}

/**
 * Computes an index from a given slug ID string using a custom hash algorithm.
 *
 * Each character's ASCII code is multiplied by 31 raised to a decreasing power, and the sum is then reduced
 * by the length of the list. The returned index is guaranteed to be in the range [0, listLength - 1].
 *
 * @param id - The slug ID string to hash.
 * @param listLength - The length of the list for which the index is computed.
 * @returns A zero-based index within the list.
 */
export function GetIndexFromSlugID(id: string, listLength: number): number {
  // Convert the string to a number
  let hashValue = 0;
  for (let i = 0; i < id.length; i++) {
    hashValue += id.charCodeAt(i) * 31 ** (id.length - 1 - i);
  }

  // Modulo the list length to get the index
  const index = hashValue % listLength;
  return index;
}
