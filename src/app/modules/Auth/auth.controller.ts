import { catchAsynce } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";


const loginUser = catchAsynce(async(req, res) => {
    console.log(req.body)
    const result = await AuthService.loginUser(req.body);

    const {refreshToken} = result;

    res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly: true
    })

    sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "login Sucessfully",  
     data : {
        accaccessToken: result.accessToken
     }
    })
})

const refreshToken = catchAsynce(async(req, res) => {
   const {refreshToken} = req.cookies;

//     const result = await AuthService.refreshToken(refreshToken);   

    sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "login Sucessfully",  
    data: null
    
    })
})

export const AuthController = {
    loginUser,
    refreshToken
}