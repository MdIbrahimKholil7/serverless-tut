const serverless = require("serverless-http");
const index = require("./src/index");
const { app } = require("./src/index");
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});
app.get("/test", (req, res, next) => {
  return res.status(200).json({
    message: "Test build route!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);
