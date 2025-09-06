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


const allServiceFromDb = catchAsynce(async(req, res)=> {
   const result = await ServiceServices.allServiceFromDb()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get all services successfully",
    //meta: result.meta,
    data: result,
  });
})


const serviceIdFromDb = catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await ServiceServices.serviceIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get single service",
    //meta: result.meta,
    data: result,
  });
})


const deleteIdFromDb= catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await ServiceServices.deleteIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "deleteId single service",
    //meta: result.meta,
    data: [],
  });
})


export const ServiceController = {
    createService,
    allServiceFromDb,
    serviceIdFromDb,
    deleteIdFromDb
}