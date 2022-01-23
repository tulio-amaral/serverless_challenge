import { v4 as uuid } from 'uuid'

import { CreateUserDTO } from '../dtos/CreateUserDTO'

import { document } from '../../../utils/dynamodbClient'

class CreateUserService {
  public async execute({ name, age, role }: CreateUserDTO): Promise<void> {
    const user = {
      id: uuid(),
      name,
      age,
      role
    }

    await document.put({
      TableName: 'users',
      Item: {
        ...user
      }
    }).promise()
  }
}

export default new CreateUserService();
