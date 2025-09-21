// src/types/service.type.ts

export type TService = {
  id?: string;   
  title: string;
  description: string;
  category_id: string;         
  image: string;
  price: number;
  document?: string;          
  location_id: string;         
  createdAt?: Date;    
  service_provider?: any[];
  booking?: any[];
  reviews?: any[];
};
