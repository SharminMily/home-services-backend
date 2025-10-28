import { catchAsynce } from "../../../../shared/catchAsync";
import { sendResponse } from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { DistictService } from "./district.service";

const getDistrictFromDB = catchAsynce(async (req, res) => {
    const {id} = req.params;
    console.log(req.params)
    // console.log(JSON.stringify(req.params, null, 2));

    const result = await DistictService.getDistictFromDb(id)    
    sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "District get successfully",   
    data: result,  
  });
})


export const DistrictController = {
    getDistrictFromDB,
}