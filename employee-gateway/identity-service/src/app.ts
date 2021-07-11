import { Application } from "./configs/express";

function bootstrap() {
  const app = Application.init();
  const port = 9001
  app.listen(port, () => {
    console.info(`server started on ${port}`);
  });
}

bootstrap();

