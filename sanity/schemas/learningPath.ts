import { defineType, defineField } from 'sanity'

export const learningPath = defineType({
  name: 'learningPath',
  title: 'Learning Path',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'steps',
      title: 'Learning Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: 'title',
              title: 'Step Title (English)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'titleAr',
              title: 'Step Title (Arabic)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Step Description (English)',
              type: 'text',
              rows: 2,
            },
            {
              name: 'descriptionAr',
              title: 'Step Description (Arabic)',
              type: 'text',
              rows: 2,
            },
            {
              name: 'estimatedTime',
              title: 'Estimated Time (minutes)',
              type: 'number',
            },
            {
              name: 'resources',
              title: 'Resources',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Resource Title',
                      type: 'string',
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    },
                    {
                      name: 'type',
                      title: 'Resource Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Documentation', value: 'documentation' },
                          { title: 'Video', value: 'video' },
                          { title: 'Article', value: 'article' },
                          { title: 'Code Example', value: 'code' },
                          { title: 'Tutorial', value: 'tutorial' },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'stepNumber',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web-development' },
          { title: 'API Integration', value: 'api-integration' },
          { title: 'Version Control', value: 'version-control' },
          { title: 'Testing & Debugging', value: 'testing-debugging' },
          { title: 'Algorithms', value: 'algorithms' },
          { title: 'Data Structures', value: 'data-structures' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalEstimatedTime',
      title: 'Total Estimated Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})
