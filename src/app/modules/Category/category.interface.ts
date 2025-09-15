export type TCategory = {
  id?: string;
  name: string;
  popular: boolean | null;
  featured: boolean | null;
  latest: boolean | null;
//   service: Service[];
  createdAt?: Date;
  updateAt?: Date;
};

export type TCategoryUpdate = {
 
  createdAt?: Date;
  updateAt?: Date;
};