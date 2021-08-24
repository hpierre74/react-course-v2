import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { HomePage } from './pages/home.page';
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
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
