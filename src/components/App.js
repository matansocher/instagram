import React, { Component } from 'react';
import TopMenu from './TopMenu';
import PostsList from './PostsList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="top-menu-container">
          <TopMenu />
        </div>

        <div className="center">
          <h1>asdlkjcnasdlkcjn</h1>
        </div>

        <div className="content-container">
          <PostsList />
        </div>
      </div>
    );
  }
}

export default App;
