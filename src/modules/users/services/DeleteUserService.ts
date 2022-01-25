import AppError from '../../../utils/AppError'

import { document } from '../../../utils/dynamodbClient'

class DeleteUserService {
  public async execute({ userId, table_name = 'users' }): Promise<void> {
    const { Item: findUser } = await document.get({
      TableName: table_name,
      Key: {
        id: userId
      }
    }).promise()

    if (!findUser) {
      throw new AppError('User not found')
    }

    await document.delete({
      TableName: 'users',
      Key: {
        id: userId
      }
    }).promise()
  }
}

export default DeleteUserService;
