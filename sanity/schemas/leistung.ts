import { defineField } from 'sanity';
import { ActivityIcon } from '@sanity/icons'

const leistung = {
    name: 'leistung',
    title: 'Leistung',
    type: 'document',
    icon: ActivityIcon,

    fields: [
        defineField({
            name: 'titel',
            title: 'Titel',
            type: 'string',
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

export default leistung;