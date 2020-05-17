import React from 'react';
import {connect} from 'react-redux';
import  LibraryGrid  from "./libraryGrid";

const mapStateToProps=(state,ownProps)=>{
    return ({
        bookList:state.booksList
    })
};

export default connect(mapStateToProps)(LibraryGrid);