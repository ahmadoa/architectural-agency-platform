const express = require("express");
const client = require("./sanity");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

// get all projects from sanity
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await client.fetch(`*[_type == "project"]{
        name,
        projectCategory,
        "imgURL": heroImage.asset->url,
        _id,
      }|order(_createdAt desc)`);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// get project by id
app.get("/api/singleProject/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const project = await client.fetch(
      `*[_type == "project" && _id == $id]{
        name,
        about,
        leaddesigner,
        location,
        projectCategory,
        totalLandSize,
        status,
        "heroImgURL": heroImage.asset->url,
        "imgURL": images[].asset->url,
      }`,
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
      `*[_type == "project"] | order(_createdAt desc) [0...3] { _id, name,projectCategory, "heroImgURL": heroImage.asset->url, }`
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
    const query = `*[_type == "team"]{_id,_createdAt,name,role, "imgURL": Image.asset->url}|order(_createdAt desc)`;
    const team = await client.fetch(query);
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

// send email
app.post("/api/send-email", async (req, res) => {
  const { fullname, email, message, subject } = await req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.SEND_TO_EMAIL,
    subject: `${subject}`,
    text: `Hi, my name is ${fullname} \n\n${message} \n\n\nmy email is ${email}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: `An error occurred while sending the email + ${error}`,
    });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
