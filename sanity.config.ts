import { defineConfig, defaultTheme } from 'sanity';
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './schemas/schema.js'

export default defineConfig({
  "project": {
    "name": "Maria Due"
  },
  "projectId": "zp0hhhsi",
  "dataset": "production",
  "plugins": [
    structureTool(),
    // "@sanity/base",
    // "@sanity/components",
    // "@sanity/default-layout",
    // "@sanity/default-login",
    // "@sanity/desk-tool"
  ],
  schema: {
    types: schemaTypes
  },
});