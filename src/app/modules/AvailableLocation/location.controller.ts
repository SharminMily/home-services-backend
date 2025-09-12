import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { LocationServices } from "./location.services";

const createLocation = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await LocationServices.createLocation(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "location created successfully",
    //meta: result.meta,
    data: result,  
  });
})


const getAllFromDb = catchAsynce(async(req, res)=> {
   const result = await LocationServices.getAllFromDb()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get all location successfully",
    //meta: result.meta,
    data: result,
  });
})


const IdFromDb = catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await LocationServices.getIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get location",
    //meta: result.meta,
    data: result,
  });
})


const deleteIdFromDb= catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await LocationServices.deleteIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "deleteId single Location",
    //meta: result.meta,
    data: [],
  });
})


const updateLocation = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await LocationServices.updateFromDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Location updated successfully",
    data: result,
  });
});

export const LocationController = {
   createLocation,
   getAllFromDb,
   IdFromDb,
   deleteIdFromDb,
   updateLocation
}