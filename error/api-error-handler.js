const APIError = require('./APIError');


function apiErrorHandler(err, res, res, next){
    console.error.apply(err);

    if(err instanceof APIError){
        res.status(err.code).json(err.message);
    }

    res.status(500).json('something went wrong');
}
module.exports = apiErrorHandler;