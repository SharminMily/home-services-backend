import jwt from "jsonwebtoken" 

const generateToken = (payload: any, secrect: string, expiresIn: string) => {
    const token = jwt.sign(
  payload,
  secrect, 
  {
  algorithm: "HS256",
  expiresIn
}
);
    return token;
}

export const jwtHelpers = {
    generateToken
}