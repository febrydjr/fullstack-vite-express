const express = require("express");
const ViteExpress = require("vite-express");
const { apiError } = require("./utils");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello! This message is from Server!");
});

app.get("api/resource/:id", (req, res, next) => {
  const { id } = req.params;

  if (id !== "1") {
    const error = apiError("NOT_FOUND");
    return res.status(error.status).json(error);
  }

  res.send({ id, name: "Resource Name" });
});

app.post("/api/resource", (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    const error = apiError("BAD_REQUEST", "Name is required");
    return res.status(error.status).json(error);
  }

  res.status(201).send({ id: 1, name });
});

// app.use("*", (req, res) => {
//   const error = apiError("NO_ROUTE");
//   res.status(error.status).json(error);
// });

app.use((err, req, res, next) => {
  const error = apiError(err.code, err.message);
  console.log(err);
  res.status(error.status).json(error);
});

ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port " + PORT + " ...")
);
