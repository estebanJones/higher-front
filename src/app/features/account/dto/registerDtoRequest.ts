export class RegisterDtoRequest {
    email?: string;
    password?: string;

    constructor(params?: string) {
        Object.assign(this, params);
    }
}