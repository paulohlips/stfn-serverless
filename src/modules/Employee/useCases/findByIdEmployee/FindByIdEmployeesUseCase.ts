import { inject, injectable } from "tsyringe";
import { Context, APIGatewayProxyEvent } from "aws-lambda";

import { IEmployeeRepository } from "../../infra/DynamoORM/repositories/IEmployeerRepository";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

@injectable()
class FindByIdEmployeesUseCase {
  constructor(
    @inject("EmployeesRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(event: APIGatewayProxyEvent): Promise<Employee> {
    const { employeeId } = event.pathParameters

    return await this.employeeRepository.findById(employeeId);
  }
}

export { FindByIdEmployeesUseCase };
