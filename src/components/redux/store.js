
import {createStore} from 'redux';
import laptopreducer from './reducers/laptopreducer.js';

const store=createStore(laptopreducer);
export default store;