import CreateUserService from "../../../modules/users/services/CreateUserService"

let userCreate: CreateUserService

describe('Create User Test', () => {
  beforeAll(() => {
    userCreate = new CreateUserService()
  });

  test('create new user', async () => {
    const userData = {
      name: 'Túlio',
      age: 30,
      role: 'Dev',
      table_name: 'users_test'
    };

    const user = await userCreate.execute(userData);

    expect(user).toHaveProperty('id')
  })
})