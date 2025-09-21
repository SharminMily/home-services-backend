
import httpStatus from "http-status";
import { catchAsynce } from "../../../shared/catchAsync";
import { CategoryServices } from "./category.services";
import { sendResponse } from "../../../shared/sendResponse";

const createCategory = catchAsynce(async(req, res)=> {
  const result = await CategoryServices.createCategory(req)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "categories created successfully",
    //meta: result.meta,
    data: result,
  });
})


const getAllCategory = catchAsynce(async(req, res)=> {
  const result = await CategoryServices.getAllCategory()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get All successfully",
    //meta: result.meta,
    data: result,
  });
})

const getByIdFromDB = catchAsynce(async(req, res)=> {
 const { id } = req.params;
  const result = await CategoryServices.getByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get by id successfully",
    //meta: result.meta,
    data: result,
  });
})

const deleteFromDB = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "category deleted successfully",
    data: [],
  });
});


export const CategoryController = {
    createCategory,
    getAllCategory,
    getByIdFromDB,
    deleteFromDB
}