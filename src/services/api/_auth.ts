export function getToken() {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }

  const randomStr = Math.random().toString(36);
  return randomStr.substring(randomStr.length - 8);
}
