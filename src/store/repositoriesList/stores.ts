import { domain } from '../domain'

export const $allRepo = domain.createStore<boolean>(false)
export const $repoCount = domain.createStore<number>(10)
export const $repoList = domain.createStore<[]>([])