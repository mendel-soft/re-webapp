import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agents?: Array<Agent>;
  appointments?: Array<Appointment>;
  bathrooms: number | null;
  bedrooms: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  squareMeter: number | null;
  updatedAt: Date;
};
