import * as DevConfig from "../configs/development.config";
import * as LocalConfig from "../configs/local.config";

export class EnvConfigService{
    getConfigs(env: string){
        console.log(env)
        if(env === "development"){
            const { config } = DevConfig;
            return config
        }

        if(env === "local"){
            const { config } = LocalConfig;
            return config
        }
    }
}