import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ServiceServices } from "./service.services";

const createService = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await ServiceServices.createService(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "service created successfully",
    //meta: result.meta,
    data: result,
  });
})


export const ServiceController = {
    createService
}