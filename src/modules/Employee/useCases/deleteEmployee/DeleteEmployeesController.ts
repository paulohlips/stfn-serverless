import { container } from "tsyringe";

import { DeleteEmployeeUseCase } from "./DeleteEmployeesUseCase";

class DeleteEmployeeController {
  async handle(event, context): Promise<any> {
    
    const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);

    return await deleteEmployeeUseCase.execute(event.pathParameters.employeeId);
  }
}

export { DeleteEmployeeController };
