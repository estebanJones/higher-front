import { ConnectedUser } from '../../../../features/account/dto/connectedUser.model';
export class Equipe {
  nom!: string;
  nbDefeat!: number;
  nbVictory!: number;
  createdAt!: Date;
  creator!: ConnectedUser;
  capitaine!: ConnectedUser;
  membres!: ConnectedUser[];

  constructor(params: any) {
    Object.assign(this, params);
  }
}
