import { Router } from "express";
import { ReportController } from "./report.controller";

const router = Router();

router.get("/generate", ReportController.generateReport);

export const ReportRouter = router;
