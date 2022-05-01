class APIError{
    constructor(code, message){
        this.code = code;
        this.message = message;
    }

    static badRequest(msg){
        return new ApIError(400, msg);
    }

    static Invalidrequest(msg){
        return new ApIError(404, msg);
    }

}
module.exports = APIError;