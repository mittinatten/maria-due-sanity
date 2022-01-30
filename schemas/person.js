export default {
  title: "Person",
  name: "person",
  type: "object",
  fields: [
    {
      type: "url",
      name: "homePage",
      title: "Home page",
    },
    {
      type: "string",
      name: "name",
      title: "Name",
    },
    {
      type: "url",
      name: "sameAs",
      title: "Same as (wikidata, viaf, etc)",
    },
    {
      type: "url",
      name: "about",
      title: "Authority",
    },
  ],
};
