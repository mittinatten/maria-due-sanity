// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import recordLabel from "./recordLabel";
import person from "./person";
import contactInfo from "./contactInfo";
import album from "./album";
import song from "./song";
import appearsOn from "./appearsOn";
import concert from "./concert";
import video from "./video";
import frontMatter from "./frontMatter";
import link from "./link";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    album,
    song,
    appearsOn,
    concert,
    video,
    frontMatter,
    contactInfo,
    recordLabel,
    person,
    link,
  ]),
});
