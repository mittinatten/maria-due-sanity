// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default',
    // Then proceed to concatenate our our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        {
            title: "Album",
            name: "album",
            type: "document",
            fields: [
                {
                    title: "Year",
                    name: "year",
                    type: "number"
                },
                {
                    title: "Title",
                    name: "title",
                    type: "string"
                },
                {
                    title: "Cover",
                    name: "cover",
                    type: "image"
                },
                {
                    title: "Spotify",
                    name: "spotify",
                    type: "url"
                },
                {
                    title: "Songs",
                    name: "songs",
                    type: "array",
                    of: [{
                        type: "reference",
                        to: [{type: "song"}]
                    }]
                },
                {
                    title: "Purchase at",
                    name: "purchaseAt",
                    type: "array",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "url",
                                name: "url",
                                title: "URL"
                            },
                            {
                                type: "string",
                                name: "label",
                                title: "label"
                            }
                        ]
                    }]
                },
                {
                    title: "Record label",
                    name: "recordLabel",
                    type: "recordLabel"
                },
                {
                    title: "Producer",
                    name: "producer",
                    type: "person"
                }
            ]
        },
        {
            title: "Song",
            name: "song",
            type: "document",
            fields: [
                {
                    type: "string",
                    title: "Title",
                    name: "title"
                },
                {
                    type: "text",
                    title: "Lyrics",
                    name: "lyrics"
                },
                {
                    title: "Album",
                    name: "album",
                    type: "reference",
                    to: [{type: "album"}]
                },
                {
                    type: "array",
                    title: "Music by",
                    name: "musicBy",
                    of: [{
                        "type": "person"
                    }]
                },
                {
                    type: "array",
                    title: "Lyrics by",
                    name: "lyricsBy",
                    of: [{
                        "type": "person"
                    }]
                }
            ]
        },
        {
            title: "Person",
            name: "person",
            type: "object",
            fields: [
                {
                    type: "url",
                    name: "homePage",
                    title: "Home page"
                },
                {
                    type: "string",
                    name: "name",
                    title: "Name",
                },
                {
                    type: "url",
                    name: "sameAs",
                    title: "Same as (wikidata, viaf, etc)"
                },
                {
                    type: "url",
                    name: "about",
                    title: "Authority"
                }
            ]
        },
        {
            title: "Record label",
            name: "recordLabel",
            type: "object",
            fields: [
                {
                    type: "url",
                    name: "homePage",
                    title: "Home page"
                },
                {
                    type: "string",
                    name: "name",
                    title: "Name",
                }
            ]
        },
        {
            title: "Appears on",
            name: "appearsOn",
            type: "document",
            fields: [
                {
                    title: "Title",
                    name: "title",
                    type: "string",
                },
                {
                    title: "Year",
                    name: "year",
                    type: "number"
                },
                {
                    title: "By",
                    name: "by",
                    type: "object",
                    fields: [
                        {
                            title: "Name",
                            name: "name",
                            type: "string"
                        },
                        {
                            title: "Home page",
                            name: "homePage",
                            type: "url"
                        }
                    ]
                },
                {
                    title: "Spotify",
                    name: "spotify",
                    type: "url"
                }
            ]
        },
        {
            title: "Concert",
            name: "concert",
            type: "document",
            fields: [
                {
                    title: "Date",
                    name: "date",
                    type: "datetime"
                },
                {
                    title: "Venue",
                    name: "venue",
                    type: "string"
                },
                {
                    title: "Description",
                    name: "description",
                    type: "string"
                },
                {
                    title: "Event URL",
                    name: "eventURL",
                    type: "url"
                },
                {
                    title: "City",
                    name: "city",
                    type: "string"
                }
            ],
            preview: {
                select: {
                    title: "venue",
                    subtitle: "date"
                }
            }
        },
        {
            title: "Video",
            name: "video",
            type: "document",
            fields: [
                {
                    title: "Link",
                    name: "url",
                    type: "url"
                },
                {
                    title: "Title",
                    name: "title",
                    type: "string"
                },
                {
                    title: "Sort Order",
                    name: "sortOrder",
                    type: "number"
                }
            ]
        },
        {
            title: "Front matter",
            name: "frontMatter",
            type: "document",
            fields: [
                {
                    title: "Text",
                    name: "body",
                    type: "array",
                    of: [{type: "block"}]
                },
                {
                    title: "Title",
                    name: "title",
                    type: "string"
                }
            ]
        },
        {
            title: "Contact info",
            name: "contactInfo",
            type: "document",
            fields: [
                {
                    title: "Email",
                    name: "email",
                    type: "string"
                },
                {
                    title: "Description",
                    name: "description",
                    type: "string"
                }
            ]
        }
    ])
})
