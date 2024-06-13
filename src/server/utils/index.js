const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const utils = {};

fs.readdirSync(__dirname)
  .filter((file) => file != basename)
  .forEach((file) => {
    const key = file.slice(0, -3);
    utils[key] = require(path.join(__dirname, file));
  });

module.exports = utils;
