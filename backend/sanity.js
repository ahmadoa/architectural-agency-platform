require("dotenv").config();
const createClient = require("@sanity/client").createClient;

// set up sanity client
const client = createClient({
  projectId: "waby18t4",
  dataset: "production",
  useCdn: true,
  token: process.env.SANITY_STUDIO_KEY,
  apiVersion: "2022-03-07",
});

module.exports = client;
