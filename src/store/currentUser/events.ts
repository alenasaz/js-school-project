import { domain } from '../domain'

export const setCurrentUserEvent = domain.createEvent<string>()
export const setUserNameEvent = domain.createEvent<string>()
export const setUserIsLoadingEvent = domain.createEvent<boolean>()
