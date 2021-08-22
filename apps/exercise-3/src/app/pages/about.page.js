import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => (
  <div>
    <h2>About</h2>
    <Link data-testid="back-home-button" to="/">
      Return to Home
    </Link>
  </div>
);
