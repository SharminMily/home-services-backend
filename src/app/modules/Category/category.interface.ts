export type TCategory = {
  id?: string;
  name: string;
  popular: boolean;
  featured: boolean;
  latest: boolean;
//   service: Service[];
  createdAt?: Date;
  updateAt?: Date;
};

export type TCategoryUpdate = {
 
  createdAt?: Date;
  updateAt?: Date;
};