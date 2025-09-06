import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './schemas/schema.js'

export default defineConfig({
  project: {
    name: "Maria Due"
  },
  projectId: "zp0hhhsi",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  },
});