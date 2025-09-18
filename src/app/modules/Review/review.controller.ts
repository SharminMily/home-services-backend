import httpStatus from "http-status";
import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ReviewServices } from "./review.service";

const createReview = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await ReviewServices.createReview(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "review created successfully",    
    data: result,
  });
})


const getAllReview = catchAsynce(async(req, res)=> {
  const result = await ReviewServices.getAllReview()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get All successfully",    
    data: result,
  });
})

const getByIdFromDB = catchAsynce(async(req, res)=> {
 const { id } = req.params;
  const result = await ReviewServices.getByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "get by id successfully",    
    data: result,
  });
})

const deleteFromDB = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await ReviewServices.deleteByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "review deleted successfully",
    data: [],
  });
});


export const ReviewController = {
    createReview,
    getAllReview,
    getByIdFromDB,
    deleteFromDB
}