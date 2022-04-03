import { domain } from '../domain'

export const $displayDrawer = domain.createStore<boolean>(false)
export const $userName = domain.createStore<string>('dpolevodin')