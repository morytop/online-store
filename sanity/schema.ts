import { type SchemaTypeDefinition } from "sanity"

import { product } from "./schemas/product-schema"
import { user } from "./schemas/user-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, user],
}
