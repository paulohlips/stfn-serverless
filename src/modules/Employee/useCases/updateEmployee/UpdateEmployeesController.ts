import { container } from "tsyringe";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

import { Employee } from "../../infra/DynamoORM/entities/Employee";
import { UpdateEmployeeUseCase } from "./UpdateEmployeesUseCase";

class UpdateEmployeeController {
  async handle(event:APIGatewayProxyEvent, context: Context): Promise<Employee> {
    
    const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase);

    return await updateEmployeeUseCase.execute(event);
  }
}

export { UpdateEmployeeController };
