export function validateusername(str) {
  const role = ['store', 'factory', 'seller', 'user'];
  return role.indexOf(str.trim()) >= 0;
}
