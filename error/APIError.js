export default class APIError{
    constructor(code, message){
        this.code = code;
        this.message = message;
    }

    static badRequest(msg){
        return new APIError(400, msg);
    }

    static Invalidrequest(msg){
        return new APIError(404, msg);
    }

}
