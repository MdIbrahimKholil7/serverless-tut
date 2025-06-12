const serverless = require("serverless-http");
const { app } = require("./src/index");

exports.handler = serverless(app);
