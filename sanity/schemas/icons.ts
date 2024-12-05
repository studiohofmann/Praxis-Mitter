import { defineField } from 'sanity';
import { CommentIcon } from '@sanity/icons'

const icons = {
    name: 'icons',
    title: 'Icons',
    type: 'document',
    icon: CommentIcon,

    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'wert',
            title: 'Wert',
            type: 'string',
        }),


    ],
};

export default icons;