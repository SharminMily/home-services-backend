import jwt, { JwtPayload, Secret } from "jsonwebtoken" 

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

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload;
}

export const jwtHelpers = {
    generateToken,
    verifyToken
}