import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { serviceProviderServices } from "./serviceProvider.services";


const createServiceProvider = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await serviceProviderServices.createServiceProvider(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "service Provider created successfully",
    //meta: result.meta,
    data: result,
  });
})


 const getAllFromDb = catchAsynce(async(req, res)=> {
   const result = await serviceProviderServices.getAllFromDb()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get all service Provider successfully",
    //meta: result.meta,
    data: result,
  });
})


const IdFromDb = catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await serviceProviderServices.getIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get service Provider",
    //meta: result.meta,
    data: result,
  });
})


const deleteIdFromDb= catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await serviceProviderServices.deleteIdFromDb(id)
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
  const result = await serviceProviderServices.updateFromDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "service Provider updated successfully",
    data: result,
  });
});

export const ServiceProviderController = {
   createServiceProvider,
   getAllFromDb,
   IdFromDb,
   deleteIdFromDb,
   updateLocation
}