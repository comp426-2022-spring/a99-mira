import APIError from "./APIError.js";


export default function apiErrorHandler(err, req, res, next){
    console.error.apply(err);

    if(err instanceof APIError){
        res.status(err.code).json(err.message);
    }

    res.status(500).json('something went wrong');
}
