import { Router, Request, Response, NextFunction } from "express";
import { Log4jsLogger } from "../configs/log4js.config";
import { ErrorResponse, SuccessResponse } from "../helper/reponse";
import { validateToken } from "../middleware/validateToken";
import { EmployeeService } from "../service/employee.service";

const EmployeeController = Router();
const logger = new Log4jsLogger("EmployeeController");

EmployeeController.get('/', validateToken ,async(req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info("Get Employees Initiated")
        res.status(200).send(new SuccessResponse(200, "Success", EmployeeService.getEmployees()))
        return;
    } catch (error) {
        logger.error(`${error.message}`)
        res.status(500).send(new ErrorResponse(500, error.message))
    }
})

EmployeeController.get('/:id', validateToken ,async(req: Request, res: Response, next: NextFunction) => {
    try {
        logger.info(`Get Employees on id Initiated ${req.params.id}`)
        const id = parseInt(req.params.id)
        if(EmployeeService.getEmployeeById(id)){
            res.status(200).send(new SuccessResponse(200, "Success", EmployeeService.getEmployeeById(id)));
            return;
        }
        logger.warn(`Employees id ${req.params.id} not found`)
        throw new Error("User not found");
    } catch (error) {
        logger.error(`${error.message}`)
        res.status(404).send(new ErrorResponse(404, error.message))
    }
    
})

export default EmployeeController;