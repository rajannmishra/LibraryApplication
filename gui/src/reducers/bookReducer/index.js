import * as types from '../../actions';

export const booksList =(state = [],action)=>{
    switch(action.type){
        case types.LOAD_BOOK_LIST:
            return action.payload;
        default:
                return state;
    }
}