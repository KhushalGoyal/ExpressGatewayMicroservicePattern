/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import EmployeeController from "../controllers/employee.controller";
import morgan from "morgan";

export class Application {
    private static app: Express = undefined;

    private static middlewares(): void {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
        this.app.use(bodyParser.json({ limit: "10mb" }));
        this.app.use(morgan("combined"));
        this.app.set("trust proxy", true);
        this.app.use("/api/employees", EmployeeController);
    }

    public static init(): Express {
        this.middlewares();
        return this.app;
    }
}
