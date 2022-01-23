import { Response, Request } from 'express'

import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, age, role } = request.body

    await CreateUserService.execute({ name, age, role })

    return response.status(201).send();
  }
}

export default new CreateUserController();