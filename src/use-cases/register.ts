import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ email, name, password }: RegisterUseCaseRequest) {
    const emailInUse = await this.usersRepository.findByEmail(email)

    if (emailInUse) {
      throw new Error('Email already in exists.')
    }

    const password_hash = await hash(password, 6)
    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
