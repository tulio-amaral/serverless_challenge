import { Response, Request } from 'express'
import FindUserService from '../services/FindUserService';

class FindUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const user = await FindUserService.execute(userId)

    return response.json(user)
  }
}

export default new FindUserController();