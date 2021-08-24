/* eslint-disable no-unused-vars */
import React from 'react';

const NAMES = ['Pierre', 'Paul', 'Jacques'];

const PERSONS = {
  abcdef: {
    name: 'Peter Parker',
    age: '57',
  },
  ghijkl: {
    name: 'Bruce Wayne',
    age: '18',
  },
  mnopqr: {
    name: 'Clark Kent',
    age: '34',
  },
};

class ExampleComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Lists</h2>
        <ul>
          {NAMES.map(name => {
            // You can do some treatment here if needed
            return (
              // You must provide a unique key value when you render a list
              <li key={name}>{name}</li>
            );
          })}
        </ul>
        <h2>Lists</h2>
        <ul>
          {
            // This is a shorter syntax with a direct return of our jsx
            // Notice the use of Object.values to use .map with an object
            Object.values(PERSONS).map(({ name }) => (
              <li key={name}>{name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ExampleComponent;
