import { NextFunction, Response, Request } from "express"
export const validateEnv = (req: Request, res: Response, next: NextFunction) => {
    const validEnv = ["local","development"]
    if(!req.params.env) res.status(400).send("Environment is required !")
    if(validEnv.indexOf(req.params.env) === -1) res.status(400).send("Valid Environments are "+validEnv.toString())
    next();
    return;
}