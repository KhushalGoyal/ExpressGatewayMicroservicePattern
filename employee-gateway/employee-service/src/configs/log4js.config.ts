import { Logger, getLogger, configure, Log4js } from "log4js"

export const config = {
    appenders: {
        consoleAppender: {
            type: "console",
        }
    },
    categories: {
        default: {
            appenders: ["consoleAppender"],
            level: "info"
        }
    }
}

export class Log4jsLogger {
    private logger: Logger;
    private configuration: Log4js;
    constructor(module: string) {
        this.configuration = configure(config)
        this.logger = getLogger(module)
    }

    info(message: string) {
        this.logger.info(message)
    }

    warn(message: string) {
        this.logger.warn(message)
    }

    trace(message: string) {
        this.logger.warn(message)
    }

    debug(message: string) {
        this.logger.warn(message)
    }

    error(message: string) {
        this.logger.warn(message)
    }

    fatal(message: string) {
        this.logger.warn(message)
    }

    mark(message: string) {
        this.logger.warn(message)
    }
}