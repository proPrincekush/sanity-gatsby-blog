export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8ecdded4612e20522fed59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4fq6df7h',
                  apiId: '368d4f8b-22fa-412c-a2e2-da92c0c306c9'
                },
                {
                  buildHookId: '5f8ecddfe02a2220ef69a8b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8hzto9w4',
                  apiId: '795de4b4-740b-4b68-9b42-d5eacd150559'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/proPrincekush/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8hzto9w4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
