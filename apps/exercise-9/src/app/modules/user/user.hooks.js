export const usePersistedUser = () => {
  // You would normally validate the user token here
  // and set a new one in case it is not valid anymore
  return localStorage.getItem('user');
};
