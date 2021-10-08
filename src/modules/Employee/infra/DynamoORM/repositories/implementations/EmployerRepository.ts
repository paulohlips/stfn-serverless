import { uuid } from 'uuidv4';

import { dynamo } from '../../../../../../config/database/DynamoDbConn'
import { IEmployeeRepository } from "../IEmployeerRepository";

interface ICreateEmployeeDTO {
  name: string,
  age: number,
  position: string
}

interface IUpdateEmployeeDTO {
  employeeId: string,
  body: string,
}

const TableName = "Employees"

class EmployeeRepository implements IEmployeeRepository {

  async list(){
    var params = {
      TableName
  };
  
    try {
      return await dynamo.scan(params, []).promise();
    } catch(error) {
      return error
    }
  }

  async create({name, age, position}: ICreateEmployeeDTO){
    const params = {
      TableName,
      Item: { id: uuid(), name, age, position }
    }

    try {
      await dynamo.put(params).promise()
      return params.Item
    } catch (error) {
      return error
    }

  }

  async findById(employeeId: string){
    const params = {
      TableName,
      Key: {
         id: employeeId
      }
    }

    try {
      const employee = await dynamo.get(params).promise();

      return employee;
    } catch (error) {
      return error
    }
  }

  async update({employeeId, body}: IUpdateEmployeeDTO){
    const {name, age, position} = JSON.parse(body)
    
    const params = {
      TableName,
      Item: {id: employeeId, name, age, position}
    }

    try {
      await dynamo.put(params).promise()
      return params.Item
    } catch (error) {
      return error
    }
  }

  async delete(employeeId: string){
   const params = {
      TableName,
      Key: {
        id: employeeId
      },
      ReturnValues: 'ALL_OLD'
    }
    
    try {
      await dynamo.delete(params).promise();
      return `Employee ${employeeId} has been deleted`
    } catch (error) {
      return error
    }
  } 
}

export { EmployeeRepository };
