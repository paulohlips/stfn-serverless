import "reflect-metadata";
import "./shared/container";

import { Handler, APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import {CreateCarController, DeleteEmployeeController, FindByIdEmployeesController, ListEmployeesController, UpdateEmployeeController} from './modules/Employee/useCases'

export const listAll: Handler = async  (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const listEmployeesController = new ListEmployeesController()
  
  const employees = await  listEmployeesController.handle(event, context)
  return {
    statusCode: 200,
    body: JSON.stringify(employees)
  };
};

export const findById: Handler = async  (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const findByIdEmployeesController = new FindByIdEmployeesController()
  
  const employees = await  findByIdEmployeesController.handle(event, context)
  return {
    statusCode: 200,
    body: JSON.stringify(employees)
  };
};

export const create: Handler = async  (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const createCarController = new CreateCarController()
  
  const newEmployee = await createCarController.handle(event, context)

  return {
    statusCode: 201,
    body: JSON.stringify(newEmployee)
  };
};

export const update: Handler = async  (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const updateEmployeeController = new UpdateEmployeeController()
  
  const updatedEmployee = await updateEmployeeController.handle(event, context)

  return {
    statusCode: 200,
    body: JSON.stringify(updatedEmployee)
  };
};

export const deleteFunction: Handler = async  (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const deleteEmployeeController = new DeleteEmployeeController()
  
  const result = await deleteEmployeeController.handle(event, context)

  return {
    statusCode: 204,
    body: JSON.stringify({message: result})
  };
};


