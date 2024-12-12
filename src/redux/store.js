import { createStore, combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;
