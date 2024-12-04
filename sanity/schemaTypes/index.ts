import { type SchemaTypeDefinition } from 'sanity'
import seiten from '../schemas/seiten'
import startbild from '../schemas/startbild'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seiten, startbild],
}
