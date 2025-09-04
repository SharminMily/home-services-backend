import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { LocationServices } from "./location.services";

const createService = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await LocationServices.createLocation(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "service created successfully",
    //meta: result.meta,
    data: result,
  });
})


export const LocationController = {
    createService
}