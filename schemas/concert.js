import countries from "./countries";

export default {
  title: "Concert",
  name: "concert",
  type: "document",
  fields: [
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Venue",
      name: "venue",
      type: "string",
    },
    {
      title: "Venue URL",
      name: "venueURL",
      type: "url",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Event URL",
      name: "eventURL",
      type: "url",
    },
    {
      title: "City",
      name: "city",
      type: "string",
    },
    {
      title: "Tickets URL",
      name: "tickets",
      type: "url",
    },
    {
      title: "Country",
      name: "country",
      type: "string",
      options: {
        list: countries.map((country) => country.name),
        layout: "dropdown",
      },
    },
  ],
  preview: {
    select: {
      title: "venue",
      subtitle: "date",
    },
  },
};
