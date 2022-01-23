import { Response, Request } from 'express'
import DeleteUserService from '../services/DeleteUserService';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    await DeleteUserService.execute(userId);

    return response.send();
  }
}

export default new DeleteUserController();