import { groq } from "next-sanity";

export const SEITEN_QUERY = groq`*[_type == "seiten"] {titel, slug, ueberschrift, text}`

export const STARTBILD_QUERY = groq`*[_type == "startbild"] {bild}`