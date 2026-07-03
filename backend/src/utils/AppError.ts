class AppError extends Error {
    readonly statusCode:number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, this.constructor);
        }
    }

}

export default AppError;