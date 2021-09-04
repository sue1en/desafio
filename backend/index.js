const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const db = require("./db/config");
const { name, version } = require("./package.json");

mongoose.connect(db.uri, { useUnifiedTopology: true, useNewUrlParser: true});

const port = process.env.PORT ? Number(process.env.PORT) : 3335
const app = express();

app.use(cors());
app.use(express.json());

const router = require("./api/router");
router(app);

app.listen(port, () => console.log(`The server is running at http://localhost:${port}`));
console.log(`The ${name} on version ${version} is running at development enviroment. :)`);