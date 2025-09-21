import multer from "multer"
import path from "path"
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import { promises } from "dns";
import { ICloudinaryResponse, IFile } from "../app/interfaces/file";

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dxqnvx69a', 
        api_key: '844983289281844', 
        api_secret: 'aL7Sj_47mogihXTr0I5umzzoDK4' 
    })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
   
    
  const uploadToCloudinary = async(file: IFile):Promise<ICloudinaryResponse> => {
 
    return new Promise((resolve, reject) => {
             cloudinary.uploader
       .upload(file.path , 
          (error: Error, result: ICloudinaryResponse) =>{
            fs.unlinkSync(file.path)
            if (error) {
              reject(error)
            }
            else{
              resolve(result)
            }
          }
         )  

    })   

  } 

export const fileUploader = {
 upload ,
 uploadToCloudinary
}