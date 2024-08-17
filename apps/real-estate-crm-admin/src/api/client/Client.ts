import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Client = {
  agents?: Array<Agent>;
  appointments?: Array<Appointment>;
  contactPreference?: "Option1" | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
