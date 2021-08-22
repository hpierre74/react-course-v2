export const signIn = () =>
  Promise.resolve({ id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' });
export const signOut = args => Promise.resolve(args);
