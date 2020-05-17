import React from 'react';
import { isEmpty } from '../../utils';
import LibraryHeader from '../header'
import LibraryGrid from '../grid';



export default class Library extends React.Component {

    componentDidMount() {
        console.log(this.props.actions);
        this.props.actions.loadBooks();

    }

    render() {
        return (
            <React.Fragment>
                <LibraryHeader />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LibraryGrid />
                </div>

            </React.Fragment>

        )
    }
}