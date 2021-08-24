import React, { Component } from 'react';

export default class FetchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      items: [],
      error: false,
    };
  }

  componentDidMount() {
    this.setState(state => ({ ...state, pending: true }));
    fetch('https://some-url.com/api/items')
      .then(res => this.setState(state => ({ ...state, pending: false, items: res.body })))
      .catch(err => {
        // Do something with the error
        console.log(err);
        this.setState(state => ({ ...state, error: true, pending: false }));
      });
  }

  render() {
    const { pending, error, items } = this.state;

    if (pending && items.length === 0) {
      return <p>Some Loader Component</p>;
    }

    if (error) {
      return <p>Error Page Component...</p>;
    }

    return (
      <div>
        {items.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
