import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BookActions from '../../../actions/bookActions';
import BookDialog from './BookDialog';

const mapDispatchToProps =(dispatch)=>{
   
    return {
        actions : bindActionCreators({...BookActions},dispatch)
    };
};


export default connect(null,mapDispatchToProps)(BookDialog)