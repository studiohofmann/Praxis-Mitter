import { groq } from "next-sanity";


export const HYPERLINKS_QUERY = groq`*[_type == "seiten" && slug.current != "/"] | order(reihenfolge) {
    reihenfolge,
    titel,
    slug,
}`
export const SEITEN_QUERY = groq`*[_type == "seiten"] | order(reihenfolge) {reihenfolge,titel, slug, ueberschrift, text}`
export const STARTBILD_QUERY = groq`*[_type == "startbild"] {bild}`
export const ICONS_QUERY = groq`*[_type == "icons"] | order(reihenfolge) {name, wert}`
export const TERMIN_QUERY = groq`*[_type == "termin"] {ueberschrift, text}`
export const UEBERMICHBILD_QUERY = groq`*[_type == "uebermichbild"] {bild}`
export const PRAXISGALERIE_QUERY = groq`*[_type == "praxisgalerie"] {bild}`
export const ANFAHRT_QUERY = groq`*[_type == "anfahrt"] {ueberschrift, text}`
export const IMPRESSUMINFO_QUERY = groq`*[_type == "impressuminfo"] | order(titel) {
    ueberschrift,
    text,
    titel
  }`
export const LEISTUNGEN_QUERY = groq`*[_type == "leistungen"] {ueberschrift, text}`
export const LEISTUNG_QUERY = groq`*[_type == "leistung"] {ueberschrift}`