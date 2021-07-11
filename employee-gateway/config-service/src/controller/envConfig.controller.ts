import { Router, NextFunction, Response, Request } from "express"
import { ErrorResponse, SuccessResponse } from "../helper/reponse";
import { validateEnv } from "../middleware/validateEnv";
import { EnvConfigService } from "../service/envConfig";
const EnvController = Router()

EnvController.get("/:env", validateEnv ,async(req: Request, res: Response, next: NextFunction) => {
    try {
        const envService = new EnvConfigService()
        const currentConfig = envService.getConfigs(req.params.env);
        console.log(currentConfig)
        res.status(200).send(new SuccessResponse(200, "Success", currentConfig))
        return;
    } catch (error) {
        res.status(500).send(new ErrorResponse(500, error.message))
    }
})

export default EnvController;