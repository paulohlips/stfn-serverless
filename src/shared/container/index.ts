import "reflect-metadata";
import { container } from "tsyringe";

import { IEmployeeRepository } from "../../modules/Employee/repositories/IEmployeerRepository";
import { EmployeeRepository } from "../../modules/Employee/infra/DynamoORM/repositories/EmployerRepository";

container.registerSingleton<IEmployeeRepository>(
  "EmployeesRepository",
  EmployeeRepository
);
