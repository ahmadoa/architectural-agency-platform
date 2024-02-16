const express = require("express");
const client = require("./sanity");

const app = express();

// get projects from sanity
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await client.fetch(`*[_type == "project"]`);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get project by id
app.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await client.fetch(
      `*[_type == "project" && _id == $id][0]`,
      {
        id,
      }
    );
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get 3 last projects
app.get("/api/random-projects", async (req, res) => {
  try {
    const projects = await client.fetch(
      `*[_type == "project"] | order(_createdAt desc) [0...3] { _id, name, heroImage }`
    );
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get team members
app.get("/api/team", async (req, res) => {
  try {
    const team = await client.fetch(`*[_type == "team"]`);
    res.json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get services
app.get("/api/services", async (req, res) => {
  try {
    const services = await client.fetch(`*[_type == "service"]`);
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
