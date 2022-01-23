import { Router } from "express"; 

import CreateUserController from "../modules/users/controller/CreateUserController";
import ListUsersController from "../modules/users/controller/ListUsersController";
import FindUserController from "../modules/users/controller/FindUserController";
import DeleteUserController from "../modules/users/controller/DeleteUserController";

const usersRouter = Router()

usersRouter.post('/', CreateUserController.handle);
usersRouter.get('/', ListUsersController.handle);
usersRouter.get('/:userId', FindUserController.handle);
usersRouter.delete('/:userId', DeleteUserController.handle);

export default usersRouter;