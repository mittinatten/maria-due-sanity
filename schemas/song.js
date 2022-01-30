export default {
  title: "Song",
  name: "song",
  type: "document",
  fields: [
    {
      type: "string",
      title: "Title",
      name: "title",
    },
    {
      type: "text",
      title: "Lyrics",
      name: "lyrics",
    },
    {
      title: "Album",
      name: "album",
      type: "reference",
      to: [{ type: "album" }],
    },
    {
      type: "array",
      title: "Music by",
      name: "musicBy",
      of: [
        {
          type: "person",
        },
      ],
    },
    {
      type: "array",
      title: "Lyrics by",
      name: "lyricsBy",
      of: [
        {
          type: "person",
        },
      ],
    },
    {
      type: "url",
      title: "Music video",
      name: "video",
    },
  ],
};
