import React from 'react';
import { Link } from 'react-router-dom';

export const ContactPage = () => (
  <div>
    <h2>Contact</h2>
    <Link data-testid="back-home-button" to="/">
      Return to Home
    </Link>
  </div>
);
