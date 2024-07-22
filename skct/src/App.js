// App.js

///import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
///import BlogEditor from './BlogEditor';
//import BlogDisplay from './BlogDisplay';

//const App = () => {
  //return (
   // <Router>
   ///   <Switch>
   ///     <Route path="/" exact component={BlogEditor} />
       // <Route path="/blog/:content/:imagePreview" component={BlogDisplay} />
   //   </Switch>
    //</Router>
 // );
//};

//export default App;
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App2 from './BlogEditor/App2'
import PostPage from './BlogEditor/PostPage';

const App = () => {
  return (
    <Router>
      
        <Route path="/post" component={<PostPage/>} />
        <Route path="/" component={<App2/>} />
      
    </Router>
  );
};

export default App;
