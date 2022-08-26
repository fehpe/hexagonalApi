import Customer from "../core/entities/Customer";

export {};

declare global {
  namespace Express {
    interface Request {
      customer: Customer;
      show: string;
    }
  }
}