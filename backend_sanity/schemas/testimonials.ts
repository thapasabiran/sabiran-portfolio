export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'company',
        type: 'string',
        title: 'Company'
      },
      {
        name: 'imageurl',
        type: 'image',
        options: {
            hotspot: true
        },
        title: 'ImgURL'
      },
      {
        name: 'feedback',
        type: 'string',
        title: 'Feedback'
      }
    ]
  }