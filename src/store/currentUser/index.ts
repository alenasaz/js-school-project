import { createStore, createEvent } from 'effector'
import { CurrentUserInfo } from '../interfaces'

export const setCurrentUserEvent = createEvent<CurrentUserInfo>()

export const $currentUser = createStore<CurrentUserInfo | null>(null)

$currentUser.on(setCurrentUserEvent, (_, user) => user)
