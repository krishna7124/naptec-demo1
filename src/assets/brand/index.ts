import primary from "./naptec-primary.png.asset.json";
import horizontal from "./naptec-horizontal.png.asset.json";
import stacked from "./naptec-stacked.png.asset.json";
import mono from "./naptec-mono.png.asset.json";
import seal from "./naptec-seal.png.asset.json";

/**
 * NAPTEC brand logo system.
 * - primary:    Main official logo (marketing, corporate communications)
 * - horizontal: Website headers, navigation, email signatures, letterheads
 * - stacked:    Social profiles, presentation covers, reports, square formats
 * - mono:       Official documents, watermarks, embossing, stamps, B&W print
 * - seal:       Accreditation certificates, awards, verification, endorsements
 */
export const brand = {
  primary: primary.url,
  horizontal: horizontal.url,
  stacked: stacked.url,
  mono: mono.url,
  seal: seal.url,
} as const;
