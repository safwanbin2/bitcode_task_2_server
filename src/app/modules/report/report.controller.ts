import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReportService } from "./report.server";

const generateReport = catchAsync(async (req, res) => {
  const result = await ReportService.generateReport();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Report generated",
    data: result,
  });
});

export const ReportController = {
  generateReport,
};
