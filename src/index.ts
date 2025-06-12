import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from root!" });
});

app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Test build route!" });
});
app.get("/users", (req: Request, res: Response) => {
  res.status(200).json({ message: "users retrieve!", users: [] });
});
app.get("/testing-build-route", (req: Request, res: Response) => {
  res.status(200).json({ message: "Build route is successfully working" });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(3000, () => {
  console.log("App running on port.", 3000);
});
export { app };
