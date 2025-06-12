//write test route
const express = require("express");
const app = express();
app.get("/test", (req, res, next) => {
    return res.status(200).json({
        message: "Test build route!",
    });
});
app.get("/users", (req, res, next) => {
    return res.status(200).json({
        message: "User retrieve!",
        users: []
    });
});

app.listen(3000, () => {
    console.log("App running on port.", 3000);
})
module.exports = app;