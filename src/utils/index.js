

export const checkIsAdmin = ({ username, password }) => {
  const currentUsername = "admin";
  const currentPassword = "admin";
  if (username === currentUsername && password === currentPassword) {
    return true;
  }
};

export const incorrectLoginAlert = (message = 'Неверный логин или пароль!') => alert(message)
