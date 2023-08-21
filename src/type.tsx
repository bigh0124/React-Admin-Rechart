export type UserT = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified?: boolean;
};

export type ProductT = {
  id: number;
  img: string;
  title: string;
  color: string;
  producer: string;
  price: string;
  createdAt: string;
  inStock?: boolean;
};
