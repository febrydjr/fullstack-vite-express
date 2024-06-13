const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const validations = {};

fs.readdirSync(__dirname)
  .filter((file) => file != basename)
  .forEach((file) => {
    const key = file.slice(0, -3);
    validations[key] = require(path.join(__dirname, file));
  });

module.exports = validations;
