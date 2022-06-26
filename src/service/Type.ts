export type MechanicType = {
  id: number;
  name: string;
  email: string;
  password: string;
  contact: string;
  experience: string;
  vehicle: string;
  rating: string;
  price: string;
  distance: string;
};
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  contact: string;
};
export type RequestType = {
  userId: number;
  mechanicId: number;
  carModel: string;
  subject: string;
  datetime: string;
  location: string;
  contact: string;
  content: string;
};
