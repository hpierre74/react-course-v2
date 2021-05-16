import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { CartProvider } from './modules/cart/cart.context';
import { ArticlesProvider } from './modules/articles/articles.context';

import { HomePage } from './pages/home.page';
import { ArticlePage } from './pages/article.page';
import { AboutPage } from './pages/about.page';
import { ContactPage } from './pages/contact.page';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
      <ArticlesProvider>
        <CartProvider>
          <Switch>
            <Route path="/articles/:id">
              <ArticlePage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </CartProvider>
      </ArticlesProvider>
    </Router>
  );
}
