import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ServiceServices } from "./service.services";
import { Request, Response } from "express";
import pick from "../../../shared/pick";
import { serviceFilterableFields } from "./service.constants";

const createService = catchAsynce(async(req: Request, res: Response)=> {  
  const result = await ServiceServices.createService(req)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "service created successfully",   
    data: result,
  });
})

const allServiceFromDb = catchAsynce(async(req, res)=> {
  const filters = pick(req.query, serviceFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
   const result = await ServiceServices.allServiceFromDb(filters, options)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get all services successfully",
    meta: result.meta,
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


const updateService = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceServices.updateServiceFromDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "service updated successfully",
    data: result,
  });
});

export const ServiceController = {
    createService,
    allServiceFromDb,
    serviceIdFromDb,
    deleteIdFromDb,
    updateService
}