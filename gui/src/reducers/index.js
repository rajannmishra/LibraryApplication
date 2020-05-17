import {combineReducers} from 'redux';
import {booksList} from './bookReducer';

const rootReducer = combineReducers({
    booksList
});

export default rootReducer;