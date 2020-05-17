import React from 'react';
import Button from '@material-ui/core/Button';
import BookDialog from '../library/dialog'


export default class Add extends React.Component {
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

    render(){
        return(
            <div style={{display:'flax',alignItems:'center'}}>
                <Button onClick={this.handleClick}>Add book</Button>
                {this.state.openDialog && <BookDialog   open={this.state.openDialog} close={this.handleClose}/> }
            </div>
        )
    }

} 