import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'intern-dev',
  title: 'Intern.dev CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Documentation')
              .child(
                S.documentTypeList('documentation')
                  .title('Documentation Pages')
              ),
            S.listItem()
              .title('Code Examples')
              .child(
                S.documentTypeList('codeExample')
                  .title('Code Examples')
              ),
            S.listItem()
              .title('Learning Paths')
              .child(
                S.documentTypeList('learningPath')
                  .title('Learning Paths')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
