export class ConnexionDtoSpring {
    username!: string;
    password!: string;

    constructor(params?: any) {
        Object.assign(this, params);
    }
} 