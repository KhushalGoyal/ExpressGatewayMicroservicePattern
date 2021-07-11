import { NextFunction, Response, Request } from "express"
import  jwt from "jsonwebtoken";
import { EnvConfig } from "../helper/envConfig";

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers.authorization){
        const secret = EnvConfig.envValues.SECRET;
        const tokenVerified = jwt.verify(req.headers.authorization.split(" ")[1], secret)
        next()
        return;
    }
    res.status(400).send("Unauthorized")
    return;
}