import dotenv from "dotenv";

class EnvConf {
    public envValues : any;
    constructor(){
        dotenv.config()
        this.initialize()
    }

    initialize(){
        this.envValues = {
            secret : process.env.SECRET
        }
    }
}

export const EnvConfig = new EnvConf()