import { createStore } from 'redux';
import counterReducer from './Reducer1';

const Store = createStore(counterReducer);

export default Store;
