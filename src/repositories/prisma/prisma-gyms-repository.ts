import { prisma } from '@/lib/prisma'
import { Gym, Prisma } from '@prisma/client'
import { FindManyNearbyParams, GymsRepository } from '../gyms-repository'

export class PrismaGymsRepository implements GymsRepository {
  async findById(id: string) {
    const gym = await prisma.gym.findUnique({
      where: {
        id,
      },
    })

    return gym
  }

  async findManyNearby(params: FindManyNearbyParams) {
    const TEN_KM = 10
    const EARTH_RADIUS_KM = 6371

    // Utiliza a fórmula de Haversine para calcular
    // a distância entre dois pontos em uma esfera
    const gyms = await prisma.$queryRaw<Gym[]>`
      SELECT * from gyms
        WHERE (
          ${EARTH_RADIUS_KM} * acos(
            cos(radians(${params.latitude})) * 
            cos(radians(latitude)) * 
            cos(radians(longitude) - radians(${params.longitude})) + 
            sin(radians(${params.latitude})) * 
            sin(radians(latitude))
          )
        ) <= ${TEN_KM}
    `

    return gyms
  }

  async create(data: Prisma.GymCreateInput) {
    const gym = await prisma.gym.create({
      data,
    })

    return gym
  }

  async searchMany(query: string, page: number) {
    const gyms = await prisma.gym.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return gyms
  }
}
