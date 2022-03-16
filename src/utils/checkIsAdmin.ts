import { LoginCheck } from '../interfaces'

export const checkIsAdmin = ({ username, password }: LoginCheck) => {
  const currentUsername = 'admin'
  const currentPassword = 'admin'
  if (username === currentUsername && password === currentPassword) {
    return true
  }
}
