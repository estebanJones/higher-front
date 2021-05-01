import { Role } from "./role.model";

export class ConnectedUser{
    id!: number;
    email!: string;
    role!: Role[];
  
    constructor(params: any) {
      Object.assign(this, params);
    }
  
    public isConnected(): boolean {
      return this.email != undefined;
    }
  }