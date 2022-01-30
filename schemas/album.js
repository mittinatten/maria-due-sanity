export default {
  title: "Album",
  name: "album",
  type: "document",
  fields: [
    {
      title: "Year",
      name: "year",
      type: "number",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Cover",
      name: "cover",
      type: "image",
    },
    {
      title: "Spotify",
      name: "spotify",
      type: "url",
    },
    {
      title: "Songs",
      name: "songs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "song" }],
        },
      ],
    },
    {
      title: "Purchase at",
      name: "purchaseAt",
      type: "array",
      of: [
        {
          type: "link",
        },
      ],
    },
    {
      title: "Record label",
      name: "recordLabel",
      type: "recordLabel",
    },
    {
      title: "Producer",
      name: "producer",
      type: "person",
    },
  ],
};
