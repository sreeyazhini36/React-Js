import React from 'react';
import Store from './Store1'; // Import your Redux store
import { Provider } from 'react-redux'; // Provider from react-redux

import BlogEditor from './BlogEditor';

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <h1>Your Blogging App</h1>
        <BlogEditor />
      </div>
    </Provider>
  );
};

export default App;
