import { catchAsynce } from "../../../../shared/catchAsync";
import { sendResponse } from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { DistrictService } from "./district.service";



const geAllDistrictFromDB = catchAsynce(async (req, res) => {

    const result = await DistrictService.getAllDistrictFromDb()
    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All division get successfully",   
    data: result,  
  });
})



const getDistrictFromDB = catchAsynce(async (req, res) => {
    const {id} = req.params;
    console.log(req.params)
    // console.log(JSON.stringify(req.params, null, 2));

    const result = await DistrictService.getDistrictFromDb(id)   
    
    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Districts fetched successfully",   
    data: result,  
  });
})

export const DistrictController = {
    getDistrictFromDB,
    geAllDistrictFromDB
}