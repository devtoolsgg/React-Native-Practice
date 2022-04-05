// id, 이름 , 아바타, 날짜, 글 등을 랜덤하게 생성

import faker from 'faker'

import * as U from './util'

export const randomId = (): string => faker.datatype.uuid()
export const randomName = (): string => faker.name.findName()
export const randomEmail = (): string => faker.internet.email()
export const randomAvatarUrl = (name?: string): string =>
  U.avatarUriByName(name ?? randomName())
export const randomDate = (): Date => faker.date.recent()
export const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join('\n')
export const randomImage = (): string =>
  U.unplashUrl(U.random(800, 1000), U.random(800, 1000))

