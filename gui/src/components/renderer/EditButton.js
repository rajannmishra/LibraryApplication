import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import BookDialog from '../library/dialog'


export default class EditButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openDialog:false
        }
    }

    handleClick=()=>{
        this.setState({openDialog:true});
    };

    handleClose=()=>{
        this.setState({openDialog:false});
    }
    render() {
        return (
            <>
                <IconButton aria-label="Edit" onClick={this.handleClick}>
                    <EditIcon fontSize="small" />
                </IconButton>
                {this.state.openDialog && <BookDialog   open={this.state.openDialog} close={this.handleClose} action='edit' book={this.props.node.data}/> }
            </>
        )
    }
}
