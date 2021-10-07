import { inject, injectable } from "tsyringe";
import { APIGatewayProxyEvent } from "aws-lambda";

import { IEmployeeRepository } from "../../infra/DynamoORM/repositories/IEmployeerRepository";
import { Employee } from "../../infra/DynamoORM/entities/Employee";

@injectable()
class CreateEmployeeUseCase {
  constructor(
    @inject("EmployeesRepository")
    private employeesRepository: IEmployeeRepository
  ) {}

  async execute(event: APIGatewayProxyEvent): Promise<Employee | Object> {

    if(!event.body){
      return {statusCode: 400, message: "Empty body!"}
    }
     const {
      name,
      age,
      position
    } = JSON.parse(event.body) 

    return await this.employeesRepository.create({
      name,
      age,
      position
    });
  }
}

export { CreateEmployeeUseCase };
