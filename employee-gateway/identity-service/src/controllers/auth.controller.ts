import { Router, Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import { ErrorResponse, SuccessResponse } from '../helper/reponse';
import { validate } from '../middleware/validateUserRequest';
import { AuthService } from '../service/employee.service';

const AuthController = Router()


AuthController.post('/login', validate([body('username').isString(), body('password').isString()]) ,async(req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        if(AuthService.validatePassword(req.body)){
            const token = AuthService.generateToken(req.body);
            const data = {
                token : token,
                redirectUri : 'http://localhost:8080'
            }
            res.status(200).send(new SuccessResponse(200, "Success", data))
            return;
        }
        res.status(401).send(new ErrorResponse(401, "User not fount"))
        return;
    } catch (error) {
        res.status(500).send(new ErrorResponse(500, error.message))
        return;
    }
})

export default AuthController;