import { catchAsynce } from "../../../../shared/catchAsync";
import { sendResponse } from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { DivisionService } from "./division.service";

const getDivisionFromDB = catchAsynce(async (req, res) => {

    const result = await DivisionService.getDivisionFromDb()
    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All division get successfully",   
    data: result,  
  });
})


export const DivisionController = {
    getDivisionFromDB
}