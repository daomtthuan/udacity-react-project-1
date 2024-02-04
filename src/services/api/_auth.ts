export function getToken() {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }

  const randomStr = Math.random().toString(36);
  const newToken = randomStr.substring(randomStr.length - 8);
  localStorage.setItem('token', newToken);
  return newToken;
}
