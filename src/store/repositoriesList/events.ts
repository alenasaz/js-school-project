import { domain } from '../domain'

export const setAllRepoVisibleEvent = domain.createEvent()
export const setAllRepoUnvisibleEvent = domain.createEvent()
export const setRepoCountEvent = domain.createEvent()
export const setRepoListEvent = domain.createEvent()