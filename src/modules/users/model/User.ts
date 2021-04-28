import { v4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = v4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }
}

export { User };
