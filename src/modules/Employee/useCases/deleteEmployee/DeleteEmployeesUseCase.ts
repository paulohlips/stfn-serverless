import { inject, injectable } from "tsyringe";

import { IEmployeeRepository } from "../../repositories/IEmployeerRepository";

@injectable()
class DeleteEmployeeUseCase {

  constructor(
    @inject("EmployeesRepository")
    private employeesRepository: IEmployeeRepository
  ) {}

  async execute(employeeId: string): Promise<any> {
   return await this.employeesRepository.delete(employeeId);
  }
}

export { DeleteEmployeeUseCase };
