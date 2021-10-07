import { inject, injectable } from "tsyringe";

import { IEmployeeRepository } from "../../infra/DynamoORM/repositories/IEmployeerRepository";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

@injectable()
class ListEmployeesUseCase {
  constructor(
    @inject("EmployeesRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.list();

    return employees;
  }
}

export { ListEmployeesUseCase };
