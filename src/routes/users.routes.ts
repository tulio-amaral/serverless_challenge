import { Router } from "express"; 

import CreateUserController from "../modules/users/controller/CreateUserController";
import ListUsersController from "../modules/users/controller/ListUsersController";

const usersRouter = Router()

usersRouter.post('/', CreateUserController.handle)
usersRouter.get('/', ListUsersController.handle)

export default usersRouter;