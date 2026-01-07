export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        // --- NEW FIELDS FOR PHASE 1 REDESIGN ---
        {
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'string',
            description: 'The big bold text (e.g., "Data Scientist. Full Stack Dev.")'
        },
        {
            name: 'heroText',
            title: 'Hero Subtext',
            type: 'text',
            description: 'The descriptive text below the heading.'
        },
        // ---------------------------------------
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}