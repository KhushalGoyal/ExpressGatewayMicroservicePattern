import { Application } from "./configs/express";
import { Log4jsLogger } from "./configs/log4js.config";

function bootstrap() {
  const logger = new Log4jsLogger("AppInit")
  logger.info(`Application bootstrap initiated.`)
  const app = Application.init();
  const port = 9000
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`)
  });
}

bootstrap();

