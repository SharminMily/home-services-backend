export type TCategory = {
  id?: string;
  name: string;
  image?  : string;
  popular: boolean | null;
  featured: boolean | null;
  latest: boolean | null;
//   service: Service[];
  createdAt?: Date;
  updateAt?: Date;
};

export type TCategoryUpdate = {
  name: string;
  image?  : string;
  popular: boolean | null;
  featured: boolean | null;
  latest: boolean | null;
  createdAt?: Date;
  updateAt?: Date;
};