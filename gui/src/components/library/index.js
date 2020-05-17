import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookActions from '../../actions/bookActions';
import Library from './library';



const mapStateToProps=(state,ownProps)=>{
    return ({
        bookList:state.bookList
    })
};

const mapDispatchToProps =(dispatch)=>{
   
    return {
        actions : bindActionCreators({...BookActions},dispatch)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Library);