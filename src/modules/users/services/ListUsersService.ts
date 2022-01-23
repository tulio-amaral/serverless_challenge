import { document } from '../../../utils/dynamodbClient'
import AppError from '../../../utils/AppError'

class ListUsersService {
  
  public async execute(): Promise<any> {
    const { Items }  = (await document
      .scan({ TableName: 'users' })
      .promise())

    if(!Items) {
      throw new AppError('There are no users to be listed')
    }

    return Items
  }
}

export default new ListUsersService()
