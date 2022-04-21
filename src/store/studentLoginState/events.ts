import { domain } from '../domain'

export const setStudentCodeSuccess = domain.createEvent<string>()
export const setStudentCodeFailure = domain.createEvent<string>()