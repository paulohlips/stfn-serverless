import "reflect-metadata";
import { Context, APIGatewayProxyEvent } from "aws-lambda";
import { container } from "tsyringe";

import { ListEmployeesUseCase } from "./ListEmployeesUseCase";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

class ListEmployeesController {
  async handle(event: APIGatewayProxyEvent, context: Context): Promise<Employee[]> {
    const listEmployeesUseCase = container.resolve(ListEmployeesUseCase);

    const all = await listEmployeesUseCase.execute();

    return all;
  }
}

export { ListEmployeesController };
