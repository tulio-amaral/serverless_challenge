import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { document } from '../../../utils/dynamodbClient'
import AppError from '../../../utils/AppError'
import { User } from "../model/User";

class UpdateUserService {
  async execute({ userId, name, age, role }: UpdateUserDTO): Promise<any> {
    const { Item: findUser } = await document.get({
      TableName: 'users',
      Key: {
        id: userId
      }
    }).promise()

    if(!findUser) {
      throw new AppError('User not found')
    }

    const user = await document
      .update({
        TableName: 'users',
        Key: {
          id: userId
        },
        UpdateExpression: 'set #name = :name, age = :age, #role = :role',
        ExpressionAttributeValues: {
          ':name': name,
          ':age': age,
          ':role': role
        },
        ExpressionAttributeNames: {
          '#name': 'name',
          '#role': 'role'
        },
        ReturnValues: 'UPDATED_NEW'
      })
      .promise()

    return user.Attributes as User

  }
}

export default new UpdateUserService();