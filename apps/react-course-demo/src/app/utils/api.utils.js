const endpoint = '/assets/articles.json';

export const getArticles = () =>
  fetch(endpoint)
    .then((res) => res.json())
    .catch((err) => console.log(err));

export const signIn = () =>
  Promise.resolve({ id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' });
export const signOut = (args) => Promise.resolve(args);
