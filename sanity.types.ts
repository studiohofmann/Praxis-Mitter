/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Impressuminfo = {
  _id: string;
  _type: "impressuminfo";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Anfahrt = {
  _id: string;
  _type: "anfahrt";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Icons = {
  _id: string;
  _type: "icons";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  reihenfolge?: string;
  wert?: string;
};

export type Praxisgalerie = {
  _id: string;
  _type: "praxisgalerie";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  reihenfolge?: string;
  bild?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Uebermichbild = {
  _id: string;
  _type: "uebermichbild";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  bild?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Leistung = {
  _id: string;
  _type: "leistung";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Leistungen = {
  _id: string;
  _type: "leistungen";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Termin = {
  _id: string;
  _type: "termin";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Startbild = {
  _id: string;
  _type: "startbild";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  titel?: string;
  bild?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Seiten = {
  _id: string;
  _type: "seiten";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  reihenfolge?: string;
  titel?: string;
  slug?: Slug;
  ueberschrift?: string;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Impressuminfo | Anfahrt | Icons | Praxisgalerie | Uebermichbild | Leistung | Leistungen | Termin | Startbild | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Seiten | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: HYPERLINKS_QUERY
// Query: *[_type == "seiten" && slug.current != "/"] | order(reihenfolge) {    reihenfolge,    titel,    slug,}
export type HYPERLINKS_QUERYResult = Array<{
  reihenfolge: string | null;
  titel: string | null;
  slug: Slug | null;
}>;
// Variable: SEITEN_QUERY
// Query: *[_type == "seiten"] | order(reihenfolge) {reihenfolge,titel, slug, ueberschrift, text}
export type SEITEN_QUERYResult = Array<{
  reihenfolge: string | null;
  titel: string | null;
  slug: Slug | null;
  ueberschrift: string | null;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
}>;
// Variable: STARTBILD_QUERY
// Query: *[_type == "startbild"] {bild}
export type STARTBILD_QUERYResult = Array<{
  bild: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: ICONS_QUERY
// Query: *[_type == "icons"] | order(reihenfolge) {name, wert}
export type ICONS_QUERYResult = Array<{
  name: string | null;
  wert: string | null;
}>;
// Variable: TERMIN_QUERY
// Query: *[_type == "termin"] {ueberschrift, text}
export type TERMIN_QUERYResult = Array<{
  ueberschrift: string | null;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
}>;
// Variable: UEBERMICHBILD_QUERY
// Query: *[_type == "uebermichbild"] {bild}
export type UEBERMICHBILD_QUERYResult = Array<{
  bild: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: PRAXISGALERIE_QUERY
// Query: *[_type == "praxisgalerie"] | order(reihenfolge) {bild}
export type PRAXISGALERIE_QUERYResult = Array<{
  bild: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: ANFAHRT_QUERY
// Query: *[_type == "anfahrt"] {ueberschrift, text}
export type ANFAHRT_QUERYResult = Array<{
  ueberschrift: string | null;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
}>;
// Variable: IMPRESSUMINFO_QUERY
// Query: *[_type == "impressuminfo"] | order(titel) {    ueberschrift,    text,    titel  }
export type IMPRESSUMINFO_QUERYResult = Array<{
  ueberschrift: string | null;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  titel: string | null;
}>;
// Variable: LEISTUNGEN_QUERY
// Query: *[_type == "leistungen"] {ueberschrift, text}
export type LEISTUNGEN_QUERYResult = Array<{
  ueberschrift: string | null;
  text: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
}>;
// Variable: LEISTUNG_QUERY
// Query: *[_type == "leistung"] {ueberschrift}
export type LEISTUNG_QUERYResult = Array<{
  ueberschrift: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"seiten\" && slug.current != \"/\"] | order(reihenfolge) {\n    reihenfolge,\n    titel,\n    slug,\n}": HYPERLINKS_QUERYResult;
    "*[_type == \"seiten\"] | order(reihenfolge) {reihenfolge,titel, slug, ueberschrift, text}": SEITEN_QUERYResult;
    "*[_type == \"startbild\"] {bild}": STARTBILD_QUERYResult;
    "*[_type == \"icons\"] | order(reihenfolge) {name, wert}": ICONS_QUERYResult;
    "*[_type == \"termin\"] {ueberschrift, text}": TERMIN_QUERYResult;
    "*[_type == \"uebermichbild\"] {bild}": UEBERMICHBILD_QUERYResult;
    "*[_type == \"praxisgalerie\"] | order(reihenfolge) {bild}": PRAXISGALERIE_QUERYResult;
    "*[_type == \"anfahrt\"] {ueberschrift, text}": ANFAHRT_QUERYResult;
    "*[_type == \"impressuminfo\"] | order(titel) {\n    ueberschrift,\n    text,\n    titel\n  }": IMPRESSUMINFO_QUERYResult;
    "*[_type == \"leistungen\"] {ueberschrift, text}": LEISTUNGEN_QUERYResult;
    "*[_type == \"leistung\"] {ueberschrift}": LEISTUNG_QUERYResult;
  }
}
