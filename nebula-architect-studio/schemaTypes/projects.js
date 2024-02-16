export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // Allow cropping and resizing
      },
    },
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'leaddesigner',
      title: 'Lead Designer',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'projectCategory',
      title: 'Project Category',
      type: 'string',
    },
    {
      name: 'totalLandSize',
      title: 'Total Land Size',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'In Progress', value: 'in Progress'},
          {title: 'Planning', value: 'planning'},
        ],
      },
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
}
