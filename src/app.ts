import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/error/globalErrorHandler";
import routeNotFound from "./app/error/routeNotFound";
import { ReportRouter } from "./app/modules/report/report.route";

// express app initialization
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", async (req, res) => {
  res.send({ message: "Server is running!" });
});

// routes
app.use("/api/v1/report", ReportRouter);

// error handlers
app.use(globalErrorHandler);
app.use(routeNotFound);

export default app;
