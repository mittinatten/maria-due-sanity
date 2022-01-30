export default {
  title: "Front matter",
  name: "frontMatter",
  type: "document",
  fields: [
    {
      title: "Text",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
