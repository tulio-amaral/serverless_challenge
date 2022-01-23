import { Response, Request } from 'express'

import CreateUserService from '../services/CreateUserService';
import AppError from '../../../utils/AppError'

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, age, role } = request.body

    if(!name || !age || !role) {
      throw new AppError('All fields must be filled')
    }

    await CreateUserService.execute({ name, age, role })

    return response.status(201).send();
  }
}

export default new CreateUserController();