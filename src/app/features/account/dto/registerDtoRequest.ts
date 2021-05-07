export class RegisterDtoRequest {
    email?: string;
    password?: string;
    nationalite?: string;
    username?: string;

    constructor(params?: string) {
        Object.assign(this, params);
    }
}