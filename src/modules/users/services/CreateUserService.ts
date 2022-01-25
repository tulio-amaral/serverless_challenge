import { v4 as uuid } from 'uuid'

import { CreateUserDTO } from '../dtos/CreateUserDTO'

import { document } from '../../../utils/dynamodbClient'
import { User } from '../model/User'

class CreateUserService {
  public async execute({ name, age, role, table_name = 'users' }: CreateUserDTO): Promise<User> {
    const user = {
      id: uuid(),
      name,
      age,
      role
    }

    await document.put({
      TableName: table_name,
      Item: {
        ...user
      }
    }).promise()

    return user;
  }
}

export default CreateUserService;
