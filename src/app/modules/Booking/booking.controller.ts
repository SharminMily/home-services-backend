import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createBooking = catchAsynce(async(req, res)=> {
  console.log(req.body)
  const result = await BookingController.createBooking(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Booking created successfully",
    //meta: result.meta,
    data: result,
  });
})


const getAllFromDb = catchAsynce(async(req, res)=> {
   const result = await BookingController.getAllFromDb()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get all Booking successfully",
    //meta: result.meta,
    data: result,
  });
})


const IdFromDb = catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await BookingController.getIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "get Booking",
    //meta: result.meta,
    data: result,
  });
})


const deleteIdFromDb= catchAsynce(async(req, res)=> {
  const {id}  = req.params
   const result = await BookingController.deleteIdFromDb(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "deleteId single Booking",
    //meta: result.meta,
    data: [],
  });
})


const updateBooking = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await BookingController.updateFromDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking updated successfully",
    data: result,
  });
});

export const BookingController = {
   createBooking,
   getAllFromDb,
   IdFromDb,
   deleteIdFromDb,
   updateBooking
}