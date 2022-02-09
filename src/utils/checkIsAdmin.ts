import { LoginCheck } from '../interfaces'

export const checkIsAdmin = ( values: LoginCheck) => {
  const currentUsername = "admin";
  const currentPassword = "admin";
  if (values.username === currentUsername && values.password === currentPassword) {
    return true;
  }
};