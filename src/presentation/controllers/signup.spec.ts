import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: ' Alef',
        email: 'alefwhite@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
