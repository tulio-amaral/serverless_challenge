import { Router } from "express"; 

import CreateUserController from "../modules/users/controller/CreateUserController";

const usersRouter = Router()

usersRouter.post('/', CreateUserController.handle)

export default usersRouter;