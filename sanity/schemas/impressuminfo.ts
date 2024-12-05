import { defineField } from 'sanity';
import { InfoOutlineIcon } from '@sanity/icons'

const impressuminfo = {
    name: 'impressuminfo',
    title: 'Impressuminfo',
    type: 'document',
    icon: InfoOutlineIcon,

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

export default impressuminfo;