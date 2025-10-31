import { catchAsynce } from "../../../../shared/catchAsync";
import { sendResponse } from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { UpazilaService } from "./upazila.service";

const getAllUpazilaFromDb = catchAsynce(async (req, res) => {

    const result = await UpazilaService.getAllUpazilaFromDb()
    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get All Upazila From Db successfully",   
    data: result,  
  });
})


export const UpazilaController = {
    getAllUpazilaFromDb
}