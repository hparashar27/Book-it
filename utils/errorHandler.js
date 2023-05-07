
// for custom errorhandling of the routes of the application 

class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode ;

        // this gives the error message according to the stack location
        Error.captureStackTrace(this,this.constructor)
    }
}

export default ErrorHandler;