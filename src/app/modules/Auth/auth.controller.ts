import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";

const register = catchAsynce(async(req, res) => {
    console.log(req.body)
    const result = await AuthService.register()

    sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Register Sucessfully",  
     data : result
    })
})

export const AuthController = {
    register
}