import config from "../config";
import { jwtHelpers } from "./jwtHelpers";

export const generateAuthTokens = (user: {
  email: string;
  role: string;
}) => {
  //  Create Access Token
  const accessToken = jwtHelpers.generateToken(
    { email: user.email, role: user.role },
    config.jwt.jwt_secret as string,
    config.jwt.expires_in as string
  );

  // Create Refresh Token
  const refreshToken = jwtHelpers.generateToken(
    { email: user.email, role: user.role },
    config.jwt.refresh_token_secret as string,
    config.jwt.refresh_token_expires_in as string
  );

 
  return { accessToken, refreshToken };
};