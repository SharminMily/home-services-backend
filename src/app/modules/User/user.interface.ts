export type TUser = {
  id?: string;
  name: string;
  email: string;
  phone?: number | null;
  photo?: string | null;
  password: string;
  adress: string; 
 gender:  string | null;
  createdAt?: Date;
  updateAt?: Date;
};

export type TUserUpdate = {
  name: string ;
  phone?: number | null;
  photo?: string | null;  
  adress: string;  
  createdAt?: Date;
  updateAt?: Date;
};