import { container } from "tsyringe";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

import { DeleteEmployeeUseCase } from "./DeleteEmployeesUseCase";

class DeleteEmployeeController {
  async handle(event: APIGatewayProxyEvent, context: Context): Promise<any> {
    
    const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);

    return await deleteEmployeeUseCase.execute(event.pathParameters.employeeId);
  }
}

export { DeleteEmployeeController };
