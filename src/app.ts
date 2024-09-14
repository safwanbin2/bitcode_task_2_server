import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ message: "Server is running!" });
});

export default app;
