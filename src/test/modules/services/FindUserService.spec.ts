import CreateUserService from "../../../modules/users/services/CreateUserService"
import FindUserService from '../../../modules/users/services/FindUserService';
import AppError from '../../../utils/AppError'

let createUserService: CreateUserService
let findUserService: FindUserService

describe('Find User Test', () => {
  beforeAll(() => {
    createUserService = new CreateUserService()
    findUserService = new FindUserService()
  });

  test('find an user', async () => {
    const userData = {
      name: 'Túlio',
      age: 30,
      role: 'Dev',
      table_name: 'users_test'
    };

    const user = await createUserService.execute(userData);

    const foundUser = await findUserService.execute({ 
      userId: user.id, 
      table_name: 'users_test'
    });

    expect(foundUser.name).toBe('Túlio')
  })

  test('throw an error if no user does not exist', () => {
    expect(async () => {
      const userData = {
        name: 'Túlio',
        age: 30,
        role: 'Dev',
        table_name: 'users_test'
      };
  
      await createUserService.execute(userData);
  
      const newUser = await findUserService.execute({
        userId: 'Not valid ID', table_name: 'users_test'
      })
  
      expect(newUser.name).toBe('John Doe')
      expect(newUser.age).toBe(100)
      expect(newUser.role).toBe('User')
    }).rejects.toBeInstanceOf(AppError)
  })
})