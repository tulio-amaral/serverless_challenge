import AppError from '../../../utils/AppError'
import { document } from '../../../utils/dynamodbClient'

class FindUserService {
  public async execute({ userId, table_name = 'users' }): Promise<any> {
    const { Item: user } = await document
      .get({ 
        TableName: table_name,
        Key: { id: userId } 
      })
      .promise()

    if (!user) {
      throw new AppError('User not found')
    } 

    return user
  }
}

export default FindUserService;
