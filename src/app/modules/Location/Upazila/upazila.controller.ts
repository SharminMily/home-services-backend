import { catchAsynce } from "../../../../shared/catchAsync";
import { sendResponse } from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { UpazilaService } from "./upazila.service";

const getAllUpazilaFromDb = catchAsynce(async (req, res) => {

    const result = await UpazilaService.getAllUpazilaFromDb()
    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get All Upazilas From Db successfully",   
    data: result,  
  });
})

const   getUpazilaByDivisionAndDistrict = catchAsynce(async (req, res) => {


   const { divisionId, districtId } = req.params;
   const result = await UpazilaService.getUpazilaByDivisionAndDistrict(divisionId, districtId);
    
    if (!result || result.length === 0) {
      sendResponse(res, {
    statusCode: httpStatus.NOT_FOUND,
    success: true,
    message: "No upazila found for this district",   
    data: [],  
  });
    }

    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Upazilas fetched successfully",   
    data: result,  
  });
})



export const UpazilaController = {
    getAllUpazilaFromDb,
    getUpazilaByDivisionAndDistrict
}