const express = require("express");
const app = express();

// Define all routes BEFORE exporting app
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello from root!" });
});

app.get("/hello", (req, res) => {
    return res.status(200).json({ message: "Hello from path!" });
});

app.get("/test", (req, res) => {
    return res.status(200).json({ message: "Test build route!" });
});

app.get("/users", (req, res) => {
    return res.status(200).json({ message: "User retrieve!", users: [] });
});

app.use((req, res) => {
    return res.status(404).json({ error: "Not Found" });
});
app.listen(3000, () => {
    console.log("App running on port.", 3000);
});
module.exports = { app };
