import "reflect-metadata";

import { container } from "tsyringe";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

import { FindByIdEmployeesUseCase } from "./FindByIdEmployeesUseCase";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

class FindByIdEmployeesController {
  async handle(event: APIGatewayProxyEvent, context: Context): Promise<Employee> {
    const findByIdEmployeesUseCase = container.resolve(FindByIdEmployeesUseCase);

    return await findByIdEmployeesUseCase.execute(event);
  }
}

export { FindByIdEmployeesController };
