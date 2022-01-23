import { document } from '../../../utils/dynamodbClient'
import AppError from '../../../utils/AppError'

class ListUsersService {
  
  public async execute(): Promise<any> {
    const { Items: users }  = (await document
      .scan({ TableName: 'users' })
      .promise())

    if(!users) {
      throw new AppError('There are no users to be listed')
    }

    return users
  }
}

export default new ListUsersService()
