import { defineField } from 'sanity';
import { CommentIcon } from '@sanity/icons'

const anfahrt = {
    name: 'anfahrt',
    title: 'Anfahrt',
    type: 'document',
    icon: CommentIcon,

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

export default anfahrt;