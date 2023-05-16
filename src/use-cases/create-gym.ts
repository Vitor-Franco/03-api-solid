import { GymsRepository } from '@/repositories/gyms-repository'
import type { Gym } from '@prisma/client'

interface CreateGymUseCaseRequest {
  title: string
  description?: string | null // if null, it will be set to null in the database, if undefined, it will be ignored
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    latitude,
    longitude,
    phone,
    title,
    description,
  }: CreateGymUseCaseRequest): Promise<CreateGymUseCaseResponse> {
    const gym = await this.gymsRepository.create({
      latitude,
      longitude,
      phone,
      title,
      description,
    })

    return {
      gym,
    }
  }
}
