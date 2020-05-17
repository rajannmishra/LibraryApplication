import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { render } from '@testing-library/react';
import { isEmpty } from '../../../utils';

let EmptyBook={
    isbn:'',
    title:'',
    publisher:'',
    copies:0,
    author:['']
}

export default class BookDialog extends React.Component {

    constructor(props) {
        super(props);
        const {book} = this.props
        this.state = {
            open: props.open,
            book: isEmpty(book)?EmptyBook:book
        }
    }

    handleClose = () => {
        this.setState({ book: {} });
        this.props.close();
    };

    handleSubmit = () => {
        console.log(this.state.book)
        this.props.actions.addBook(this.state.book);
        this.handleClose();
    }

    onBlur = (param) => {
        console.log(param);
        let book = { ...this.state.book, ...param };
        console.log(book);
        this.setState({ book });
    }

    onAuthorBlur = (event) => {
        let authors = event.target.value.split(",").map(s => ({ "name": s }));
        const { author } = this.state.book;
        let book = { ...this.state.book };

        book = { ...book, author: authors };

        this.setState({ book });
    }

    render() {

        return (
            <div>

                <Dialog open={this.state.open} onClose={this.handleClose} >
                    <DialogTitle id="form-dialog-title">Book details</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="isbn"
                            label="ISBN"
                            fullWidth
                            defaultValue={this.state.book.isbn}
                            disabled={this.props.action === 'edit' ? true : false}
                            onBlur={e => this.onBlur({ 'isbn': e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="title"
                            label="Title"
                            fullWidth
                            defaultValue={this.state.book.title}
                            onBlur={e => this.onBlur({ 'title': e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="publisher"
                            label="Publisher"
                            fullWidth
                            defaultValue={this.state.book.publisher}
                            onBlur={e => this.onBlur({ 'publisher': e.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="copies"
                            label="Copies"
                            fullWidth
                            defaultValue={this.state.book.copies}
                            onBlur={e => this.onBlur({ 'copies': e.target.value })}
                            type='number'
                        />
                        <TextField

                            margin="dense"
                            id="author"
                            label="Author"
                            fullWidth
                            defaultValue={this.state.book.author.map(author => author.name).join(",")}
                            onBlur={e => this.onAuthorBlur(e)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                        {this.props.action === 'edit' ? 'Update' : 'Add'}
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
