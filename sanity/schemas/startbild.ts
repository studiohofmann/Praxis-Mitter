import { defineField } from 'sanity';
import { ImageIcon } from '@sanity/icons'

const startbild = {
    name: 'startbild',
    title: 'Startbild',
    type: 'document',
    icon: ImageIcon,

    fields: [
        defineField({
            name: 'titel',
            title: 'Titel',
            type: 'string',
        }),
        defineField({
            name: 'bild',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ]
        }),
    ],
};

export default startbild;