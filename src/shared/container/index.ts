import "reflect-metadata";
import { container } from "tsyringe";

import { IEmployeeRepository } from "../../modules/Employee/infra/DynamoORM/repositories/IEmployeerRepository";
import { EmployeeRepository } from "../../modules/Employee/infra/DynamoORM/repositories/implementations/EmployerRepository";

container.registerSingleton<IEmployeeRepository>(
  "EmployeesRepository",
  EmployeeRepository
);
