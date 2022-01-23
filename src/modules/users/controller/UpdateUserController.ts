import { Response, Request } from 'express'

import AppError from '../../../utils/AppError'
import UpdateUserService from '../services/UpdateUserService';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { name, age, role } = request.body;

    if(!name || !age || !role) {
      throw new AppError('All fields must be filled')
    }

    const user = await UpdateUserService.execute({
      userId,
      name, 
      age, 
      role
    })

    return response.json(user)
  }
}

export default new UpdateUserController();