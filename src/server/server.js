const express = require("express");
const ViteExpress = require("vite-express");
const { apiError } = require("./utils");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/resource/:id", (req, res, next) => {
  const { id } = req.params;

  if (id !== "1") {
    const error = apiError("NOT_FOUND");
    return res.status(error.status).json(error);
  }

  res.send({ id, name: "Resource Name" });
});

app.post("/resource", (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    const error = apiError("BAD_REQUEST", "Name is required");
    return res.status(error.status).json(error);
  }

  res.status(201).send({ id: 1, name });
});

app.use("*", (req, res) => {
  const error = apiError("NO_ROUTE");
  res.status(error.status).json(error);
});

app.use((err, req, res, next) => {
  const error = apiError(err.code, err.message);
  console.log(err);
  res.status(error.status).json(error);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
