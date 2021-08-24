const endpoint = '/assets/articles.json';

export interface ArticleInterface {
  name: string;
  id: string;
  description?: string;
  image: string;
  price: number;
  slug: string;
  type: string;
  year: string;
}

export const getArticles = (): Promise<ArticleInterface[]> =>
  fetch(endpoint)
    .then(res => res.json())
    .catch(err => console.log(err));

export const signIn = () =>
  Promise.resolve({ id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' });

export const signOut = () => Promise.resolve();
