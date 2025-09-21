import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import httpStatus from "http-status";

const createUser = catchAsynce(async (req, res) => {
  const result = await UserServices.createUser(req);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "user created successfully",
    //meta: result.meta,
    data: result,
  });
});

//get all User from database
const getAllUserFromDB = catchAsynce(async (req, res) => {
  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User fetched successfully",
    data: result,
  });
});

//single User from database
const getByIdFromDB = catchAsynce(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await UserServices.getByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User fetched successfully",
    data: result,
  });
});

//update
const updateIdFromDB = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.updateIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user updated successfully",
    data: result,
  });
});

//Delete customer from database
const deleteFromDB = catchAsynce(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully",
    data: [],
  });
});

export const UserController = {
  createUser,
  getAllUserFromDB,
  getByIdFromDB,
  updateIdFromDB,
  deleteFromDB,
};
