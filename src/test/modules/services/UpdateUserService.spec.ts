import CreateUserService from "../../../modules/users/services/CreateUserService"
import UpdateUserService from "../../../modules/users/services/UpdateUserService";
import AppError from '../../../utils/AppError'

let createUser: CreateUserService
let updateUser: UpdateUserService;

describe('Update User Test', () => {
  beforeAll(() => {
    createUser = new CreateUserService()
    updateUser = new UpdateUserService()
  });

  test('update user', async () => {
    const userData = {
      name: 'Túlio',
      age: 30,
      role: 'Dev',
      table_name: 'users_test'
    };

    const user = await createUser.execute(userData);

    const newUser = await updateUser.execute({
      userId: user.id,
      name: 'John Doe',
      age: 100,
      role: 'User',
      table_name: 'users_test'
    })

    expect(newUser.name).toBe('John Doe')
    expect(newUser.age).toBe(100)
    expect(newUser.role).toBe('User')
  })

  test('throw an error if no user does not exist', () => {
    expect(async () => {
      const userData = {
        name: 'Túlio',
        age: 30,
        role: 'Dev',
        table_name: 'users_test'
      };
  
      await createUser.execute(userData);
  
      const newUser = await updateUser.execute({
        userId: 'Not valid ID',
        name: 'John Doe',
        age: 100,
        role: 'User',
        table_name: 'users_test'
      })
  
      expect(newUser.name).toBe('John Doe')
      expect(newUser.age).toBe(100)
      expect(newUser.role).toBe('User')
    }).rejects.toBeInstanceOf(AppError)
  })
})