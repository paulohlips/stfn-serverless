import { container } from "tsyringe";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

import { Employee } from "../../infra/DynamoORM/entities/Employee";
import { CreateEmployeeUseCase } from "./CreateEmployeesUseCase";

class CreateCarController {
  async handle(event: APIGatewayProxyEvent, context: Context): Promise<Employee | Object> {
        const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

        return await createEmployeeUseCase.execute(event);
  }
}

export { CreateCarController };
