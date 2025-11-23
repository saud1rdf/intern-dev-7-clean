// sanity/structure.ts
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Documentation')
        .child(S.documentTypeList('documentation').title('Documentation Pages')),
      S.listItem()
        .title('Code Examples')
        .child(S.documentTypeList('codeExample').title('Code Examples')),
      S.listItem()
        .title('Learning Paths')
        .child(S.documentTypeList('learningPath').title('Learning Paths')),
    ])
