import {
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
  Entity,
  INDEX_TYPE,
} from '@typedorm/common';

@Entity({
  name: 'employee',
  primaryKey: {
    partitionKey: 'EMPLOYEE#{{id}}',
    sortKey: 'EMPLOYEE#{{id}}',
  }
})
export class Employee {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute()
  name: string;

  @Attribute()
  position: string;

  @Attribute()
  age: number;
}