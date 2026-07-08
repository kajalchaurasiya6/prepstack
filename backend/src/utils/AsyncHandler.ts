import type {RequestHandler} from "express";

//  function asyncHandler(controller:RequestHandler): RequestHandler {
//     return async function (req, res, next) {
//         try {
//             await controller(req, res, next);
//         } catch (error) {
//             console.log("Caught!");
//             next(error);
//         }
//     };
// }
function asyncHandler(controller:RequestHandler): RequestHandler {
    return  function (req, res, next) {
        Promise.resolve(controller(req, res, next)).catch(next);
    };
}

export { asyncHandler };