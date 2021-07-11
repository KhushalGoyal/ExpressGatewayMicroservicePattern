import { Log4jsLogger } from "../configs/log4js.config";
import { employees } from "../constants/employee.constants";
import { Employee } from "../entities/employee";

const logger = new Log4jsLogger("EmployeeService")
export class EmployeeService {
    public static getEmployees() : Employee[] {
        logger.info("getEmployees service method executed")
        return employees
    }

    public static getEmployeeById(id : number) : Employee {
        logger.info("getEmployeeById service method executed")
        return employees.find(emp => emp.id == id)
    }
}