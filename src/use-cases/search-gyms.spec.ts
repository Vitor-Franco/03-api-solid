import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('SearchGyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Javascript Gym',
      latitude: -27.2092052,
      longitude: -49.6401091,
      phone: null,
      description: null,
    })

    await gymsRepository.create({
      title: 'Typescript Gym',
      latitude: -27.2092052,
      longitude: -49.6401091,
      phone: null,
      description: null,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Javascript Gym',
      }),
    ])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Javascript Gym ${i}`,
        latitude: -27.2092052,
        longitude: -49.6401091,
        phone: null,
        description: null,
      })
    }
    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 2,
    })
    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({
        title: 'Javascript Gym 21',
      }),
      expect.objectContaining({
        title: 'Javascript Gym 22',
      }),
    ])
  })
})
