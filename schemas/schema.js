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
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                title: "Title",
                                name: "title"
                            },
                            {
                                type: "number",
                                title: "Number",
                                name: "number"
                            }
                        ]
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
                    title: "Body",
                    name: "body",
                    type: "string"
                },
                {
                    title: "Title",
                    name: "title",
                    type: "string"
                }
            ]
        }
    ])
})
