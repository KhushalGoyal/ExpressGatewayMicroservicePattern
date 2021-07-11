import { Logger } from "log4js";
import { Log4jsLogger } from "../configs/log4js.config";
import { HttpHelper } from "./httphelper";

class EnvConf {
    public envValues : any;
    private logger: Log4jsLogger;
    constructor(){
        this.logger = new Log4jsLogger("EnvConf")
        this.initialize()
    }

    async initialize(){
        this.logger.info("EnvConf initializtion started")
        const httpHelper = new HttpHelper("http://localhost:8080")
        this.envValues = (await httpHelper.get("api/env/local", null))["data"]
        this.logger.info(`EnvConf initializtion completed ${JSON.stringify(this.envValues)}`)
    }
}

export const EnvConfig = new EnvConf()