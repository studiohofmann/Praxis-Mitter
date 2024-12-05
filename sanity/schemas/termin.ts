import { defineField } from 'sanity';
import { CalendarIcon } from '@sanity/icons'

const termin = {
    name: 'termin',
    title: 'Termin',
    type: 'document',
    icon: CalendarIcon,

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

export default termin;