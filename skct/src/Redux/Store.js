import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming your rootReducer is in a file called reducers.js

const Store = createStore(rootReducer);

export default Store;