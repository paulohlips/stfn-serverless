import { Employee } from "../entities/Employee";
interface ICreateEmployeeDTO {
  name: string;
  age: number;
  position: string;
}
interface IEmployeeRepository {
  findById(id: string): any;
  list(): any;
  create({ name, age, position }: ICreateEmployeeDTO): any;
  update(data: any): any,
  delete(id: string): any;
}

export { IEmployeeRepository, ICreateEmployeeDTO };
