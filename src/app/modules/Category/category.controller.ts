
import httpStatus from "http-status";
import { catchAsynce } from "../../../shared/catchAsync";
import { CategoryServices } from "./category.services";
import { sendResponse } from "../../../shared/sendResponse";

const createCategory = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await CategoryServices.createCategory()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "categories created successfully",
    //meta: result.meta,
    data: result,
  });
})


export const CategoryController = {
    createCategory
}