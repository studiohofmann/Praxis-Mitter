import { groq } from "next-sanity";

export const SEITEN_QUERY = groq`*[_type == "seiten"] {titel, slug, ueberschrift, text}`
export const STARTBILD_QUERY = groq`*[_type == "startbild"] {bild}`
export const ICONS_QUERY = groq`*[_type == "icons"] {name, wert}`
export const TERMIN_QUERY = groq`*[_type == "termin"] {ueberschrift, text}`
export const UEBERMICHBILD_QUERY = groq`*[_type == "uebermichbild"] {bild}`
export const PRAXISGALERIE_QUERY = groq`*[_type == "praxisgalerie"] {bild}`
export const ANFAHRT_QUERY = groq`*[_type == "anfahrt"] {ueberschrift, text}`
export const IMPRESSUMINFO_QUERY = groq`*[_type == "impressuminfo"] {ueberschrift, text}`
export const LEISTUNGEN_QUERY = groq`*[_type == "leistungen"] {ueberschrift, text}`
export const LEISTUNG_QUERY = groq`*[_type == "leistung"] {ueberschrift}`