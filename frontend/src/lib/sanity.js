import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

// set up sanity client
const client = createClient({
  projectId: "waby18t4",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
