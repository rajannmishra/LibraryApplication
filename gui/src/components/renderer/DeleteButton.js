import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as BookActions from '../../actions/bookActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class DeleteButton extends React.Component{
   

    handleClick=()=>{
        console.log(this.props.node.data);
        this.props.actions.deleteBook(this.props.node.data)
    };

    
    render() {
        return (
            <>
                <IconButton aria-label="Edit" onClick={this.handleClick}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                
            </>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
   
    return {
        actions : bindActionCreators({...BookActions},dispatch)
    };
};

export default connect(null,mapDispatchToProps)(DeleteButton);

