import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';


const ActionRenderer = (props) => (
    <React.Fragment>
        <EditButton {...props} />
        <DeleteButton {...props} />
    </React.Fragment>
)

export default ActionRenderer;