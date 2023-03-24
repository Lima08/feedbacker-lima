import AuthService from './auth'
import mockAxios from 'axios'

jest.mock('axios')
//  TODO: Fazer testes de erro e demais situações

describe('AuthServices', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Test login', async () => {
    const token = '123.123.123'
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({
      email: 'joao@gomes.me',
      password: '123123',
    })

    expect(response.data).toHaveProperty('token')
    expect(response).toMatchSnapshot()
  })
})
