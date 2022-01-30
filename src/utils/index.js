export const checkIsAdmin = ({ username, password }) => {
  const currentUsername = "admin";
  const currentPassword = "admin";
  if (username === currentUsername && password === currentPassword) {
    return true;
  }
  return false;
};
