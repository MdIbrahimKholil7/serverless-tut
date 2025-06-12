"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from root!" });
});
app.get("/test", (req, res) => {
    res.status(200).json({ message: "Test build route!" });
});
app.get("/users", (req, res) => {
    res.status(200).json({ message: "users retrieve!", users: [] });
});
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});
app.listen(3000, () => {
    console.log("App running on port.", 3000);
});
