import { Response, Request } from 'express'

import ListUsersService from '../services/ListUsersService';

class ListUsersController {
  async handle(_: Request, response: Response): Promise<Response> {
    const users = await ListUsersService.execute();

    return response.json(users);
  }
}

export default new ListUsersController();