import { inject, injectable } from "tsyringe";
import { APIGatewayProxyEvent } from "aws-lambda";

import { IEmployeeRepository } from "../../infra/DynamoORM/repositories/IEmployeerRepository";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

@injectable()
class UpdateEmployeeUseCase {
  constructor(
    @inject("EmployeesRepository")
    private employeesRepository: IEmployeeRepository
  ) {}

  async execute(event: APIGatewayProxyEvent): Promise<Employee> {
    const { pathParameters, body} = event
    return await this.employeesRepository.update({ employeeId: pathParameters.employeeId, body });
  }
}

export { UpdateEmployeeUseCase };
