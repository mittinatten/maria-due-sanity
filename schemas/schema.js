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
                    title: "Place",
                    name: "place",
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
                    title: "place",
                    subtitle: "date"
                }
            }
        }
    ])
})
