import { domain } from '../domain'

export const setDrawerVisible = domain.createEvent()
export const setDrawerUnvisible = domain.createEvent()
export const setUserName = domain.createEvent<string>()