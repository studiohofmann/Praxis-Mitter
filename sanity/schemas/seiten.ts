import { defineField } from 'sanity';
import { BookIcon } from '@sanity/icons'

const seiten = {
    name: 'seiten',
    title: 'Seiten',
    type: 'document',
    icon: BookIcon,

    fields: [
        defineField({
            name: 'titel',
            title: 'Titel',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Add a custom slug for the URL or generate one from the name',
            options: { source: 'titel' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ueberschrift',
            title: 'Ueberschrift',
            type: 'string',
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
};

export default seiten;