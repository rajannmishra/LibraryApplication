import * as Service from '../service';
import * as types from './index';

export const loadBooks=()=>{
    return (dispatch)=>{
        return Service.get("getBooks",null,(response=>{
            if(!!response){
                dispatch({type:types.LOAD_BOOK_LIST,payload:response.data});
            }
        }))
    }
};

export const addBook = (data)=>{
    return (dispatch)=>{
        return Service.post("add",data,null, (response =>{
            if(!!response){
                dispatch({type:types.LOAD_BOOK_LIST,payload:response.data});
            }
        }))
    }
}

export const deleteBook =(data)=>{
    return (dispatch)=>{
        return Service.post("delete",data,null, (response =>{
            if(!!response){
                dispatch({type:types.LOAD_BOOK_LIST,payload:response.data});
            }
        }))
    }
}