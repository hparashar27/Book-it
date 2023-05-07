import ErrorHandler from "@/utils/errorHandler";

const OnError = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500 ;
    let error = {...err};
error.message = err.message;

res.status(err.statusCode).json({
    success : false,
    error,
    message : error.message,
    stack : error.stack
})
}

export default OnError