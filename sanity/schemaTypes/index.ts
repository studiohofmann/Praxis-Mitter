import { type SchemaTypeDefinition } from 'sanity'
import seiten from '../schemas/seiten'
import startbild from '../schemas/startbild'
import uebermichbild from '../schemas/uebermichbild'
import praxisgalerie from '../schemas/praxisgalerie'
import icons from '../schemas/icons'
import anfahrt from '../schemas/anfahrt'
import termin from '../schemas/termin'
import leistungen from '../schemas/leistungen'
import leistung from '../schemas/leistung'
import impressuminfo from '../schemas/impressuminfo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seiten, startbild, termin, leistungen, leistung, uebermichbild, praxisgalerie, icons, anfahrt, impressuminfo],
}
