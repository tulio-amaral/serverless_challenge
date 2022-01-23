import AppError from '../../../utils/AppError'

import { document } from '../../../utils/dynamodbClient'

class DeleteUserService {
  public async execute(userId: string): Promise<void> {
    const { Item: findUser } = await document.get({
      TableName: 'users',
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

export default new DeleteUserService();
